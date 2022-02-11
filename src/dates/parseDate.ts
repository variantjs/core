import dateIsValid from './dateIsValid';
import clone from '../helpers/clone';

import {
  DateValue, DateLocale, TokenRegex, TokenParsingFunctions, TokenParsingFunction, DateToken,
} from '../types/Dates';

import { English } from './l10n/default';

const boolToInt = (bool: boolean) : 1 | 0 => (bool === true ? 1 : 0);

const doNothing = (): undefined => undefined;

const tokenParsingFunctions: TokenParsingFunctions = {
  D: doNothing,
  F(dateObj: Date, monthName: string, locale: DateLocale) {
    dateObj.setMonth(locale.months.longhand.indexOf(monthName));
  },
  G: (dateObj: Date, hour: string) => {
    dateObj.setHours(parseFloat(hour));
  },
  H: (dateObj: Date, hour: string) => {
    dateObj.setHours(parseFloat(hour));
  },
  J: (dateObj: Date, day: string) => {
    dateObj.setDate(parseFloat(day));
  },
  K: (dateObj: Date, amPM: string, locale: DateLocale) => {
    dateObj.setHours(
      (dateObj.getHours() % 12)
        + 12 * boolToInt(new RegExp(locale.amPM[1], 'i').test(amPM)),
    );
  },
  M(dateObj: Date, shortMonth: string, locale: DateLocale) {
    dateObj.setMonth(locale.months.shorthand.indexOf(shortMonth));
  },
  S: (dateObj: Date, seconds: string) => {
    dateObj.setSeconds(parseFloat(seconds));
  },
  U: (_: Date, unixSeconds: string) => new Date(parseFloat(unixSeconds) * 1000),

  W(dateObj: Date, weekNum: string, locale: DateLocale) {
    const weekNumber = parseInt(weekNum, 10);
    const date = new Date(
      dateObj.getFullYear(),
      0,
      2 + (weekNumber - 1) * 7,
      0,
      0,
      0,
      0,
    );
    date.setDate(date.getDate() - date.getDay() + locale.firstDayOfWeek);

    return date;
  },
  Y: (dateObj: Date, year: string) => {
    dateObj.setFullYear(parseFloat(year));
  },
  Z: (_: Date, ISODate: string) => new Date(ISODate),
  d: (dateObj: Date, day: string) => {
    dateObj.setDate(parseFloat(day));
  },
  h: (dateObj: Date, hour: string) => {
    dateObj.setHours(parseFloat(hour));
  },
  i: (dateObj: Date, minutes: string) => {
    dateObj.setMinutes(parseFloat(minutes));
  },
  j: (dateObj: Date, day: string) => {
    dateObj.setDate(parseFloat(day));
  },
  l: doNothing,
  m: (dateObj: Date, month: string) => {
    dateObj.setMonth(parseFloat(month) - 1);
  },
  n: (dateObj: Date, month: string) => {
    dateObj.setMonth(parseFloat(month) - 1);
  },
  s: (dateObj: Date, seconds: string) => {
    dateObj.setSeconds(parseFloat(seconds));
  },
  w: doNothing,
  y: (dateObj: Date, year: string) => {
    dateObj.setFullYear(2000 + parseFloat(year));
  },
};

const tokenRegex: TokenRegex = {
  // A textual representation of a day (regex matches any word)
  D: '(\\w+)',
  // A full textual representation of a month (regex matches any word)
  F: '(\\w+)',
  // Hours, 2 digits with leading zeros (regex matches a number with 1 or 2 digits)
  G: '(\\d\\d|\\d)',
  // Hours (24 hours) regex matches a number with 1 or 2 digits
  H: '(\\d\\d|\\d)',
  // Day of the month without leading zeros and ordinal suffix (regex matches a number with 1 or 2 digits and an optional ordinal suffix)
  J: '(\\d\\d|\\d)\\w+',
  // locale-dependent, setup on runtime (am/pm)
  K: '',
  // A short textual representation of a month (regex matches any word)
  M: '(\\w+)',
  // Seconds, 2 digits (regex matches a number with 1 or 2 digits)
  S: '(\\d\\d|\\d)',
  // The number of seconds since the Unix Epoch (Regex accepts any value)
  U: '(.+)',
  W: '(\\d\\d|\\d)',
  Y: '(\\d{4})',
  Z: '(.+)',
  d: '(\\d\\d|\\d)',
  h: '(\\d\\d|\\d)',
  i: '(\\d\\d|\\d)',
  j: '(\\d\\d|\\d)',
  l: '(\\w+)',
  m: '(\\d\\d|\\d)',
  n: '(\\d\\d|\\d)',
  s: '(\\d\\d|\\d)',
  w: '(\\d\\d|\\d)',
  y: '(\\d{2})',
};

