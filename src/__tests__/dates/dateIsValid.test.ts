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
});
