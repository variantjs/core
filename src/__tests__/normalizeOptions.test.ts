import { normalizeOptions } from '../index'
import { InputOptions, NormalizedOptions } from '../types'

describe('options as strings', () => {
  it('returns an empty array if no value', () => {
    expect(normalizeOptions()).toEqual([])
  })

  it('accepts the options as array of strings', () => {
    const options: InputOptions = ['Option A', 'Option B', 'Option C']

    const expectedOptions: NormalizedOptions = [
      { value: 'Option A', text: 'Option A', raw: 'Option A' },
      { value: 'Option B', text: 'Option B', raw: 'Option B' },
      { value: 'Option C', text: 'Option C', raw: 'Option C' },
    ]

    expect(normalizeOptions(options)).toEqual(expectedOptions)
  })
})

describe('options as numbers', () => {
  it('accepts the options as array of numbers', () => {
    const options: InputOptions = [1, 2, 5]

    const expectedOptions: NormalizedOptions = [
      { value: 1, text: 1, raw: 1 },
      { value: 2, text: 2, raw: 2 },
      { value: 5, text: 5, raw: 5 },
    ]

    expect(normalizeOptions(options)).toEqual(expectedOptions)
  })
})

describe('options as key => value pair', () => {
  it('accepts the options as key => value pair', () => {
    const options: InputOptions = {
      1: 'Option 1',
      A: 'Option A',
      'Option 3': 'Option 3',
    }

    const expectedOptions: NormalizedOptions = [
      { value: '1', text: 'Option 1' },
      { value: 'A', text: 'Option A' },
      { value: 'Option 3', text: 'Option 3' },
    ]

    expect(normalizeOptions(options)).toEqual(expectedOptions)
  })
})

describe('options as array of objects', () => {
  it('accepts the options on the default format', () => {
    const options: InputOptions = [
      { value: 1, text: 'Option 1' },
      { value: 'A', text: 'Option A' },
      { value: 'Option 3', text: 'Option 3' },
    ]

    const expectedOptions: NormalizedOptions = [
      { value: 1, text: 'Option 1', raw: { value: 1, text: 'Option 1' } },
      { value: 'A', text: 'Option A', raw: { value: 'A', text: 'Option A' } },
      { value: 'Option 3', text: 'Option 3', raw: { value: 'Option 3', text: 'Option 3' } },
    ]

    expect(normalizeOptions(options)).toEqual(expectedOptions)
  })

  it('handles the disabled attribute', () => {
    const options: InputOptions = [
      { value: '1', text: 'Option 1' },
      { value: 'A', text: 'Option A', disabled: true },
      { value: 'Option 3', text: 'Option 3', disabled: false },
    ]

    const expectedOptions: NormalizedOptions = [
      { value: '1', text: 'Option 1', raw: { value: '1', text: 'Option 1' } },
      {
        value: 'A',
        text: 'Option A',
        disabled: true,
        raw: { value: 'A', text: 'Option A', disabled: true },
      },
      {
        value: 'Option 3',
        text: 'Option 3',
        raw: { value: 'Option 3', text: 'Option 3', disabled: false },
      },
    ]

    expect(normalizeOptions(options)).toEqual(expectedOptions)
  })
})

