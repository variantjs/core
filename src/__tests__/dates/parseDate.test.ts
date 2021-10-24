import parseDate from '../../dates/parseDate';

describe('parseDate', () => {
  const defaultFormat = 'Y-m-d H:i:S';
  // const defaultTimeless = false;
  const timeless = true;

  describe('String parsing', () => {
    it('returns undefined if empty date string', () => {
      expect(parseDate('')).toBeUndefined();
    });

    it('returns today date if passed `today`', () => {
      const today = new Date(new Date().getFullYear(), (new Date()).getMonth(), (new Date()).getDate(), 0, 0, 0, 0);
      expect(parseDate('today')).toEqual(today);
    });

    it('parses gmt dates', () => {
      expect(parseDate('Sat, 23 Oct 2021 20:58:00 GMT'))
        .toEqual(new Date(Date.UTC(2021, 9, 23, 20, 58, 0, 0)));
    });

    it('parses iso dates', () => {
      expect(parseDate('2021-10-23T20:58:11.733Z'))
        .toEqual(new Date(Date.UTC(2021, 9, 23, 20, 58, 11, 733)));
    });

    it('parses a date in the default format', () => {
      expect(parseDate('2020-02-18 12:34:56')).toEqual(new Date(2020, 1, 18, 12, 34, 56));
    });

    it('parses a date ignoring time', () => {
      expect(parseDate('2020-02-18 12:34:56', defaultFormat, timeless)).toEqual(new Date(2020, 1, 18, 0, 0, 0));
    });

    it('escapes the token', () => {
      expect(parseDate('2020Y-02-18 12m:34:56', 'Y\\Y-m-d H\\m:i:S')).toEqual(new Date(2020, 1, 18, 12, 34, 56));
    });

    describe('parse a single token', () => {
      let baseDate: Date;

      beforeEach(() => {
        baseDate = new Date('2021-01-01T06:00:00.000Z');

        jest
          .useFakeTimers()
          .setSystemTime(baseDate.getTime());
      });

      afterEach(() => {
        jest.useRealTimers();
      });

      // d / Day of the month, 2 digits with leading zeros / 01 to 31
      it('d', () => {
        expect(parseDate('05', 'd')).toEqual(new Date('2021-01-05T06:00:00.000Z'));
      });

      // D / A textual representation of a day / Mon through Sun
      it('D', () => {
        // Doesnt affect the date when parsing
        expect(parseDate('Tue', 'D')).toEqual(new Date('2021-01-01T06:00:00.000Z'));
      });

      // l (lowercase 'L') / A full textual representation of the day of the week / Sunday through Saturday
      it('l', () => {
        // Doesnt affect the date when parsing
        expect(parseDate('Saturday', 'l')).toEqual(new Date('2021-01-01T06:00:00.000Z'));
      });

      // j / Day of the month without leading zeros / 1 to 31
      it('j', () => {
        expect(parseDate('10', 'j')).toEqual(new Date('2021-01-10T06:00:00.000Z'));
      });

      // J / Day of the month without leading zeros and ordinal suffix / 1st, 2nd, to 31st
      it('J', () => {
        expect(parseDate('22nd', 'J')).toEqual(new Date('2021-01-22T06:00:00.000Z'));
      });
      // w / Numeric representation of the day of the week / 0 (for Sunday) through 6 (for Saturday)
      it('w', () => {
        // Doesnt affect the date when parsing
        expect(parseDate('4', 'w')).toEqual(new Date('2021-01-01T06:00:00.000Z'));
      });
      // W / Numeric representation of the week / 0 (first week of the year) through 52 (last week of the year)
      it('W', () => {
        expect(parseDate('32', 'W')).toEqual(new Date('2021-08-01T05:00:00.000Z'));
      });
      // F / A full textual representation of a month / January through December
      it('F', () => {
        expect(parseDate('November', 'F')).toEqual(new Date('2021-11-01T06:00:00.000Z'));
      });
      // m / Numeric representation of a month, with leading zero / 01 through 12
      it('m', () => {
        expect(parseDate('11', 'm')).toEqual(new Date('2021-11-01T06:00:00.000Z'));
      });
      // n / Numeric representation of a month, without leading zeros / 1 through 12
      it('n', () => {
        // Timezone affected because the daylight saving
        expect(parseDate('9', 'n')).toEqual(new Date('2021-09-01T05:00:00.000Z'));
      });
      // M / A short textual representation of a month / Jan through Dec
      it('M', () => {
        expect(parseDate('Feb', 'M')).toEqual(new Date('2021-02-01T06:00:00.000Z'));
      });
      // U / The number of seconds since the Unix Epoch / 1413704993
      it('U', () => {
        expect(parseDate('1635080656', 'U')).toEqual(new Date('2021-10-24T13:04:16.000Z'));
      });
      // y / A two digit representation of a year / 99 or 03
      it('y', () => {
        expect(parseDate('20', 'y')).toEqual(new Date('2020-01-01T06:00:00.000Z'));
      });
      // Y / A full numeric representation of a year, 4 digits / 1999 or 2003
      it('Y', () => {
        expect(parseDate('2019', 'Y')).toEqual(new Date('2019-01-01T06:00:00.000Z'));
      });
      // Z / ISO Date format / 2017-03-04T01:23:43.000Z
      it('Z', () => {
        expect(parseDate('2019-01-01T06:00:00.000Z', 'Z')).toEqual(new Date('2019-01-01T06:00:00.000Z'));
      });

      // H / Hours (24 hours) / 00 to 23
      it('H', () => {
        expect(parseDate('14', 'H')).toEqual(new Date('2021-01-01T20:00:00.000Z'));
      });
      // h / Hours / 1 to 12
      it('h', () => {
        expect(parseDate('6', 'h')).toEqual(new Date('2021-01-01T12:00:00.000Z'));
      });
      // G / Hours, 2 digits with leading zeros / 1 to 12
      it('G', () => {
        expect(parseDate('10', 'G')).toEqual(new Date('2021-01-01T16:00:00.000Z'));
      });
      // i / Minutes / 00 to 59
      it('i', () => {
        expect(parseDate('35', 'i')).toEqual(new Date('2021-01-01T06:35:00.000Z'));
      });
      // S / Seconds, 2 digits / 00 to 59
      it('S', () => {
        expect(parseDate('42', 'S')).toEqual(new Date('2021-01-01T06:00:42.000Z'));
      });
      // s / Seconds / 0, 1 to 59
      it('s', () => {
        expect(parseDate('18', 's')).toEqual(new Date('2021-01-01T06:00:18.000Z'));
      });
      // K / AM/PM / AM or PM
      it('K', () => {
        expect(parseDate('PM', 'K')).toEqual(new Date('2021-01-01T18:00:00.000Z'));
      });
    });
  });

  describe('Numeric values parsing', () => {
    it('returns a 0 date if passed `0` as a param', () => {
      expect(parseDate(0)).toEqual(new Date(0));
    });
  });

  describe('Date instances parsing', () => {
    it('returns a clone of the date passed as a paramenter', () => {
      const date = new Date(2020, 2, 15);

      expect(parseDate(date)).toEqual(new Date(2020, 2, 15));
    });

    it('returns same date but with the time reset if timeless', () => {
      const date = new Date(2020, 2, 15, 12, 30, 45);

      expect(parseDate(date, defaultFormat, timeless)).toEqual(new Date(2020, 2, 15, 0, 0, 0, 0));
    });
  });

  describe('Timestamp instances parsing', () => {
    it('returns a date when passing the timestamp ', () => {
      const date = new Date(2020, 2, 15);

      expect(parseDate(date.getTime())).toEqual(new Date(2020, 2, 15));
    });

    it('returns a date when passing the timestamp as number ', () => {
      const date = new Date(2020, 2, 15);

      expect(parseDate(+date)).toEqual(new Date(2020, 2, 15));
    });

    it('returns a date when passing the timestamp as a regular number ', () => {
      expect(parseDate(1584252000000)).toEqual(new Date(2020, 2, 15));
    });
  });
});
