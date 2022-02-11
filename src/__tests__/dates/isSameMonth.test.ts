import isSameMonth from '../../dates/isSameMonth';

describe('isSameMonth', () => {
  it('determines that the same date is in the same month', () => {
    const date1 = new Date(2020, 0, 15);
    const date2 = new Date(2020, 0, 15);

    expect(isSameMonth(date1, date2)).toBe(true);
  });

  it('determines that a date is in the same month if day is different', () => {
    const date1 = new Date(2020, 0, 15);
    const date2 = new Date(2020, 0, 15);

    expect(isSameMonth(date1, date2)).toBe(true);
  });

  it('determines that a date is not in the same month if year is different', () => {
    const date1 = new Date(2021, 0, 15);
    const date2 = new Date(2020, 0, 15);

    expect(isSameMonth(date1, date2)).toBe(false);
  });

  it('determines that a date is not in the same month', () => {
    const date1 = new Date(2021, 0, 15);
    const date2 = new Date(2021, 1, 15);

    expect(isSameMonth(date1, date2)).toBe(false);
  });

  it('determines that a date is not in the same month if second one is undefined', () => {
    const date1 = new Date(2021, 0, 15);
    const date2 = undefined;

    expect(isSameMonth(date1, date2)).toBe(false);
  });

  it('determines that a date is not in the same month if first one is undefined', () => {
    const date1 = undefined;
    const date2 = new Date(2021, 0, 15);

    expect(isSameMonth(date1, date2)).toBe(false);
  });

  it('determines that a date is not in the same month if both undefined', () => {
    const date1 = undefined;
    const date2 = undefined;

    expect(isSameMonth(date1, date2)).toBe(false);
  });

  it('determines that is same month for dates before 1970', () => {
    const date1 = new Date('0010-02-20T12:00:00.000Z');
    const date2 = new Date('0010-02-18T08:12:13.000Z');

    expect(isSameMonth(date1, date2)).toBe(true);
  });
});
