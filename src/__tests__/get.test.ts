import get from '../helpers/get'

describe('get', () => {
  it('get the value of an object', () => {
    const obj = {
      name: 'Alfonso',
    }
    expect(get(obj, 'name')).toBe('Alfonso')
  })

  it('return the default value if the attribute is not found', () => {
    const obj = {
      name: 'Alfonso',
    }

    const defaultValue = 'default'
    expect(get(obj, 'age', defaultValue)).toBe(defaultValue)
  })

  it('return undefined if the attribute is not found', () => {
    const obj = {
      name: 'Alfonso',
    }

    expect(get(obj, 'user')).toBeUndefined()
  })

  it('return null if the attribute is null', () => {
    const obj = {
      name: 'Alfonso',
      id: null,
    }

    expect(get(obj, 'id')).toBeNull()
  })

  it('return null if the attribute is null deeply within an array', () => {
    const obj = {
      name: 'Alfonso',
      roles: [
        {
          id: 1,
        },
        {
          id: null,
        },
      ],
    }

    expect(get(obj, 'roles.1.id')).toBeNull()
  })

  it('return null if the attribute is null deeply', () => {
    const obj = {
      name: 'Alfonso',
      role: {
        id: null,
      },
    }

    expect(get(obj, 'role.id')).toBeNull()
  })

  it('return undefined if the attribute is not found deeply', () => {
    const obj = {
      name: 'Alfonso',
    }

    expect(get(obj, 'name.initials')).toBeUndefined()
  })

  it('return the default value if the attribute is not found deeply', () => {
    const obj = {
      name: 'Alfonso',
    }

    const defaultValue = { default: 'value ' }

    expect(get(obj, 'name.initials', defaultValue)).toEqual(defaultValue)
  })

  it('get a deep value of an object', () => {
    const obj = {
      name: 'Alfonso',
      role: {
        id: 1,
        name: 'Admin',
        permissions: {
          edit: true,
        },
      },
    }

    expect(get(obj, 'role.permissions.edit')).toBe(true)
  })

  it('get the value of an array by index', () => {
    const arr = ['hello', 'world']

    expect(get(arr, '1')).toBe('world')
  })

  it('get the value of an array deeply', () => {
    const arr = [
      [['goodby', 'cruel']],
      [
        ['hello', 'world'],
        ['hola', 'mundo'],
      ],
    ]

    expect(get(arr, '1.1.1')).toBe('mundo')
  })

  it('get the value of an array inside an object', () => {
    const obj = {
      arr: [
        [['goodby', 'cruel']],
        [
          ['hello', 'world'],
          ['hola', 'mundo'],
        ],
      ],
    }

    expect(get(obj, 'arr.1.1.1')).toBe('mundo')
  })

  it('get the value of an object inside an array', () => {
    const arr = [
      [['goodby', 'cruel']],
      [
        ['hello', 'world'],
        [
          'hola',
          {
            name: 'Alfonso',
          },
        ],
      ],
    ]

    expect(get(arr, '1.1.1.name')).toBe('Alfonso')
  })
})
