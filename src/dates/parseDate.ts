import clone from '../helpers/clone';

import {
  DateValue, DateLocale, TokenRegex, TokenParsingFunctions, TokenParsingFunction, DateToken,
} from '../types/Dates';

import { English } from './l10n/default';

// const pad = (number: string | number, length = 2) : string => `000${number}`.slice(length * -1);

const boolToInt = (bool: boolean) : 1 | 0 => (bool === true ? 1 : 0);

const doNothing = (): undefined => undefined;

// const monthToStr = (
//   monthNumber: number,
//   shorthand: boolean,
//   locale: DateLocale,
// ): string => locale.months[shorthand ? 'shorthand' : 'longhand'][monthNumber];

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
  u: (_: Date, unixMillSeconds: string) => new Date(parseFloat(unixMillSeconds)),
  w: doNothing,
  y: (dateObj: Date, year: string) => {
    dateObj.setFullYear(2000 + parseFloat(year));
  },
};

// export const tokenFormatingFunctions: TokenFormattingFunctions = {
//   // get the date in UTC
//   Z: (date: Date) => date.toISOString(),

//   // weekday name, short, e.g. Thu
//   D(date: Date, locale: DateLocale) {
//     return locale.weekdays.shorthand[
//       tokenFormatingFunctions.w(date, locale) as number
//     ];
//   },

//   // full month name e.g. January
//   F(date: Date, locale: DateLocale) {
//     return monthToStr(
//       (tokenFormatingFunctions.n(date, locale) as number) - 1,
//       false,
//       locale,
//     );
//   },

//   // padded hour 1-12
//   G(date: Date, locale: DateLocale) {
//     return pad(tokenFormatingFunctions.h(date, locale));
//   },

//   // hours with leading zero e.g. 03
//   H: (date: Date) => pad(date.getHours()),

//   // day (1-30) with ordinal suffix e.g. 1st, 2nd
//   J(date: Date, locale: DateLocale) {
//     return locale.ordinal !== undefined
//       ? date.getDate() + locale.ordinal(date.getDate())
//       : date.getDate();
//   },

//   // AM/PM
//   K: (date: Date, locale: DateLocale) => locale.amPM[boolToInt(date.getHours() > 11)],

//   // shorthand month e.g. Jan, Sep, Oct, etc
//   M(date: Date, locale: DateLocale) {
//     return monthToStr(date.getMonth(), true, locale);
//   },

//   // seconds 00-59
//   S: (date: Date) => pad(date.getSeconds()),

//   // unix timestamp
//   U: (date: Date) => date.getTime() / 1000,

//   W(givenDate: Date) {
//     // return options.getWeek(date);
//     const date = new Date(givenDate.getTime());
//     date.setHours(0, 0, 0, 0);

//     // Thursday in current week decides the year.
//     date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7));

//     // January 4 is always in week 1.
//     const week1 = new Date(date.getFullYear(), 0, 4);

//     // Adjust to Thursday in week 1 and count number of weeks from date to week1.
//     return (
//       1
//         + Math.round(
//           ((date.getTime() - week1.getTime()) / 86400000
//             - 3
//             + ((week1.getDay() + 6) % 7))
//             / 7,
//         )
//     );
//   },

//   // full year e.g. 2016, padded (0001-9999)
//   Y: (date: Date) => pad(date.getFullYear(), 4),

//   // day in month, padded (01-30)
//   d: (date: Date) => pad(date.getDate()),

//   // hour from 1-12 (am/pm)
//   h: (date: Date) => (date.getHours() % 12 ? date.getHours() % 12 : 12),

//   // minutes, padded with leading zero e.g. 09
//   i: (date: Date) => pad(date.getMinutes()),

//   // day in month (1-30)
//   j: (date: Date) => date.getDate(),

//   // weekday name, full, e.g. Thursday
//   l(date: Date, locale: DateLocale) {
//     return locale.weekdays.longhand[date.getDay()];
//   },

//   // padded month number (01-12)
//   m: (date: Date) => pad(date.getMonth() + 1),

//   // the month number (1-12)
//   n: (date: Date) => date.getMonth() + 1,

//   // seconds 0-59
//   s: (date: Date) => date.getSeconds(),

//   // Unix Milliseconds
//   u: (date: Date) => date.getTime(),

//   // number of the day of the week
//   w: (date: Date) => date.getDay(),

//   // last two digits of year e.g. 16 for 2016
//   y: (date: Date) => String(date.getFullYear()).substring(2),
// };

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
  u: '(.+)',
  w: '(\\d\\d|\\d)',
  y: '(\\d{2})',
};

// The Date timestamp returns and instance of `Number` which has the `toFixed` method
const isTimestamp = (date: string | number): boolean => typeof date === 'number' && date.toFixed !== undefined;

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

const parseDate = (date: DateValue, fromFormat = 'Y-m-d H:i:S', timeless?: boolean, customLocale?: DateLocale): Date | undefined => {
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
  }

  // eslint-disable-next-line no-restricted-globals
  if (!(parsedDate instanceof Date && !isNaN(parsedDate.getTime()))) {
    throw new Error(`Invalid date provided: ${originalDate}`);
  }

  if (timeless === true) {
    parsedDate.setHours(0, 0, 0, 0);
  }

  return parsedDate;
};

export default parseDate;
