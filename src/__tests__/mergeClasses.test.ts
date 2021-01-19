import { mergeClasses } from '../index'

describe('merge classes function', () => {
  it('merges two string classes', () => {
    expect(mergeClasses('hello', 'world')).toBe('hello world')
  })

  it('accepts undefined values', () => {
    expect(mergeClasses('hello', undefined)).toBe('hello')
  })

  it('merges two array classes', () => {
    expect(mergeClasses(['hello'], ['world'])).toBe('hello world')
  })

  it('merges the truthy values from an object format', () => {
    expect(
      mergeClasses(
        {
          hello: true,
          bye: false,
        },
        {
          world: 1,
          universe: null,
        }
      )
    ).toBe('hello world')
  })
})
