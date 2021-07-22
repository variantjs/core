import toggleArrayItem from '../helpers/toggleArrayItem';

describe('toggleArrayItem', () => {
  it('adds a new item if doesnt exists', () => {
    const arr = [1, 2, 3];
    expect(toggleArrayItem(arr, 4)).toEqual([1, 2, 3, 4]);
  });

  it('removes the item if already exists', () => {
    const arr = [1, 2, 3];
    expect(toggleArrayItem(arr, 1)).toEqual([2, 3]);
    // Should not affect the original array
    expect(arr).toEqual(arr);
  });

  it('adds a new item for objects', () => {
    const arr = [{ a: 1 }, { b: '2' }, { three: '3' }];
    expect(toggleArrayItem(arr, { 'some-thing': { test: 1 } }))
      .toEqual([{ a: 1 }, { b: '2' }, { three: '3' }, { 'some-thing': { test: 1 } }]);
  });

  it('adds a new item if is not array', () => {
    expect(toggleArrayItem(null, 'whatever'))
      .toEqual(['whatever']);
  });

  it('removes an existing item for objects', () => {
    const arr = [{ a: 1 }, { b: '2' }, { three: '3' }];
    expect(toggleArrayItem(arr, { b: '2' }))
      .toEqual([{ a: 1 }, { three: '3' }]);
  });
});
