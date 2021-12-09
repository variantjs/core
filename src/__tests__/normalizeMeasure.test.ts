import normalizeMeasure from '../helpers/normalizeMeasure'

describe('normalizeMeasure', () => {
  it('converts a number into px', () => {
    expect(normalizeMeasure(12)).toBe('12px')
  })

  it('converts a decimal into px', () => {
    expect(normalizeMeasure(12.34)).toBe('12.34px')
  })

  it('keeps the amount in px as it is ', () => {
    expect(normalizeMeasure('12.34px')).toBe('12.34px')
  })

  it('converts a numeric string to px', () => {
    expect(normalizeMeasure('1234')).toBe('1234px')
  })

  it('converts a numeric string with decimals px', () => {
    expect(normalizeMeasure('12.34')).toBe('12.34px')
  })

  it('keeps any random string as it is', () => {
    expect(normalizeMeasure('123,456')).toBe('123,456')
  })

  it('keeps undefined values ', () => {
    expect(normalizeMeasure(undefined)).toBe(undefined)
  })

  it('converts a null value to undefined ', () => {
    expect(normalizeMeasure(null)).toBe(undefined)
  })
})
