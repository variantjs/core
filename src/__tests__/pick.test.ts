import pick from '../helpers/pick';

describe('pick', () => {
  it('filter the truthy attributes of an object', () => {
    const obj = {
      name: 'Alfonso',
      age: 33,
      gender: '',
      other: undefined,
      onemore: false,
    };

    expect(pick(obj)).toEqual({
      name: 'Alfonso',
      age: 33,
    });
  });

  it('filter the attributes of an object by a condition', () => {
    const obj = {
      name: 'Alfonso',
      age: 33,
      gender: '',
      other: undefined,
      onemore: false,
    };

    expect(pick(obj, (value) => ['number', 'undefined'].includes(typeof value))).toEqual({
      age: 33,
      other: undefined,
    });
  });

  it('filter the attributes of an object by a condition with the key name', () => {
    const obj = {
      name: 'Alfonso',
      age: 33,
      gender: '',
      other: undefined,
      onemore: false,
    };

    expect(pick(obj, (_value, key) => ['age', 'other'].includes(key))).toEqual({
      age: 33,
      other: undefined,
    });
  });
});
