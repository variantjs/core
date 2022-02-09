import isSameYear from '../../dates/isSameYear';

describe('isSameYear', () => {
  it('determines that the same date is in the same year', () => {
    const date1 = new Date(2020, 0, 15);
    const date2 = new Date(2020, 0, 15);

    expect(isSameYear(date1, date2)).toBe(true);
  });

  it('determines that a date is in the same year if day is different', () => {
    const date1 = new Date(2020, 0, 15);
    const date2 = new Date(2020, 0, 15);

    expect(isSameYear(date1, date2)).toBe(true);
  });

  it('determines that a date is in the same year if month is different', () => {
    const date1 = new Date(2020, 1, 15);
    const date2 = new Date(2020, 0, 15);

    expect(isSameYear(date1, date2)).toBe(true);
  });

  it('determines that a date is not in the same year if year is different', () => {
    const date1 = new Date(2021, 0, 15);
    const date2 = new Date(2020, 0, 15);

    expect(isSameYear(date1, date2)).toBe(false);
  });

  it('determines that a date is not in the same year if second one is undefined', () => {
    const date1 = new Date(2021, 0, 15);
    const date2 = undefined;

    expect(isSameYear(date1, date2)).toBe(false);
  });

  it('determines that a date is not in the same year if first one is undefined', () => {
    const date1 = undefined;
    const date2 = new Date(2021, 0, 15);

    expect(isSameYear(date1, date2)).toBe(false);
  });

  it('determines that a date is not in the same year if both undefined', () => {
    const date1 = undefined;
    const date2 = undefined;

    expect(isSameYear(date1, date2)).toBe(false);
  });
});
