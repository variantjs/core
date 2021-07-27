import addToArray from '../helpers/addToArray';

describe('addToArray', () => {
  it('adds a new item ', () => {
    const arr = [1, 2, 3];
    expect(addToArray(arr, 4)).toEqual([1, 2, 3, 4]);
  });

  it('adds a new item for objects', () => {
    const arr = [{ a: 1 }, { b: '2' }, { three: '3' }];
    expect(addToArray(arr, { 'some-thing': { test: 1 } }))
      .toEqual([{ a: 1 }, { b: '2' }, { three: '3' }, { 'some-thing': { test: 1 } }]);
  });

  it('returns an array with the item if parameter is not an array', () => {
    expect(addToArray(null, 'whatever'))
      .toEqual(['whatever']);
  });
});
