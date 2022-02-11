import getDateInDayNumber from '../../dates/getDateInDayNumber';

describe('getDateInDayNumber', () => {
  it('gets the same date in a day number', () => {
    // 2020-01-15
    const date = new Date(2020, 0, 15);

    expect(getDateInDayNumber(date, 10)).toEqual(new Date(2020, 0, 10));
  });

  it('doesnt affects the original date', () => {
    const originalDate = new Date(2020, 0, 15, 10, 11, 12);
    const date = new Date(2020, 0, 15, 10, 11, 12);

    getDateInDayNumber(date, 12);

    expect(date).toEqual(originalDate);
  });

  it('works with dates before 1970', () => {
    const date = new Date('0010-02-18T00:00:00.000Z');
    const expected = new Date('0010-02-10T00:00:00.000Z');
    
    expect(getDateInDayNumber(date, 10)).toEqual(expected);
  });
});
