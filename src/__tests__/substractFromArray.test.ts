import substractFromArray from '../helpers/substractFromArray'

describe('substractFromArray', () => {
  it('keeps the same array if item doesnt exist', () => {
    const arr = [1, 2, 3]
    expect(substractFromArray(arr, 4)).toEqual([1, 2, 3])
  })

  it('removes the item if already exists', () => {
    const arr = [1, 2, 3]
    expect(substractFromArray(arr, 1)).toEqual([2, 3])
    // Should not affect the original array
    expect(arr).toEqual(arr)
  })

  it('returns an empty array if is not array', () => {
    expect(substractFromArray(null, 'whatever')).toEqual([])
  })

  it('removes an existing item for objects', () => {
    const arr = [{ a: 1 }, { b: '2' }, { three: '3' }]
    expect(substractFromArray(arr, { b: '2' })).toEqual([{ a: 1 }, { three: '3' }])
  })
})
