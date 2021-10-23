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

  it('doesnt affects the original date', () => {
    const originalDate = new Date(2020, 0, 15, 10, 11, 12);
    const date = new Date(2020, 0, 15, 10, 11, 12);

    getFirstDayOfNextMonth(date);

    expect(date).toEqual(originalDate);
  });
});
