import isToday from '../../dates/isToday'

describe('isToday', () => {
  it('determines that is same day for current date', () => {
    const date = new Date()

    expect(isToday(date)).toBe(true)
  })
  it('determines that is same day for a date at the end of the day', () => {
    const date = new Date()
    const today = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59, 999)

    expect(isToday(today)).toBe(true)
  })

  it('determines that is same day for a date at the start of the day', () => {
    const date = new Date()
    const today = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0)

    expect(isToday(today)).toBe(true)
  })
})
