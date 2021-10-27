import { DateLocale } from '../../types/Dates';
import formatDate from '../../dates/formatDate';
import { English as defaultLocale } from '../../dates/l10n/default';
import { Spanish } from '../../dates/l10n/es';
// import clone from '../../helpers/clone';

describe('formatDate', () => {
  const format = 'Y-m-d H:i:S';

  it('returns an empty string if for null values', () => {
    expect(formatDate(null, format)).toBe('');
  });

  it('formats the date', () => {
    const date = new Date(2021, 6, 1, 12, 30, 45);
    expect(formatDate(date, format)).toBe('2021-07-01 12:30:45');
  });

  it('formats considering an escaped token', () => {
    const date = new Date(2021, 6, 1, 12, 30, 45);
    expect(formatDate(date, '\\Y-m-d H:i:S')).toBe('Y-07-01 12:30:45');
  });

  describe('format a single token', () => {
    const date = new Date(2021, 6, 1, 20, 11, 8);

    // d / Day of the month, 2 digits with leading zeros / 01 to 31
    it('d', () => {
      expect(formatDate(date, 'd')).toEqual('01');
    });

    // D / A textual representation of a day / Mon through Sun
    it('D', () => {
      // Doesnt affect the date when parsing
      expect(formatDate(date, 'D')).toEqual('Thu');
    });

    // l (lowercase 'L') / A full textual representation of the day of the week / Sunday through Saturday
    it('l', () => {
      // Doesnt affect the date when parsing
      expect(formatDate(date, 'l')).toEqual('Thursday');
    });

    // j / Day of the month without leading zeros / 1 to 31
    it('j', () => {
      expect(formatDate(date, 'j')).toEqual('1');
    });

    // J / Day of the month without leading zeros and ordinal suffix / 1st, 2nd, to 31st
    it('J', () => {
      expect(formatDate(date, 'J')).toEqual('1st');
    });

    it('J nd', () => {
      const date2d = new Date(2021, 6, 2);
      expect(formatDate(date2d, 'J')).toEqual('2nd');
    });

    it('J rd', () => {
      const date3d = new Date(2021, 6, 3);
      expect(formatDate(date3d, 'J')).toEqual('3rd');
    });

    it('J th', () => {
      const date3d = new Date(2021, 6, 4);
      expect(formatDate(date3d, 'J')).toEqual('4th');
    });

    // w / Numeric representation of the day of the week / 0 (for Sunday) through 6 (for Saturday)
    it('w', () => {
      // Doesnt affect the date when parsing
      expect(formatDate(date, 'w')).toEqual('4');
    });
    // W / Numeric representation of the week / 0 (first week of the year) through 52 (last week of the year)
    it('W', () => {
      expect(formatDate(date, 'W')).toEqual('26');
    });
    // F / A full textual representation of a month / January through December
    it('F', () => {
      expect(formatDate(date, 'F')).toEqual('July');
    });
    // m / Numeric representation of a month, with leading zero / 01 through 12
    it('m', () => {
      expect(formatDate(date, 'm')).toEqual('07');
    });
    // n / Numeric representation of a month, without leading zeros / 1 through 12
    it('n', () => {
      // Timezone affected because the daylight saving
      expect(formatDate(date, 'n')).toEqual('7');
    });
    // M / A short textual representation of a month / Jan through Dec
    it('M', () => {
      expect(formatDate(date, 'M')).toEqual('Jul');
    });
    // U / The number of seconds since the Unix Epoch / 1413704993
    it('U', () => {
      expect(formatDate(date, 'U')).toEqual('1625188268');
    });
    // y / A two digit representation of a year / 99 or 03
    it('y', () => {
      expect(formatDate(date, 'y')).toEqual('21');
    });
    // Y / A full numeric representation of a year, 4 digits / 1999 or 2003
    it('Y', () => {
      expect(formatDate(date, 'Y')).toEqual('2021');
    });
    // Z / ISO Date format / 2017-03-04T01:23:43.000Z
    it('Z', () => {
      expect(formatDate(date, 'Z')).toEqual('2021-07-02T01:11:08.000Z');
    });

    // H / Hours (24 hours) / 00 to 23
    it('H', () => {
      expect(formatDate(date, 'H')).toEqual('20');
    });

    // h / Hours / 1 to 12
    it('h', () => {
      expect(formatDate(date, 'h')).toEqual('8');
    });

    it('h at 12', () => {
      const dateAfter12 = new Date(2021, 6, 1, 12);
      expect(formatDate(dateAfter12, 'h')).toEqual('12');
    });

    // G / Hours, 2 digits with leading zeros / 1 to 12
    it('G', () => {
      expect(formatDate(date, 'G')).toEqual('08');
    });
    // i / Minutes / 00 to 59
    it('i', () => {
      expect(formatDate(date, 'i')).toEqual('11');
    });
    // S / Seconds, 2 digits / 00 to 59
    it('S', () => {
      expect(formatDate(date, 'S')).toEqual('08');
    });
    // s / Seconds / 0, 1 to 59
    it('s', () => {
      expect(formatDate(date, 's')).toEqual('8');
    });
    // K / AM/PM / AM or PM
    it('K', () => {
      expect(formatDate(date, 'K')).toEqual('PM');
    });
    it('K for AM', () => {
      const dateAM = new Date(2021, 6, 1, 10, 11, 8);
      expect(formatDate(dateAM, 'K')).toEqual('AM');
    });
  });

  describe('Custom locale', () => {
    const allTokens = [
      'D', 'F', 'G', 'H', 'J', 'K', 'M', 'S', 'U', 'W', 'Y', 'Z', 'd', 'h', 'i', 'j', 'l', 'm', 'n', 's', 'w', 'y',
    ];

    it('Spanish', () => {
      const date = new Date(2021, 6, 2, 8, 11, 8);
      const customLocale: DateLocale = {
        ...defaultLocale,
        ...Spanish,
      };
      expect(formatDate(date, allTokens.join('-'), customLocale)).toEqual('Vie-Julio-08-08-2º-AM-Jul-08-1625231468-26-2021-2021-07-02T13:11:08.000Z-02-8-11-2-Viernes-07-7-8-5-21');
    });
  });
});
