import isEqual from '../helpers/isEqual'

describe('isEqual', () => {
  it('considers that a number is not equal to a string', () => {
    expect(isEqual('12', 12)).toBe(false)
  })

  it('considers that a number is equal to the same number', () => {
    expect(isEqual(12, 12)).toBe(true)
  })

  it('considers that a numeric string is equal to the same numeric string', () => {
    expect(isEqual('12', '12')).toBe(true)
  })

  it('considers that a regular string is equal to the same regular string', () => {
    expect(isEqual('Hello World! 🤨', 'Hello World! 🤨')).toBe(true)
  })

  it('considers that an empty array is equal to another empty array', () => {
    expect(isEqual([], [])).toBe(true)
  })

  it('considers that an array with same values to be equal', () => {
    expect(
      isEqual([1, '12', 'string', true, undefined], [1, '12', 'string', true, undefined])
    ).toBe(true)
  })

  it('considers that an array with same values in different order to no be equal', () => {
    expect(
      isEqual([1, '12', 'string', true, undefined], ['12', 1, 'string', true, undefined])
    ).toBe(false)
  })

  it('considers that `undefined` is equal to `undefined`', () => {
    expect(isEqual(undefined, undefined)).toBe(true)
  })

  it('considers that `null` is equal to `null`', () => {
    expect(isEqual(null, null)).toBe(true)
  })

  it('considers that `NaN` is equal to `NaN`', () => {
    expect(isEqual(NaN, NaN)).toBe(true)
  })

  it('considers that `undefined` is different to `null`', () => {
    expect(isEqual(undefined, null)).toBe(false)
  })

  it('considers that `null` is different to an empty string', () => {
    expect(isEqual('', null)).toBe(false)
  })

  it('considers that `true` is equal to `true`', () => {
    expect(isEqual(true, true)).toBe(true)
  })

  it('considers that `false` is equal to `false`', () => {
    expect(isEqual(false, false)).toBe(true)
  })

  it('considers that `false` is different to `false`', () => {
    expect(isEqual(true, false)).toBe(false)
  })

  it('considers that an object with same properties is equal', () => {
    const a = {
      a: 1,
      test: 2,
      'some-propery': 'some-value',
      'other-value': undefined,
      oneMore: null,
    }

    const b = {
      a: 1,
      test: 2,
      'some-propery': 'some-value',
      'other-value': undefined,
      oneMore: null,
    }

    expect(isEqual(a, b)).toBe(true)
  })

  it('considers that an object with a different property is not equal', () => {
    const a = {
      a: 1,
      test: 2,
      'some-propery': 'some-value',
      'other-value': undefined,
      oneMore: null,
    }

    const b = {
      a: '1',
      test: 2,
      'some-propery': 'some-value',
      'other-value': undefined,
      oneMore: null,
    }

    expect(isEqual(a, b)).toBe(false)
  })

  it('makes a deep comparison', () => {
    const a = [
      undefined,
      {
        a: 1,
        test: 2,
        something: {
          a: 1,
          hola: 'Mundo',
          'an-array': [1, undefined, { hello: 'wolrd', test: { foo: '1' } }, ['a', 'b', 'C']],
        },
      },
      null,
      [],
      { a: 1, b: 2, c: 3 },
    ]

    const b = [
      undefined,
      {
        a: 1,
        test: 2,
        something: {
          a: 1,
          hola: 'Mundo',
          'an-array': [1, undefined, { hello: 'wolrd', test: { foo: '1' } }, ['a', 'b', 'C']],
        },
      },
      null,
      [],
      { a: 1, b: 2, c: 3 },
    ]

    expect(isEqual(a, b)).toBe(true)
  })

  it('makes a deep comparison for something that is not equal', () => {
    const a = [
      undefined,
      {
        a: 1,
        test: 2,
        something: {
          a: 1,
          hola: 'Mundo',
          'an-array': [1, undefined, { hello: 'wolrd', test: { foo: '1' } }, ['a', 'b', 'C']],
        },
      },
      null,
      [],
      { a: 1, b: 2, c: 3 },
    ]

    const b = [
      undefined,
      {
        a: 1,
        test: 2,
        something: {
          a: 1,
          hola: 'Mundo',
          // The 1 in foo is different
          'an-array': [1, undefined, { hello: 'wolrd', test: { foo: 1 } }, ['a', 'b', 'C']],
        },
      },
      null,
      [],
      { a: 1, b: 2, c: 3 },
    ]

    expect(isEqual(a, b)).toBe(false)
  })
})
