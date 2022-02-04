import diffInDays from '../../dates/diffInDays';

describe('diffInDays', () => {
  it('returns `false` if no date', () => {
    const undefinedDate = undefined;
    const definedDate = new Date(2020, 1, 15);

    expect(diffInDays(undefinedDate, definedDate)).toBe(false);
    
    expect(diffInDays(definedDate, undefinedDate)).toBe(false);
    
    expect(diffInDays(undefinedDate, undefinedDate)).toBe(false);
  });

  it.each([
    new Date(2020, 1, 15, 23, 59, 59),
    new Date(2020, 1, 15, 0, 0, 0),
    new Date(2020, 1, 15, 12, 0, 0),
  ])('returns 0 if is the same day', (compareWith) => {
    const date = new Date(2020, 1, 15, 12, 0, 0);

    expect(diffInDays(date, compareWith)).toBe(0);
  });

  describe.each([
    new Date(2020, 1, 15, 23, 59, 59),
    new Date(2020, 1, 15, 0, 0, 0),
    new Date(2020, 1, 15, 12, 0, 0),
  ])('same day', (date) => {
    it.each([
      new Date(2020, 1, 15, 23, 59, 59),
      new Date(2020, 1, 15, 0, 0, 0),
      new Date(2020, 1, 15, 12, 0, 0),
    ])('returns 0 if is the same day', (compareWith) => {
      expect(diffInDays(date, compareWith)).toBe(0);
    });
  });

  describe.each([
    new Date(2020, 1, 15, 23, 59, 59),
    new Date(2020, 1, 15, 0, 0, 0),
    new Date(2020, 1, 15, 12, 0, 0),
  ])('1 day after', (date) => {
    it.each([
      new Date(2020, 1, 16, 23, 59, 59),
      new Date(2020, 1, 16, 0, 0, 0),
      new Date(2020, 1, 16, 12, 0, 0),
    ])('returns 1 if is the next day', (compareWith) => {
      expect(diffInDays(date, compareWith)).toBe(1);
    });
  });

  describe.each([
    new Date(2020, 1, 16, 23, 59, 59),
    new Date(2020, 1, 16, 0, 0, 0),
    new Date(2020, 1, 16, 12, 0, 0),
  ])('1 day before', (date) => {
    it.each([
      new Date(2020, 1, 15, 23, 59, 59),
      new Date(2020, 1, 15, 0, 0, 0),
      new Date(2020, 1, 15, 12, 0, 0),
    ])('returns -1 if is the previous day', (compareWith) => {
      expect(diffInDays(date, compareWith)).toBe(-1);
    });
  });

  describe.each([
    new Date(2020, 1, 16, 23, 59, 59),
    new Date(2020, 1, 16, 0, 0, 0),
    new Date(2020, 1, 16, 12, 0, 0),
  ])('1 day before', (date) => {
    it.each([
      new Date(2020, 1, 15, 23, 59, 59),
      new Date(2020, 1, 15, 0, 0, 0),
      new Date(2020, 1, 15, 12, 0, 0),
    ])('returns 1 if is the previous day and is absolute', (compareWith) => {
      expect(diffInDays(date, compareWith, true)).toBe(1);
    });
  });

  it.each([
    { compareWith: new Date(2020, 1, 20, 23, 59, 59), expected: -116 },
    { compareWith: new Date(2019, 2, 11), expected: -462 },
    { compareWith: new Date(2020, 9, 10), expected: 117 },
  ])('returns the diff in days correctly', ({ compareWith, expected }) => {
    const date = new Date(2020, 5, 15, 12, 0, 0);
    expect(diffInDays(date, compareWith)).toBe(expected);
  });
});
