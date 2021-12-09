import getFirstDayOfMonth from '../../dates/getFirstDayOfMonth'

describe('getFirstDayOfMonth', () => {
  it('gets the first day of a month', () => {
    // 2020-01-15
    const date = new Date(2020, 0, 15)

    expect(getFirstDayOfMonth(date)).toEqual(new Date(2020, 0, 1))
  })

  it('gets the first day of a month if pass the first day', () => {
    // 2020-04-01
    const date = new Date(2020, 3, 1)

    expect(getFirstDayOfMonth(date)).toEqual(new Date(2020, 3, 1))
  })

  it('doesnt affects the original date', () => {
    const originalDate = new Date(2020, 0, 15, 10, 11, 12)
    const date = new Date(2020, 0, 15, 10, 11, 12)

    getFirstDayOfMonth(date)

    expect(date).toEqual(originalDate)
  })
})
