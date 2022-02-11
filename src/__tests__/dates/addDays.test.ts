import addDays from '../../dates/addDays';

describe('addDays', () => {
  it('adds 1 day by default', () => {
    const date = new Date(2020, 0, 15);
    const expected = new Date(2020, 0, 16);

    expect(addDays(date)).toEqual(expected);
  });

  it('adds a day to a date before 1970', () => {
    const date = new Date('0010-02-18T12:00:00.000Z');
    const expected = new Date('0010-02-19T12:00:00.000Z');
    
    expect(addDays(date)).toEqual(expected);
  });


  it('changes the month if last day of month', () => {
    const date = new Date(2021, 9, 31);
    const expected = new Date(2021, 10, 1);

    expect(addDays(date)).toEqual(expected);
  });

  it('accepts a custom amount of days', () => {
    const date = new Date(2020, 0, 15);
    const expected = new Date(2020, 0, 18);

    expect(addDays(date, 3)).toEqual(expected);
  });

  it('accepts a negative amount of days', () => {
    const date = new Date(2020, 0, 15);
    const expected = new Date(2020, 0, 12);

    expect(addDays(date, -3)).toEqual(expected);
  });

  it('doesnt affect the original date', () => {
    const date = new Date(2020, 0, 15);
    const expected = new Date(2020, 0, 16);

    expect(addDays(date)).toEqual(expected);
    expect(date).toEqual(new Date(2020, 0, 15));
  });
});
