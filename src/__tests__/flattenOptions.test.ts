import { flattenOptions } from '../index';
import normalizeOptions from '../normalizeOptions';

describe('flattenOptions', () => {
  it('returns the same array if no deep values', () => {
    const options = normalizeOptions([1, 2, 4, 'A', 'B']);
    expect(flattenOptions(options)).toEqual(options);
  });

  it('returns the a flattened array of options', () => {
    const options = normalizeOptions([
      { value: 'A', text: 'A' },
      {
        value: 'B',
        text: 'B',
        children: [
          { value: 1, text: 'Option 1' },
          { value: 2, text: 'Option 2' },
        ],
      },
      { value: 'C', text: 'C' },
    ]);
    const expcetedOptions = normalizeOptions([
      { value: 'A', text: 'A' },
      { value: 1, text: 'Option 1' },
      { value: 2, text: 'Option 2' },
      { value: 'C', text: 'C' },
    ]);

    expect(flattenOptions(options)).toEqual(expcetedOptions);
  });

  it('flatten deep options', () => {
    const options = normalizeOptions([
      { value: 'A', text: 'A' },
      {
        value: 'B',
        text: 'B',
        children: [
          {
            value: 1,
            text: 'Option 1',
            children: [
              { value: 'red', text: 'Red' },
              { value: 'blue', text: 'Blue' },
            ],
          },
          { value: 2, text: 'Option 2' },
        ],
      },
      { value: 'C', text: 'C' },
    ]);
    const expcetedOptions = normalizeOptions([
      { value: 'A', text: 'A' },
      { value: 'red', text: 'Red' },
      { value: 'blue', text: 'Blue' },
      { value: 2, text: 'Option 2' },
      { value: 'C', text: 'C' },
    ]);

    expect(flattenOptions(options)).toEqual(expcetedOptions);
  });
});
