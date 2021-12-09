import isSameDay from '../../dates/isSameDay'

describe('isSameDay', () => {
  it('determines that is same day for the same date', () => {
    const date1 = new Date(2020, 0, 15)
    const date2 = new Date(2020, 0, 15)

    expect(isSameDay(date1, date2)).toBe(true)
  })
  it('determines that is same day if different minute', () => {
    const date1 = new Date(2020, 0, 15, 12)
    const date2 = new Date(2020, 0, 15, 11)

    expect(isSameDay(date1, date2)).toBe(true)
  })

  it('determines that a date is not the same if different month', () => {
    const date1 = new Date(2020, 0, 15)
    const date2 = new Date(2020, 1, 15)

    expect(isSameDay(date1, date2)).toBe(false)
  })

  it('determines that a date is not in the same day if year is different', () => {
    const date1 = new Date(2021, 0, 15)
    const date2 = new Date(2020, 0, 15)

    expect(isSameDay(date1, date2)).toBe(false)
  })

  it('determines that a date is not in the same day if second one is undefined', () => {
    const date1 = new Date(2021, 0, 15)
    const date2 = undefined

    expect(isSameDay(date1, date2)).toBe(false)
  })

  it('determines that a date is not in the same day if first one is undefined', () => {
    const date1 = undefined
    const date2 = new Date(2021, 0, 15)

    expect(isSameDay(date1, date2)).toBe(false)
  })

  it('determines that a date is not in the same day if both undefined', () => {
    const date1 = undefined
    const date2 = undefined

    expect(isSameDay(date1, date2)).toBe(false)
  })
})
