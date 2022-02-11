import getFirstDayOfNextMonth from '../../dates/getFirstDayOfNextMonth';

describe('getFirstDayOfNextMonth', () => {
  it('gets the first day of next month', () => {
    // 2020-01-15
    const date = new Date(2020, 0, 15);

    expect(getFirstDayOfNextMonth(date)).toEqual(new Date(2020, 1, 1));
  });

  it('gets the first day of next month for last month', () => {
    // 2020-12-15
    const date = new Date(2020, 11, 15);

    expect(getFirstDayOfNextMonth(date)).toEqual(new Date(2021, 0, 1));
  });

  it('gets the first day of next month if last day', () => {
    // 2020-01-31
    const date = new Date(2020, 0, 31);

    expect(getFirstDayOfNextMonth(date)).toEqual(new Date(2020, 1, 1));
  });

  it('gets the first day of next month if last day of year', () => {
    // 2020-12-31
    const date = new Date(2020, 11, 31);

    expect(getFirstDayOfNextMonth(date)).toEqual(new Date(2021, 0, 1));
  });

  it('doesnt affects the original date', () => {
    const originalDate = new Date(2020, 0, 15, 10, 11, 12);
    const date = new Date(2020, 0, 15, 10, 11, 12);

    getFirstDayOfNextMonth(date);

    expect(date).toEqual(originalDate);
  });

  it('works with dates before 1970', () => {
    const date = new Date('0010-02-18T00:00:00.000Z');
    const expected = new Date('0010-03-01T00:00:00.000Z');
    
    expect(getFirstDayOfNextMonth(date)).toEqual(expected);
  });
});
