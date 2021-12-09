import getLastDayOfPrevMonth from '../../dates/getLastDayOfPrevMonth'

describe('getLastDayOfPrevMonth', () => {
  it('gets the last day of prev month if is first month', () => {
    // 2020-01-15
    const date = new Date(2020, 0, 15)

    expect(getLastDayOfPrevMonth(date)).toEqual(new Date(2019, 11, 31))
  })

  it('gets the last day of prev month if has 29 days', () => {
    // 2020-03-15
    const date = new Date(2020, 2, 15)

    expect(getLastDayOfPrevMonth(date)).toEqual(new Date(2020, 1, 29))
  })

  it('gets the last day of prev month if has 30 days', () => {
    // 2020-07-15
    const date = new Date(2020, 6, 15)

    expect(getLastDayOfPrevMonth(date)).toEqual(new Date(2020, 5, 30))
  })

  it('doesnt affects the original date', () => {
    const originalDate = new Date(2020, 0, 15, 10, 11, 12)
    const date = new Date(2020, 0, 15, 10, 11, 12)

    getLastDayOfPrevMonth(date)

    expect(date).toEqual(originalDate)
  })
})
