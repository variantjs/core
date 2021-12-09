import { DateFormatter } from '../../types/Dates';
import buildDateFormatter from '../../dates/buildDateFormatter';
import { English } from '../../dates/l10n/default';

describe('buildDateFormatter', () => {
  it('it returns the default formatter', () => {
    const date = new Date(2021, 1, 3, 4, 5, 6);
    const expected = '2021-02-03 04:05:06';
    expect(buildDateFormatter(English)(date)).toEqual(expected);
  });

  it('it returns the custom formatter', () => {
    const date = new Date(2021, 1, 3, 4, 5, 6);
    const expected = 'format-like-this';
    const customFormatter: DateFormatter = () => expected;
    expect(buildDateFormatter(English, customFormatter)(date)).toEqual(expected);
  });
});
