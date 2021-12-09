import { DateParser } from '../../types/Dates'
import buildDateParser from '../../dates/buildDateParser'
import { English } from '../../dates/l10n/default'

describe('buildDateParser', () => {
  it('it returns the default parser', () => {
    const date = '2021-02-03 04:05:06'
    const expected = new Date(2021, 1, 3, 4, 5, 6)
    expect(buildDateParser(English)(date)).toEqual(expected)
  })

  it('it returns the a custom parser', () => {
    const date = '2021-02-03 04:05:06'
    const expected = new Date(2021, 1, 3, 4, 5, 6)
    const customParser: DateParser = () => expected
    expect(buildDateParser(English, customParser)(date)).toEqual(expected)
  })
})
