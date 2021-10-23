// Credits for most of the parsing and formatting logic should be attributed to `flatpickr/flatpickr` library
// https://github.com/flatpickr/flatpickr/blob/master/src/utils/formatting.ts

export enum WeekDay {
  Sunday = 0,
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
}

export type DateValue = Date | string | number;

export type DateLocale = {
  weekdays: {
    shorthand: [string, string, string, string, string, string, string];
    longhand: [string, string, string, string, string, string, string];
  };
  months: {
    shorthand: [
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
    ];
    longhand: [
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
    ];
  };
  daysInMonth: [
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
  ];
  firstDayOfWeek: number;
  ordinal: (nth: number) => string;
  rangeSeparator: string;
  weekAbbreviation: string;
  amPM: [string, string];
  yearAriaLabel: string;
  monthAriaLabel: string;
  hourAriaLabel: string;
  minuteAriaLabel: string;
  time24hr: boolean;
  timeLabel: string;
  okLabel: string;
};

export type CustomDateLocale = {
  ordinal?: DateLocale['ordinal'];
  daysInMonth?: DateLocale['daysInMonth'];
  firstDayOfWeek?: DateLocale['firstDayOfWeek'];
  rangeSeparator?: DateLocale['rangeSeparator'];
  weekAbbreviation?: DateLocale['weekAbbreviation'];
  yearAriaLabel?: string;
  hourAriaLabel?: string;
  minuteAriaLabel?: string;
  amPM?: DateLocale['amPM'];
  time24hr?: DateLocale['time24hr'];
  timeLabel?: DateLocale['timeLabel'];
  okLabel?: DateLocale['okLabel'];
  weekdays: {
    shorthand: [string, string, string, string, string, string, string];
    longhand: [string, string, string, string, string, string, string];
  };
  months: {
    shorthand: [
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
    ];
    longhand: [
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
    ];
  };
};

export type DateLocaleName =
  | 'ar'
  | 'at'
  | 'az'
  | 'be'
  | 'bg'
  | 'bn'
  | 'bs'
  | 'ca'
  | 'cat'
  | 'cs'
  | 'cy'
  | 'da'
  | 'de'
  | 'default'
  | 'en'
  | 'eo'
  | 'es'
  | 'et'
  | 'fa'
  | 'fi'
  | 'fo'
  | 'fr'
  | 'gr'
  | 'he'
  | 'hi'
  | 'hr'
  | 'hu'
  | 'id'
  | 'is'
  | 'it'
  | 'ja'
  | 'ka'
  | 'ko'
  | 'km'
  | 'kz'
  | 'lt'
  | 'lv'
  | 'mk'
  | 'mn'
  | 'ms'
  | 'my'
  | 'nl'
  | 'no'
  | 'pa'
  | 'pl'
  | 'pt'
  | 'ro'
  | 'ru'
  | 'si'
  | 'sk'
  | 'sl'
  | 'sq'
  | 'sr'
  | 'sv'
  | 'th'
  | 'tr'
  | 'uk'
  | 'vn'
  | 'zh'
  | 'uz'
  | 'uz_latn'
  | 'zh_tw';

export type DateLocales = {
  [key in DateLocaleName]: DateLocale
};

export type DateToken =
  | 'D'
  | 'F'
  | 'G'
  | 'H'
  | 'J'
  | 'K'
  | 'M'
  | 'S'
  | 'U'
  | 'W'
  | 'Y'
  | 'Z'
  | 'd'
  | 'h'
  | 'i'
  | 'j'
  | 'l'
  | 'm'
  | 'n'
  | 's'
  | 'u'
  | 'w'
  | 'y';

export type TokenParsingFunction = (
  date: Date,
  data: string,
  locale: DateLocale
) => Date | void | undefined;

export type TokenParsingFunctions = Record<string, TokenParsingFunction>;

export type TokenRegex = { [k in DateToken]: string };

export type TokenFormattingFunctions = Record<
DateToken,
(date: Date, locale: DateLocale) => string | number
>;
