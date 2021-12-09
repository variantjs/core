import getFirstDayOfPrevMonth from '../../dates/getFirstDayOfPrevMonth'

describe('getFirstDayOfPrevMonth', () => {
  it('gets the first day of prev month if is first month', () => {
    // 2020-01-15
    const date = new Date(2020, 0, 15)

    expect(getFirstDayOfPrevMonth(date)).toEqual(new Date(2019, 11, 1))
  })

  it('gets the first day of prev month if is last month', () => {
    // 2020-01-15
    const date = new Date(2020, 11, 15)

    expect(getFirstDayOfPrevMonth(date)).toEqual(new Date(2020, 10, 1))
  })

  it('gets the first day of prev month when first day', () => {
    // 2020-01-1
    const date = new Date(2020, 11, 1)

    expect(getFirstDayOfPrevMonth(date)).toEqual(new Date(2020, 10, 1))
  })

  it('doesnt affects the original date', () => {
    const originalDate = new Date(2020, 0, 15, 10, 11, 12)
    const date = new Date(2020, 0, 15, 10, 11, 12)

    getFirstDayOfPrevMonth(date)

    expect(date).toEqual(originalDate)
  })
})
