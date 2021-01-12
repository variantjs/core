import { mergeClasses } from '../index'

describe('merge classes function', () => {
  it('merges two string classes', () => {
    expect(mergeClasses('hello', 'world')).toBe('hello world')
  })

  it('merges two array classes', () => {
    expect(mergeClasses(['hello'], ['world'])).toBe('hello world')
  })
})