describe('options with children', () => {
  it('handles the children in default format', () => {
    const options = [
      {
        value: 'A',
        text: 'Option A',
        children: [
          { value: 1, text: 'Children 1' },
          { value: 2, text: 'Children 2' },
        ],
      },
    ]

    const expectedOptions: NormalizedOptions = [
      {
        value: 'A',
        text: 'Option A',
        children: [
          { value: 1, text: 'Children 1', raw: options[0].children[0] },
          { value: 2, text: 'Children 2', raw: options[0].children[1] },
        ],
        raw: options[0],
      },
    ]

    expect(normalizeOptions(options)).toEqual(expectedOptions)
  })

  it('handles the children as arrays of strings', () => {
    const options = [
      {
        value: 'A',
        text: 'Option A',
        children: ['Children 1', 'Children 2'],
      },
    ]

    const expectedOptions: NormalizedOptions = [
      {
        value: 'A',
        text: 'Option A',
        children: [
          { value: 'Children 1', text: 'Children 1', raw: options[0].children[0] },
          { value: 'Children 2', text: 'Children 2', raw: options[0].children[1] },
        ],
        raw: options[0],
      },
    ]

    expect(normalizeOptions(options)).toEqual(expectedOptions)
  })

  it('handles the children as arrays of numbers', () => {
    const options = [
      {
        value: 'A',
        text: 'Option A',
        children: [1, 2, 3],
      },
    ]

    const expectedOptions: NormalizedOptions = [
      {
        value: 'A',
        text: 'Option A',
        children: [
          { value: 1, text: 1, raw: options[0].children[0] },
          { value: 2, text: 2, raw: options[0].children[1] },
          { value: 3, text: 3, raw: options[0].children[2] },
        ],
        raw: options[0],
      },
    ]

    expect(normalizeOptions(options)).toEqual(expectedOptions)
  })

  it('handles the children as value => key pair', () => {
    const options = [
      {
        value: 'A',
        text: 'Option A',
        children: {
          1: 'Option 1',
          A: 'Option A',
        },
      },
    ]

    const expectedOptions: NormalizedOptions = [
      {
        value: 'A',
        text: 'Option A',
        children: [
          { value: '1', text: 'Option 1' },
          { value: 'A', text: 'Option A' },
        ],
        raw: options[0],
      },
    ]

    expect(normalizeOptions(options)).toEqual(expectedOptions)
  })
})

