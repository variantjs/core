import { parseVariantWithClassesList } from '../index';
import { CSSClass, ObjectWithClassesList, WithVariantPropsAndClassesList } from '../types';

describe('parse variants with classes list function', () => {
  it('returns the same object if no variants passed', () => {
    const props = {
      class: 'text-red-500',
      type: 'number',
    };

    expect(parseVariantWithClassesList(props, [])).toEqual(props);
  });

  it('returns the variant props if a variant is added', () => {
    const props = {
      class: 'text-red-500',
      type: 'number',
      variants: {
        alt: {
          class: 'text-blue-500',
          type: 'text',
        },
      },
      variant: 'alt',
    };
    expect(parseVariantWithClassesList(props, [])).toEqual(props.variants.alt);
  });

  it('returns the default configuration', () => {
    const props = {};
    const globalConfiguration = {};
    const defaultConfiguration = {
      type: 'text',
      fixedClasses: {
        wrapper: 'border p-3',
      },
      classes: {
        wrapper: 'text-red-500',
      },
    };

    expect(
      parseVariantWithClassesList(props, ['wrapper'], globalConfiguration, defaultConfiguration),
    ).toEqual({
      type: 'text',
      classesList: {
        wrapper: 'text-red-500 border p-3',
      },
    });
  });

  it('returns the global configuration', () => {
    const props = {};
    const globalConfiguration = {
      type: 'text',
      fixedClasses: {
        wrapper: 'border p-3',
      },
      classes: {
        wrapper: 'text-red-500',
      },
    };

    const defaultConfiguration = {
      type: 'button',
      fixedClasses: {
        wrapper: 'p-2',
      },
      classes: {
        wrapper: 'text-blue-500',
      },
    };

    expect(
      parseVariantWithClassesList(props, ['wrapper'], globalConfiguration, defaultConfiguration),
    ).toEqual({
      type: 'text',
      classesList: {
        wrapper: 'text-red-500 border p-3',
      },
    });
  });

  it('returns the prop configuration from the variant', () => {
    const props = {
      variant: 'error',
      variants: {
        error: {
          type: 'button',
          fixedClasses: {
            wrapper: 'p-2',
          },
          classes: {
            wrapper: 'text-blue-500',
          },
        },
      },
    };

    const globalConfiguration = {
      type: 'text',
      fixedClasses: {
        wrapper: 'border p-3',
      },
      classes: {
        wrapper: 'text-red-500',
      },
    };

    const defaultConfiguration = {
      variants: {
        error: {
          type: 'submit',
          fixedClasses: {
            wrapper: 'p-3',
          },
          classes: {
            wrapper: 'text-red-500',
          },
        },
      },
    };

    expect(
      parseVariantWithClassesList(props, ['wrapper'], globalConfiguration, defaultConfiguration),
    ).toEqual({
      type: 'button',
      classesList: {
        wrapper: 'text-blue-500 p-2',
      },
    });
  });

  it('returns the global configuration from the variant', () => {
    const props = {
      variant: 'error',
    };

    const globalConfiguration = {
      type: 'text',
      fixedClasses: {
        wrapper: 'border p-3',
      },
      classes: {
        wrapper: 'text-red-500',
      },
      variants: {
        error: {
          type: 'button',
          fixedClasses: {
            wrapper: 'p-2',
          },
          classes: {
            wrapper: 'text-blue-500',
          },
        },
      },
    };

    const defaultConfiguration = {
      variants: {
        error: {
          type: 'submit',
          fixedClasses: {
            wrapper: 'p-3',
          },
          classes: {
            wrapper: 'text-red-500',
          },
        },
      },
    };

    expect(
      parseVariantWithClassesList(props, ['wrapper'], globalConfiguration, defaultConfiguration),
    ).toEqual({
      type: 'button',
      classesList: {
        wrapper: 'text-blue-500 p-2',
      },
    });
  });

  it('returns the default configuration from the variant', () => {
    const props = {
      variant: 'error',
    };
    const globalConfiguration = {
      type: 'text',
      fixedClasses: {
        wrapper: 'border p-3',
      },
      classes: {
        wrapper: 'text-red-500',
      },
    };

    const defaultConfiguration = {
      variants: {
        error: {
          type: 'button',
          fixedClasses: {
            wrapper: 'p-2',
          },
          classes: {
            wrapper: 'text-blue-500',
          },
        },
      },
    };

    expect(
      parseVariantWithClassesList(props, ['wrapper'], globalConfiguration, defaultConfiguration),
    ).toEqual({
      type: 'button',
      classesList: {
        wrapper: 'text-blue-500 p-2',
      },
    });
  });

  it('merge the variant props with the default props', () => {
    const props = {
      class: 'text-red-500',
      type: 'number',
      placeholder: 'Hello world',
      variants: {
        alt: {
          class: 'text-blue-500',
          type: 'text',
        },
      },
      variant: 'alt',
    };

    expect(parseVariantWithClassesList(props, [])).toEqual({
      ...props.variants.alt,
      ...{
        placeholder: props.placeholder,
      },
    });
  });

  it('use the props over the configuration', () => {
    const props = {
      class: 'text-red-500',
      type: 'number',
      placeholder: 'Hello world',
    };

    const configuration = {
      class: 'text-blue-500',
    };

    expect(parseVariantWithClassesList(props, [], configuration)).toEqual(props);
  });

  it('respects the props for classes list', () => {
    const props: CSSClass = {
      classes: {
        wrapper: 'm-3',
        body: ({ clear, add }) => {
          clear();
          add('text-gray-500');
        },
      },
    };

    const configuration = {
      classes: {
        wrapper: 'p-4',
        body: 'text-red-500',
      },
    };

    expect(parseVariantWithClassesList(props, ['wrapper', 'body'], configuration)).toEqual({
      classesList: {
        wrapper: 'p-4 m-3',
        body: 'text-gray-500',
      },
    });
  });

  it('respects only the props defined from the configuration', () => {
    const props = {
      classes: {
        wrapper: 'm-3',
        inner: 'p-2',
      },
    };

    const configuration = {
      classes: {
        wrapper: 'p-4',
        body: 'text-red-500',
      },
    };

    expect(parseVariantWithClassesList(props, ['wrapper', 'body'], configuration)).toEqual({
      classesList: {
        body: 'text-red-500',
        wrapper: 'p-4 m-3',
        inner: undefined,
      },
    });
  });

  it('accepts undefined values', () => {
    const props = {
      classes: {
        wrapper: undefined,
        body: 'text-gray-500',
      },
    };

    const configuration = {
      classes: {
        wrapper: 'p-4',
        body: 'bg-red-500',
      },
    };

    expect(parseVariantWithClassesList(props, ['wrapper', 'body'], {}, configuration)).toEqual({
      classesList: {
        wrapper: undefined,
        body: 'bg-red-500 text-gray-500',
      },
    });
  });

  it('pass `undefined` in the classes props clear any value', () => {
    const props = {
      classes: undefined,
    };

    const configuration = {
      classes: {
        wrapper: 'p-3',
        body: 'text-gray-500',
      },
    };

    expect(parseVariantWithClassesList(props, ['wrapper', 'body'], configuration)).toEqual({
      wrapper: undefined,
      body: undefined,
    });
  });

  it('pass `undefined` in the fixedClasses props clear any value', () => {
    const props = {
      fixedClasses: undefined,
    };

    const configuration = {
      fixedClasses: {
        wrapper: 'p-3',
        body: 'text-gray-500',
      },
    };

    expect(parseVariantWithClassesList(props, ['wrapper', 'body'], configuration)).toEqual({
      wrapper: undefined,
      body: undefined,
    });
  });

  it('pass `undefined` in the variant classes props clear any value', () => {
    const props = {
      variants: {
        empty: {
          classes: undefined,
        },
      },
      variant: 'empty',
    };

    const configuration = {
      classes: {
        wrapper: 'p-3',
        body: 'text-gray-500',
      },
    };

    expect(parseVariantWithClassesList(props, ['wrapper', 'body'], configuration)).toEqual({
      wrapper: undefined,
      body: undefined,
    });
  });

  it('pass `undefined` in the variant fixedClasses props clear any value', () => {
    const props = {
      variants: {
        empty: {
          fixedClasses: undefined,
        },
      },
      variant: 'empty',
    };

    const configuration = {
      fixedClasses: {
        wrapper: 'p-3',
        body: 'text-gray-500',
      },
    };

    expect(parseVariantWithClassesList(props, ['wrapper', 'body'], configuration)).toEqual({
      wrapper: undefined,
      body: undefined,
    });
  });

  it('considers not defined values from the configuration variant', () => {
    const props = {
      variant: 'error',
    };

    const configuration = {
      variants: {
        error: {
          fixedClasses: {
            wrapper: 'p-3',
          },
          classes: {
            wrapper: 'border',
          },
        },
      },
    };

    const defaultConfiguration = {};

    expect(
      parseVariantWithClassesList(props, ['wrapper', 'body'], configuration, defaultConfiguration),
    ).toEqual({
      classesList: {
        wrapper: 'border p-3',
      },
    });
  });

  it('considers not defined values from the defaultConfiguration variant', () => {
    const props = {
      variant: 'error',
    };

    const configuration = {};

    const defaultConfiguration = {
      variants: {
        error: {
          fixedClasses: {
            wrapper: 'p-3',
          },
          classes: {
            wrapper: 'border',
          },
        },
      },
    };

    expect(
      parseVariantWithClassesList(props, ['wrapper', 'body'], configuration, defaultConfiguration),
    ).toEqual({
      classesList: {
        wrapper: 'border p-3',
      },
    });
  });

  it('use the variant from the configuration', () => {
    const props = {
      variant: 'alt',
    };

    const configuration = {
      class: 'text-blue-500',
      variants: {
        alt: {
          class: 'text-blue-500',
          type: 'text',
        },
      },
    };

    expect(parseVariantWithClassesList(props, [], configuration)).toEqual(
      configuration.variants.alt,
    );
  });

  it('use the configuration if no props sent', () => {
    const props = {};

    const configuration = {
      class: 'text-blue-500',
      type: 'text',
    };

    expect(parseVariantWithClassesList(props, [], configuration)).toEqual(configuration);
  });

  it('merges className and fixedClasses', () => {
    const props = {
      class: 'text-red-500',
      classes: {
        wrapper: ['border-red-500'],
      },
      fixedClasses: {
        wrapper: { 'border-2': true },
      },
    };

    const config = parseVariantWithClassesList(props, ['wrapper']);

    expect(config).toEqual({
      class: 'text-red-500',
      classesList: {
        wrapper: 'border-red-500 border-2',
      },
    });
  });

  it('merges fixedClasses and variant classes', () => {
    type ClassesKeys = 'wrapper' | 'inputWrapper' | 'label' | 'input';

    const props: WithVariantPropsAndClassesList<ObjectWithClassesList, ClassesKeys> = {
      class: 'text-red-500',
      classes: {
        wrapper: ['border-red-500'],
      },
      fixedClasses: {
        wrapper: { 'border-2': true },
      },
      variants: {
        alt: {
          classes: {
            wrapper: 'border-blue-500',
          },
        },
      },
      variant: 'alt',
    };

    expect(parseVariantWithClassesList(props, ['wrapper'])).toEqual({
      class: 'text-red-500',
      classesList: {
        wrapper: 'border-blue-500 border-2',
      },
    });
  });

  it('uses the classes from the configuration', () => {
    const props = {
      variant: 'error',
    };

    const configuration = {
      classes: {
        wrapper: 'text-black',
      },
      variants: {
        error: {
          classes: {
            wrapper: 'text-red-500',
          },
        },
      },
    };

    expect(parseVariantWithClassesList(props, ['wrapper'], configuration)).toEqual({
      classesList: {
        wrapper: 'text-red-500',
      },
    });
  });

  it('handles undefined classes for a variant', () => {
    const props = {
      variant: 'error',
    };

    expect(parseVariantWithClassesList(props, ['wrapper'])).toEqual({});
  });

  it('merges only the attributes that are defined from the variant', () => {
    type ClassesKeys = 'wrapper' | 'inputWrapper' | 'label' | 'input';

    const props: WithVariantPropsAndClassesList<ObjectWithClassesList, ClassesKeys> = {
      classes: {
        wrapper: 'flex items-center space-x-2',
        inputWrapper: 'inline-flex',
        label: 'uppercase text-gray-500',
        input: '',
      },
      variants: {
        error: {
          classes: {
            label: 'uppercase text-red-500',
            input: 'shadow',
          },
        },
      },
      variant: 'error',
    };

    expect(
      parseVariantWithClassesList(props, ['wrapper', 'inputWrapper', 'label', 'input']),
    ).toEqual({
      classesList: {
        wrapper: 'flex items-center space-x-2',
        inputWrapper: 'inline-flex',
        label: 'uppercase text-red-500',
        input: 'shadow',
      },
    });
  });

  it('merges only the attributes that are defined from the variant and keep the fixed classes', () => {
    type ClassesKeys = 'wrapper' | 'inputWrapper' | 'label' | 'input';

    const props: WithVariantPropsAndClassesList<ObjectWithClassesList, ClassesKeys> = {
      fixedClasses: {
        wrapper: 'flex items-center',
        inputWrapper: 'inline-flex',
        label: 'semibold',
        input: '',
      },
      classes: {
        wrapper: 'space-x-2',
        inputWrapper: '',
        label: 'uppercase text-gray-500',
        input: '',
      },
      variants: {
        error: {
          classes: {
            label: 'uppercase text-red-500',
            input: 'shadow',
          },
        },
      },
      variant: 'error',
    };

    expect(
      parseVariantWithClassesList(props, ['wrapper', 'inputWrapper', 'label', 'input']),
    ).toEqual({
      classesList: {
        wrapper: 'space-x-2 flex items-center',
        inputWrapper: 'inline-flex',
        label: 'uppercase text-red-500 semibold',
        input: 'shadow',
      },
    });
  });

  it('merges the only the new attributes to the global configuration', () => {
    type ClassesKeys = 'wrapper' | 'inputWrapper' | 'label' | 'input';

    const props: WithVariantPropsAndClassesList<ObjectWithClassesList, ClassesKeys> = {
      classes: {
        input: 'border-1',
      },
    };

    const globalConfiguration: WithVariantPropsAndClassesList<ObjectWithClassesList, ClassesKeys> = {
      classes: {
        wrapper: 'flex items-center space-x-2',
        inputWrapper: 'inline-flex',
        label: 'uppercase text-gray-500',
        input: '',
      },
    };

    expect(
      parseVariantWithClassesList(
        props,
        ['wrapper', 'inputWrapper', 'label', 'input'],
        globalConfiguration,
      ),
    ).toEqual({
      classesList: {
        wrapper: 'flex items-center space-x-2',
        inputWrapper: 'inline-flex',
        label: 'uppercase text-gray-500',
        input: 'border-1',
      },
    });
  });

  it('it merges the new attributes from the default configuration', () => {
    type ClassesKeys = 'wrapper' | 'inputWrapper' | 'label' | 'input';

    const globalConfiguration: WithVariantPropsAndClassesList<ObjectWithClassesList, ClassesKeys> = {
      classes: {
        input: 'border-1',
      },
    };

    const defaultConfiguration = {
      classes: {
        wrapper: 'flex items-center space-x-2',
        inputWrapper: 'inline-flex',
        label: 'uppercase text-gray-500',
        input: '',
      },
    };

    expect(
      parseVariantWithClassesList(
        {},
        ['wrapper', 'inputWrapper', 'label', 'input'],
        globalConfiguration,
        defaultConfiguration,
      ),
    ).toEqual({
      classesList: {
        wrapper: 'flex items-center space-x-2',
        inputWrapper: 'inline-flex',
        label: 'uppercase text-gray-500',
        input: 'border-1',
      },
    });
  });

  it('it merges the props with the the default configuration', () => {
    type ClassesKeys = 'wrapper' | 'inputWrapper' | 'label' | 'input';

    const props: WithVariantPropsAndClassesList<ObjectWithClassesList, ClassesKeys> = {
      classes: {
        input: 'border-1',
        label: ({ add }) => {
          add('bg-green-500');
        },
      },
    };

    const defaultConfiguration = {
      classes: {
        wrapper: 'flex items-center space-x-2',
        inputWrapper: 'inline-flex',
        label: 'uppercase text-gray-500',
        input: '',
      },
    };

    expect(
      parseVariantWithClassesList(
        props,
        ['wrapper', 'inputWrapper', 'label', 'input'],
        {},
        defaultConfiguration,
      ),
    ).toEqual({
      classesList: {
        wrapper: 'flex items-center space-x-2',
        inputWrapper: 'inline-flex',
        label: 'uppercase text-gray-500 bg-green-500',
        input: 'border-1',
      },
    });
  });

  it('it merges the global configuration, the props, and the default configuration', () => {
    type ClassesKeys = 'wrapper' | 'inputWrapper' | 'label' | 'input';

    const props: WithVariantPropsAndClassesList<ObjectWithClassesList, ClassesKeys> = {
      classes: {
        wrapper: [
          ({ clear }) => {
            clear();
          },
          'flex items-center space-x-2',
        ],
      },
    };

    const globalConfiguration = {
      classes: {
        input: 'border-1',
      },
    };

    const defaultConfiguration = {
      classes: {
        wrapper: 'p-3',
        inputWrapper: 'inline-flex',
        label: 'uppercase text-gray-500',
        input: '',
      },
    };

    expect(
      parseVariantWithClassesList(
        props,
        ['wrapper', 'inputWrapper', 'label', 'input'],
        globalConfiguration,
        defaultConfiguration,
      ),
    ).toEqual({
      classesList: {
        wrapper: 'flex items-center space-x-2',
        inputWrapper: 'inline-flex',
        label: 'uppercase text-gray-500',
        input: 'border-1',
      },
    });
  });
});
