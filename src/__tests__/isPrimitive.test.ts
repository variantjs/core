import isPrimitive from '../helpers/isPrimitive'

describe('isPrimitive', () => {
  it('detects null as primitive', () => {
    expect(isPrimitive(null)).toBe(true)
  })

  it('detects number as primitive', () => {
    expect(isPrimitive(1)).toBe(true)
  })

  it('detects string as primitive', () => {
    expect(isPrimitive('a string')).toBe(true)
  })

  it('detects boolean as primitive', () => {
    expect(isPrimitive(true)).toBe(true)
  })

  it('detects undefined as primitive', () => {
    expect(isPrimitive(undefined)).toBe(true)
  })
  it('detects symbol as primitive', () => {
    expect(isPrimitive(Symbol('foo'))).toBe(true)
  })

  it('detects an object as not primitive', () => {
    expect(isPrimitive({})).toBe(false)
  })

  it('detects a function as not primitive', () => {
    expect(isPrimitive(() => {})).toBe(false)
  })

  it('detects an array as not primitive', () => {
    expect(isPrimitive([])).toBe(false)
  })
})
