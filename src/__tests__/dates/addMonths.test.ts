import addMonths from '../../dates/addMonths'

describe('addMonths', () => {
  it('adds 1 month by default', () => {
    const date = new Date(2020, 0, 15)
    const expected = new Date(2020, 1, 15)

    expect(addMonths(date)).toEqual(expected)
  })

  it('changes the year if last month', () => {
    const date = new Date(2021, 11, 15)
    const expected = new Date(2022, 0, 15)

    expect(addMonths(date)).toEqual(expected)
  })

  it('uses the last day of next month if doesnt have an equivalent', () => {
    const date = new Date(2021, 9, 31)
    const expected = new Date(2021, 10, 30)

    expect(addMonths(date)).toEqual(expected)
  })

  it('uses the last day of next month if doesnt have an equivalent for a month with 28 days', () => {
    const date = new Date(2021, 0, 31)
    const expected = new Date(2021, 1, 28)

    expect(addMonths(date)).toEqual(expected)
  })

  it('accepts a custom amount of months', () => {
    const date = new Date(2020, 0, 15)
    const expected = new Date(2020, 3, 15)

    expect(addMonths(date, 3)).toEqual(expected)
  })

  it('accepts a negative amount of months', () => {
    const date = new Date(2020, 0, 15)
    const expected = new Date(2019, 9, 15)

    expect(addMonths(date, -3)).toEqual(expected)
  })

  it('doesnt affect the original date', () => {
    const date = new Date(2020, 0, 15)

    expect(date).toEqual(new Date(2020, 0, 15))
  })
})
