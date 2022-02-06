import range from '../helpers/range';

describe('range', () => {
  it('creates a range between 2 numbers', () => {
    expect(range(1, 5)).toEqual([1, 2, 3, 4, 5]);
  });

  it('creates a range between 2 numbers with one negative value', () => {
    expect(range(-3, 2)).toEqual([-3, -2, -1, 0, 1, 2]);
  });

  it('creates a range between 2 numbers with two negative values', () => {
    expect(range(-5, -2)).toEqual([-5, -4, -3, -2]);
  });
});
