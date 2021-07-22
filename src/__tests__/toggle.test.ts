import toggle from '../helpers/toggle';

describe('toggle', () => {
  it('sets `null` if value set', () => {
    expect(toggle(1, 1)).toEqual(null);
  });

  it('sets the value if different', () => {
    expect(toggle(null, 1)).toEqual(1);
  });

  it('sets the `defaultValue` if equal', () => {
    expect(toggle(true, true, false)).toEqual(false);
  });

  it('sets `null` if value set with objects', () => {
    expect(toggle({ a: 'a', b: 'b' }, { a: 'a', b: 'b' })).toEqual(null);
  });

  it('sets the value if different with objects', () => {
    expect(toggle(null, { a: 'a', b: 'b' })).toEqual({ a: 'a', b: 'b' });
  });
});
