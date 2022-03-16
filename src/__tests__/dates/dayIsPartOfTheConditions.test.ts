import dayIsPartOfTheConditions from '../../dates/dayIsPartOfTheConditions';
import dateParser from '../../dates/parseDate';

describe('dayIsPartOfTheConditions', () => {
  it('returns false for a null values', () => {
    const condition = '';
    expect(dayIsPartOfTheConditions(null, condition, dateParser)).toBe(false);
  });

  it('returns false for undefined value', () => {
    const condition = '';
    expect(dayIsPartOfTheConditions(undefined, condition, dateParser)).toBe(false);
  });

  it('accept a custom condition to check the date', () => {
    const date = new Date(2019, 1, 1);
    const condition = (d: Date) => d.getFullYear() === 2019;
    expect(dayIsPartOfTheConditions(date, condition, dateParser)).toBe(true);
  });

  it('returns false for an undefined condition', () => {
    const date = new Date(2019, 1, 1);
    const condition = undefined;
    expect(dayIsPartOfTheConditions(date, condition, dateParser)).toBe(false);
  });

  it('accept a custom condition to check the date that return false', () => {
    const date = new Date(2019, 1, 1);
    const condition = (d: Date) => d.getFullYear() === 2018;
    expect(dayIsPartOfTheConditions(date, condition, dateParser)).toBe(false);
  });

  it('returns true is date is in the same date as the condition', () => {
    const date = new Date(2019, 1, 1, 10, 0, 0);
    const conditonDate = new Date(2019, 1, 1, 10, 0, 0);

    expect(dayIsPartOfTheConditions(date, conditonDate, dateParser)).toBe(true);
  });

  it('returns true is date is in the same date as the condition using the date parser', () => {
    const date = new Date(2019, 0, 1, 10, 0, 0);
    const conditonDate = '2019-01-01';

    expect(dayIsPartOfTheConditions(date, conditonDate, dateParser, 'Y-m-d')).toBe(true);
  });
  
  it('returns true is date is in the same date as the condition using the date parser with a integer', () => {
    const date = new Date(2019, 0, 1, 10, 0, 0);
    const conditonDate: number = +new Date(2019, 0, 1, 10, 0, 0);

    expect(dayIsPartOfTheConditions(date, conditonDate, dateParser, 'Y-m-d')).toBe(true);
  });

  it('handles an array of conditions', () => {
    const date = new Date(2019, 0, 1);
    const conditions = [
      (d: Date) => d.getFullYear() === 2019,
      '2019-01-01',
      new Date(2019, 0, 1),
    ];

    expect(dayIsPartOfTheConditions(date, conditions, dateParser, 'Y-m-d')).toBe(true);
  });

  it('handles an array of conditions if one condition is false', () => {
    const date = new Date(2019, 0, 1);
    const conditions = [
      (d: Date) => d.getFullYear() !== 2019,
      '2019-01-01',
      new Date(2019, 0, 1),
    ];

    expect(dayIsPartOfTheConditions(date, conditions, dateParser, 'Y-m-d')).toBe(true);
  });

  it('handles an array of conditions if all condition are false', () => {
    const date = new Date(2019, 0, 1);
    const conditions = [
      (d: Date) => d.getFullYear() !== 2019,
      '2019-02-01',
      new Date(2010, 0, 1),
    ];

    expect(dayIsPartOfTheConditions(date, conditions, dateParser, 'Y-m-d')).toBe(false);
  });

  it('returns false if invalid condition', () => {
    const date = new Date(2019, 0, 1);
    const condition = 1;

    expect(dayIsPartOfTheConditions(date, condition, dateParser)).toBe(false);
  });
});
