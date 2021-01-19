import { parseVariant } from '../index'

describe('parse variants function', () => {
  it('returns the same object if no variants passed', () => {
    const props = {
      className: 'text-red-500',
      type: 'number',
    }
    expect(parseVariant(props)).toEqual(props)
  })

  it('returns the variant props if a variant is added', () => {
    const props = {
      className: 'text-red-500',
      type: 'number',
      variants: {
        alt: {
          className: 'text-blue-500',
          type: 'text',
        },
      },
      variant: 'alt',
    }
    expect(parseVariant(props)).toEqual(props.variants.alt)
  })

  it('returns the default configuration', () => {
    const props = {}
    const globalConfiguration = {}
    const defaultConfiguration = {
      type: 'text',
      fixedClasses: 'border p-3',
      classes: 'text-red-500',
    }

    expect(parseVariant(props, globalConfiguration, defaultConfiguration)).toEqual({
      type: 'text',
      className: 'text-red-500 border p-3',
    })
  })

  it('merge the variant props with the default props', () => {
    const props = {
      className: 'text-red-500',
      type: 'number',
      placeholder: 'Hello world',
      variants: {
        alt: {
          className: 'text-blue-500',
          type: 'text',
        },
      },
      variant: 'alt',
    }

    expect(parseVariant(props)).toEqual({
      ...props.variants.alt,
      ...{
        placeholder: props.placeholder,
      },
    })
  })

  it('use the props over the configuration', () => {
    const props = {
      className: 'text-red-500',
      type: 'number',
      placeholder: 'Hello world',
    }

    const configuration = {
      className: 'text-blue-500',
    }

    expect(parseVariant(props, configuration)).toEqual(props)
  })

  it('use the variant from the configuration', () => {
    const props = {
      variant: 'alt',
    }

    const configuration = {
      className: 'text-blue-500',
      variants: {
        alt: {
          className: 'text-blue-500',
          type: 'text',
        },
      },
    }

    expect(parseVariant(props, configuration)).toEqual(configuration.variants.alt)
  })

  it('use the configuration if no props sent', () => {
    const props = {}

    const configuration = {
      className: 'text-blue-500',
      type: 'text',
    }

    expect(parseVariant(props, configuration)).toEqual(configuration)
  })

  it('doesnt return the className if class is empty', () => {
    const props = {
      className: undefined,
      type: 'text',
    }

    expect(parseVariant(props)).not.toHaveProperty('className')
  })

  it('merges className, classes and fixedClasses', () => {
    const props = {
      className: 'text-red-500',
      classes: ['border-red-500'],
      fixedClasses: { 'border-2': true },
    }

    expect(parseVariant(props).className).toBe('text-red-500 border-red-500 border-2')
  })

  it('merges className, fixedClasses and variant classes', () => {
    const props = {
      className: 'text-red-500',
      classes: ['border-red-500'],
      fixedClasses: { 'border-2': true },
      variants: {
        alt: {
          classes: 'border-blue-500',
        },
      },
      variant: 'alt',
    }

    expect(parseVariant(props).className).toBe('text-red-500 border-blue-500 border-2')
  })

  it('merges className and variant fixedClasses and classes', () => {
    const props = {
      className: 'text-red-500',
      classes: ['border-red-500'],
      fixedClasses: { 'border-2': true },
      variants: {
        alt: {
          fixedClasses: 'border',
          classes: 'border-blue-500',
        },
      },
      variant: 'alt',
    }

    expect(parseVariant(props).className).toBe('text-red-500 border-blue-500 border')
  })

  it('uses the classes from the configuration', () => {
    const props = {
      variant: 'error',
    }

    const configuration = {
      classes: 'text-black',
      variants: {
        error: {
          classes: 'text-red-500',
        },
      },
    }

    expect(parseVariant(props, configuration).className).toBe('text-red-500')
  })
})
