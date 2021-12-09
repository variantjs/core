import addYears from '../../dates/addYears'

describe('addYears', () => {
  it('adds 1 year by default', () => {
    const date = new Date(2020, 0, 15)
    const expected = new Date(2021, 0, 15)

    expect(addYears(date)).toEqual(expected)
  })

  it('uses the last day of same month if doesnt have an equivalent', () => {
    const date = new Date(2024, 1, 29)
    const expected = new Date(2025, 1, 28)

    expect(addYears(date)).toEqual(expected)
  })

  it('accepts a custom amount of years', () => {
    const date = new Date(2020, 0, 15)
    const expected = new Date(2023, 0, 15)

    expect(addYears(date, 3)).toEqual(expected)
  })

  it('accepts a negative amount of years', () => {
    const date = new Date(2020, 0, 15)
    const expected = new Date(2017, 0, 15)

    expect(addYears(date, -3)).toEqual(expected)
  })

  it('doesnt affect the original date', () => {
    const date = new Date(2020, 0, 15)

    expect(date).toEqual(new Date(2020, 0, 15))
  })
})
