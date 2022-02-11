import dateIsValid from '../../dates/dateIsValid';

describe('dateIsValid', () => {
  it('a regular date is valid', () => {
    const date = new Date(2020, 0, 15);
    
    expect(dateIsValid(date)).toBe(true);
  });

  it('an undefined date is valid', () => {
    expect(dateIsValid(undefined)).toBe(true);
  });

  it('marks as invalid an invalid date', () => {
    const date = new Date('foo');

    expect(dateIsValid(date)).toBe(false);
  });

  it('marks as valid a date with a negative timestamp', () => {
    const date = new Date(-1);

    expect(dateIsValid(date)).toBe(true);
  });

  it('a date in year 0 is valid', () => {
    const date = new Date('0000-01-01T00:00:00.000Z');

    expect(dateIsValid(date)).toBe(true);
  });

  it('a date below year 0 is not valid', () => {
    const firstDate = new Date('0000-01-01T00:00:00.000Z');

    const date = new Date(firstDate.getTime() - 1);

    expect(dateIsValid(date)).toBe(false);
  });

  it('validates a date that is the last of year 9999 ', () => {
    const date = new Date('9999-12-31T23:59:59.999Z');

    expect(dateIsValid(date)).toBe(true);
  });
  
  it('a date above year 9999 is not valid', () => {
    const firstDate = new Date('9999-12-31T23:59:59.999Z');

    const date = new Date(firstDate.getTime() + 1);

    expect(dateIsValid(date)).toBe(false);
  });
});
