import dateIsPartOfTheRange from '../dates/dateIsPartOfTheRange';

describe('dateIsPartOfTheRange', () => {
  it('returns true if date is exactly the same date as the min date ', async () => {
    const date = new Date(2010, 0, 1, 0, 0, 0, 0);
    const min = new Date(2010, 0, 1, 0, 0, 0, 0);
    const max = new Date(2010, 0, 1, 0, 0, 0, 1);

    expect(dateIsPartOfTheRange(date, min, max)).toBe(true);
  });

  it('returns true if date is exactly the same date as the min date and max date is undefined ', async () => {
    const date = new Date(2010, 0, 1, 0, 0, 0, 0);
    const min = new Date(2010, 0, 1, 0, 0, 0, 0);
    const max = undefined;

    expect(dateIsPartOfTheRange(date, min, max)).toBe(true);
  });

  it('returns true if date is exactly the max date ', async () => {
    const date = new Date(2010, 0, 1, 0, 0, 0, 1);
    const min = new Date(2010, 0, 1, 0, 0, 0, 0);
    const max = new Date(2010, 0, 1, 0, 0, 0, 1);

    expect(dateIsPartOfTheRange(date, min, max)).toBe(true);
  });

  it('returns true if date is exactly the max date and min date is undefined', async () => {
    const date = new Date(2010, 0, 1, 0, 0, 0, 1);
    const min = undefined;
    const max = new Date(2010, 0, 1, 0, 0, 0, 1);

    expect(dateIsPartOfTheRange(date, min, max)).toBe(true);
  });

  it('returns false if date is before the min date ', async () => {
    const date = new Date(2010, 0, 1, 0, 0, 0, 0);
    const min = new Date(2010, 0, 1, 0, 0, 0, 1);
    const max = new Date(2010, 0, 1, 0, 0, 0, 2);

    expect(dateIsPartOfTheRange(date, min, max)).toBe(false);
  });

  it('returns false if date is before the min date and max date is undefined ', async () => {
    const date = new Date(2010, 0, 1, 0, 0, 0, 0);
    const min = new Date(2010, 0, 1, 0, 0, 0, 1);
    const max = undefined;

    expect(dateIsPartOfTheRange(date, min, max)).toBe(false);
  });

  it('returns false if date is after the max date ', async () => {
    const date = new Date(2010, 0, 1, 0, 0, 0, 2);
    const min = new Date(2010, 0, 1, 0, 0, 0, 1);
    const max = new Date(2010, 0, 1, 0, 0, 0, 1);

    expect(dateIsPartOfTheRange(date, min, max)).toBe(false);
  });

  it('returns false if date is after the max date and min is undefined ', async () => {
    const date = new Date(2010, 0, 1, 0, 0, 0, 1);
    const min = undefined;
    const max = new Date(2010, 0, 1, 0, 0, 0, 0);

    expect(dateIsPartOfTheRange(date, min, max)).toBe(false);
  });

  it('returns true if max and min is undefined ', async () => {
    const date = new Date(2010, 0, 1, 0, 0, 0, 1);
    const min = undefined;
    const max = undefined;

    expect(dateIsPartOfTheRange(date, min, max)).toBe(true);
  });
});
