import hasProperty from '../helpers/hasProperty';

describe('hasProperty', () => {
  it('returns `true` if the object has the property ', () => {
    const obj = {
      foo: 'bar',
    };

    expect(hasProperty(obj, 'foo')).toBe(true);
  });

  it('returns `true` if the object has the property even when it is null ', () => {
    const obj = {
      foo: null,
    };

    expect(hasProperty(obj, 'foo')).toBe(true);
  });

  it('returns `true` if the object has the property even when it is `undefined` ', () => {
    const obj = {
      foo: undefined,
    };

    expect(hasProperty(obj, 'foo')).toBe(true);
  });

  it('returns `false` if the object doesnt have the property ', () => {
    const obj = {
      bar: 'foo',
    };

    expect(hasProperty(obj, 'foo')).toBe(false);
  });
});
