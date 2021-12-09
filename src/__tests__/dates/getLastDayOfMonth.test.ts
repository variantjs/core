import getLastDayOfMonth from '../../dates/getLastDayOfMonth';

describe('getLastDayOfMonth', () => {
  it('gets the last day of a month that have 31 days', () => {
    // 2020-01-15
    const date = new Date(2020, 0, 15);

    expect(getLastDayOfMonth(date)).toEqual(new Date(2020, 0, 31));
  });

  it('gets the last day of a month that have 28 days', () => {
    // 2020-02-15
    const date = new Date(2020, 1, 15);

    expect(getLastDayOfMonth(date)).toEqual(new Date(2020, 1, 29));
  });

  it('gets the last day of a month that have 30 days', () => {
    // 2020-04-15
    const date = new Date(2020, 3, 15);

    expect(getLastDayOfMonth(date)).toEqual(new Date(2020, 3, 30));
  });

  it('gets the last day of a month if pass the last day', () => {
    // 2020-04-30
    const date = new Date(2020, 3, 30);

    expect(getLastDayOfMonth(date)).toEqual(new Date(2020, 3, 30));
  });

  it('gets the last day of a month if pass the first day', () => {
    // 2020-04-30
    const date = new Date(2020, 3, 1);

    expect(getLastDayOfMonth(date)).toEqual(new Date(2020, 3, 30));
  });

  it('doesnt affects the original date', () => {
    const originalDate = new Date(2020, 0, 15, 10, 11, 12);
    const date = new Date(2020, 0, 15, 10, 11, 12);

    getLastDayOfMonth(date);

    expect(date).toEqual(originalDate);
  });
});
