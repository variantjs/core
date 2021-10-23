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
      expect(parseDate('today')).toEqual(new Date());
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