const isTimestamp = (date: string | number): boolean => typeof date === 'number';

const isGMTString = (date: string): boolean => date.toLowerCase().endsWith('gmt');

const isIsoString = (date: string): boolean => date.toLowerCase().endsWith('z');

const getIsBackSlash = (char: string | undefined): boolean => char === '\\';

const getTokenParsingOperationsFromFormat = (date: string, format: string, locale: DateLocale): { fn: TokenParsingFunction; match: string }[] => {
  // The regex used for the `K` token is different for English and other languages
  const localeTokenRegex = { ...tokenRegex };
  // Generates something like `(AM|PM|am|pm)`
  localeTokenRegex.K = `(${locale.amPM[0]}|${
    locale.amPM[1]
  }|${locale.amPM[0].toLowerCase()}|${locale.amPM[1].toLowerCase()})`;

  const operations: { fn: TokenParsingFunction; match: string }[] = [];

  let regexString = '';
  let matchIndex = 0;

  format.split('').forEach((token: string | DateToken, tokenIndex: number) => {
    const isBackSlash = getIsBackSlash(token);
    const isEscaped = getIsBackSlash(format[tokenIndex - 1]) || isBackSlash;
    const regex: string | undefined = localeTokenRegex[token as DateToken];

    if (!isEscaped && regex) {
      regexString += regex;

      const match = new RegExp(regexString).exec(date);

      if (match !== null) {
        matchIndex += 1;

        if (token === 'Y') {
          // Should run the operation for years first
          operations.unshift({
            fn: tokenParsingFunctions[token],
            match: match[matchIndex],
          });
        } else {
          operations.push({
            fn: tokenParsingFunctions[token],
            match: match[matchIndex],
          });
        }
      }
    } else if (!isBackSlash) {
      // Meaning any character
      regexString += '.';
    }
  });

  return operations;
};

const getToday = (): Date => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return today;
};

const parseDate = (date: DateValue | undefined | null, fromFormat = 'Y-m-d H:i:S', timeless?: boolean, customLocale?: DateLocale): Date | undefined => {
  if (date !== 0 && !date) {
    return undefined;
  }

  if (date === 'today') {
    return getToday();
  }

  const locale = customLocale || English;

  let parsedDate: Date | undefined;
  const originalDate = date;

  if (date instanceof Date) {
    parsedDate = clone(date);
  } else if (isTimestamp(date)) {
    // New date from timestamp
    parsedDate = new Date(date);
  } else if (typeof date === 'string') {
    if (isGMTString(date) || isIsoString(date)) {
      parsedDate = new Date(date);
    } else {
      const operations = getTokenParsingOperationsFromFormat(date, fromFormat, locale);

      if (operations.length === 0) {
        parsedDate = undefined;
      } else {
        parsedDate = new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0);

        operations.forEach((operation) => {
          const { fn, match } = operation;
          parsedDate = fn(parsedDate as Date, String(match), locale) || parsedDate;
        });
      }
    }
  } else {
    throw new Error(`Invalid date provided: ${originalDate}`);
  }

  // eslint-disable-next-line no-restricted-globals
  if (!dateIsValid(parsedDate) || parsedDate === undefined) {
    throw new Error(`Invalid date provided: ${originalDate}`);
  }

  if (timeless === true) {
    parsedDate.setHours(0, 0, 0, 0);
  }

  return parsedDate;
};

export default parseDate;
