import clone from '../helpers/clone';

describe('clone', () => {
  it('clones an array', () => {
    const arr = [1, 2, 3];
    expect(clone(arr)).toEqual(arr);
  });

  it('clones a date', () => {
    const originalDate = new Date(2020, 3, 15, 11, 30, 59);
    const date = new Date(2020, 3, 15, 11, 30, 59);
    expect(clone(date)).toEqual(originalDate);
    expect(date).toEqual(originalDate);
  });

  it('clones an array with mixed values', () => {
    const arr = [1, '2', null, '', { a: 1 }];
    expect(clone(arr)).toEqual(arr);
  });

  it('clones an object with mixed values', () => {
    const obj = {
      a: 1,
      test: 2,
      'some-propery': 'some-value',
      'other-value': undefined,
      oneMore: null,
    };
    expect(clone(obj)).toEqual(obj);
  });

  it('makes a deep clone', () => {
    const obj = [{
      a: 1,
      test: 2,
      something: {
        a: 1,
        hola: 'Mundo',
        'an-array': [1, { hello: 'wolrd', test: { foo: '1' } }, ['a', 'b', 'C']],
      },
    }, null, [], { a: 1, b: 2, c: 3 }];

    expect(clone(obj)).toEqual(obj);
  });
});
