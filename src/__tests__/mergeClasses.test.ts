import { mergeClasses } from '../index';

describe('merge classes function', () => {
  it('merges two string classes', () => {
    expect(mergeClasses('hello', 'world')).toBe('hello world');
  });

  it('accepts undefined values', () => {
    expect(mergeClasses('hello', undefined)).toBe('hello');
  });

  it('merges two array classes', () => {
    expect(mergeClasses(['hello'], ['world'])).toBe('hello world');
  });

  it('allows functions that can manipulate the classes interactively', () => {
    expect(mergeClasses(['hello'], ({ clear, add }) => {
      clear()
      add('no')
    }, ['world'], ({ remove  }) => {
      remove('world')
    })).toBe('no');
  });

  it('does not allowe duplicates', () => {
    expect(mergeClasses(['hello'], ['hello'])).toBe('hello');
  });

  it('merges the truthy values from an object format', () => {
    expect(
      mergeClasses(
        {
          hello: true,
          bye: false,
        },
        {
          world: 1,
          universe: null,
        } as any,
      ),
    ).toBe('hello world');
  });
});
