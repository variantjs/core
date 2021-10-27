import { DateLocale, TokenFormattingFunctions, DateToken } from '../types/Dates';

import { English } from './l10n/default';

const boolToInt = (bool: boolean) : 1 | 0 => (bool === true ? 1 : 0);

const pad = (number: string | number, length = 2) : string => `000${number}`.slice(length * -1);

const monthToString = (
  monthNumber: number,
  shorthand: boolean,
  locale: DateLocale,
): string => locale.months[shorthand ? 'shorthand' : 'longhand'][monthNumber];

export const tokenFormatingFunctions: TokenFormattingFunctions = {
  // get the date in UTC
  Z: (date: Date) => date.toISOString(),

  // weekday name, short, e.g. Thu
  D(date: Date, locale: DateLocale) {
    return locale.weekdays.shorthand[
      tokenFormatingFunctions.w(date, locale) as number
    ];
  },

  // full month name e.g. January
  F(date: Date, locale: DateLocale) {
    return monthToString(
      (tokenFormatingFunctions.n(date, locale) as number) - 1,
      false,
      locale,
    );
  },

  // padded hour 1-12
  G(date: Date, locale: DateLocale) {
    return pad(tokenFormatingFunctions.h(date, locale));
  },

  // hours with leading zero e.g. 03
  H: (date: Date) => pad(date.getHours()),

  // day (1-30) with ordinal suffix e.g. 1st, 2nd
  J(date: Date, locale: DateLocale) {
    return date.getDate() + locale.ordinal(date.getDate());
  },

  // AM/PM
  K: (date: Date, locale: DateLocale) => locale.amPM[boolToInt(date.getHours() > 11)],

  // shorthand month e.g. Jan, Sep, Oct, etc
  M(date: Date, locale: DateLocale) {
    return monthToString(date.getMonth(), true, locale);
  },

  // seconds 00-59
  S: (date: Date) => pad(date.getSeconds()),

  // unix timestamp
  U: (date: Date) => date.getTime() / 1000,

  W(givenDate: Date) {
    // return options.getWeek(date);
    const date = new Date(givenDate.getTime());
    date.setHours(0, 0, 0, 0);

    // Thursday in current week decides the year.
    date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7));

    // January 4 is always in week 1.
    const week1 = new Date(date.getFullYear(), 0, 4);

    // Adjust to Thursday in week 1 and count number of weeks from date to week1.
    return (
      1
        + Math.round(
          ((date.getTime() - week1.getTime()) / 86400000
            - 3
            + ((week1.getDay() + 6) % 7))
            / 7,
        )
    );
  },

  // full year e.g. 2016, padded (0001-9999)
  Y: (date: Date) => pad(date.getFullYear(), 4),

  // day in month, padded (01-30)
  d: (date: Date) => pad(date.getDate()),

  // hour from 1-12 (am/pm)
  h: (date: Date) => (date.getHours() % 12 ? date.getHours() % 12 : 12),

  // minutes, padded with leading zero e.g. 09
  i: (date: Date) => pad(date.getMinutes()),

  // day in month (1-30)
  j: (date: Date) => date.getDate(),

  // weekday name, full, e.g. Thursday
  l(date: Date, locale: DateLocale) {
    return locale.weekdays.longhand[date.getDay()];
  },

  // padded month number (01-12)
  m: (date: Date) => pad(date.getMonth() + 1),

  // the month number (1-12)
  n: (date: Date) => date.getMonth() + 1,

  // seconds 0-59
  s: (date: Date) => date.getSeconds(),

  // number of the day of the week
  w: (date: Date) => date.getDay(),

  // last two digits of year e.g. 16 for 2016
  y: (date: Date) => String(date.getFullYear()).substring(2),
};

const formatDate = (date: Date | null, format: string, customLocale?: DateLocale): string => {
  if (!date) {
    return '';
  }

  const locale = customLocale || English;

  return format
    .split('')
    .map((char, i, arr) => {
      if (tokenFormatingFunctions[char as DateToken] && arr[i - 1] !== '\\') {
        return tokenFormatingFunctions[char as DateToken](date, locale);
      } if (char !== '\\') {
        return char;
      }
      return '';
    })
    .join('');
};

export default formatDate;