describe('guess option and values', () => {
  it('get the text with the `textAttribute` param', () => {
    const options = [
      {
        value: 'A',
        label: 'Option A',
      },
      {
        value: 'B',
        label: 'Option B',
      },
    ]

    const expectedOptions: NormalizedOptions = [
      {
        value: 'A',
        text: 'Option A',
        raw: options[0],
      },
      {
        value: 'B',
        text: 'Option B',
        raw: options[1],
      },
    ]

    expect(normalizeOptions(options, 'label')).toEqual(expectedOptions)
  })

  it('get the text with the `textAttribute` param using dot notation', () => {
    const options = [
      {
        value: 'A',
        user: {
          name: 'Alfonso',
          role: {
            label: 'Admin',
            id: 1,
          },
        },
      },
      {
        value: 'B',
        user: {
          name: 'Sauda',
          role: {
            label: 'User',
            id: 2,
          },
        },
      },
    ]

    const expectedOptions: NormalizedOptions = [
      {
        value: 'A',
        text: 'Admin',
        raw: options[0],
      },
      {
        value: 'B',
        text: 'User',
        raw: options[1],
      },
    ]

    const textAttribute = 'user.role.label'

    expect(normalizeOptions(options, textAttribute)).toEqual(expectedOptions)
  })

  it('returns an empty string if the `textAttribute` param doesnt exist', () => {
    const options = [
      {
        value: 'A',
        user: {
          name: 'Alfonso',
        },
      },
      {
        value: 'B',
        user: {
          name: 'Sauda',
        },
      },
    ]

    const expectedOptions: NormalizedOptions = [
      {
        value: 'A',
        text: '',
        raw: options[0],
      },
      {
        value: 'B',
        text: '',
        raw: options[1],
      },
    ]

    const textAttribute = 'user.role.label'

    expect(normalizeOptions(options, textAttribute)).toEqual(expectedOptions)
  })

  it('returns the text as an string if the text attribute is not `number` or `string`', () => {
    const options = [
      {
        value: 'A',
        user: {
          name: 'Alfonso',
          role: {
            label: false,
            id: 1,
          },
        },
      },
      {
        value: 'B',
        user: {
          name: 'Sauda',
          role: {
            label: { is: 'object' },
            id: 2,
          },
        },
      },
    ]

    const expectedOptions: NormalizedOptions = [
      {
        value: 'A',
        text: 'false',
        raw: options[0],
      },
      {
        value: 'B',
        text: '[object Object]',
        raw: options[1],
      },
    ]

    const textAttribute = 'user.role.label'

    expect(normalizeOptions(options, textAttribute)).toEqual(expectedOptions)
  })

  it('get the value with the `valueAttribute` param', () => {
    const options = [
      {
        id: 'A',
        text: 'Option A',
      },
      {
        id: 'B',
        text: 'Option B',
      },
    ]

    const expectedOptions: NormalizedOptions = [
      {
        value: 'A',
        text: 'Option A',
        raw: options[0],
      },
      {
        value: 'B',
        text: 'Option B',
        raw: options[1],
      },
    ]

    expect(normalizeOptions(options, undefined, 'id')).toEqual(expectedOptions)
  })

  it('get the value with the `valueAttribute` param using dot notation', () => {
    const options = [
      {
        text: 'A',
        user: {
          name: 'Alfonso',
          role: {
            label: 'Admin',
            id: 1,
          },
        },
      },
      {
        text: 'B',
        user: {
          name: 'Sauda',
          role: {
            label: 'User',
            id: 2,
          },
        },
      },
    ]

    const expectedOptions: NormalizedOptions = [
      {
        value: 1,
        text: 'A',
        raw: options[0],
      },
      {
        value: 2,
        text: 'B',
        raw: options[1],
      },
    ]

    const valueAttribute = 'user.role.id'

    expect(normalizeOptions(options, undefined, valueAttribute)).toEqual(expectedOptions)
  })

  it('returns an `undefined` if the `valueAttribute` param doesnt exist', () => {
    const options = [
      {
        text: 'Alfonso',
        user: {
          role: 'admin',
        },
      },
      {
        text: 'Saida',
        user: {
          role: 'user',
        },
      },
    ]

    const expectedOptions: NormalizedOptions = [
      {
        value: undefined,
        text: 'Alfonso',
        raw: options[0],
      },
      {
        value: undefined,
        text: 'Saida',
        raw: options[1],
      },
    ]

    const valueAttribute = 'user.role.id'

    expect(normalizeOptions(options, undefined, valueAttribute)).toEqual(expectedOptions)
  })

  it('returns `null` as value if the `valueAttribute` param is `null`', () => {
    const options = [
      {
        text: 'Alfonso',
        user: {
          id: null,
          role: 'admin',
        },
      },
      {
        text: 'Saida',
        user: {
          id: null,
          role: 'user',
        },
      },
    ]

    const expectedOptions: NormalizedOptions = [
      {
        value: null,
        text: 'Alfonso',
        raw: options[0],
      },
      {
        value: null,
        text: 'Saida',
        raw: options[1],
      },
    ]

    const valueAttribute = 'user.id'

    expect(normalizeOptions(options, undefined, valueAttribute)).toEqual(expectedOptions)
  })

  it('returns the value as an string if the value attribute is not `number` or `string`', () => {
    const options = [
      {
        text: 'A',
        user: {
          name: 'Alfonso',
          role: {
            label: false,
            id: 1,
          },
        },
      },
      {
        text: 'B',
        user: {
          name: 'Sauda',
          role: {
            label: { is: 'object' },
            id: 2,
          },
        },
      },
    ]

    const expectedOptions: NormalizedOptions = [
      {
        text: 'A',
        value: 'false',
        raw: options[0],
      },
      {
        text: 'B',
        value: '[object Object]',
        raw: options[1],
      },
    ]

    const valueAttribute = 'user.role.label'

    expect(normalizeOptions(options, undefined, valueAttribute)).toEqual(expectedOptions)
  })
})
