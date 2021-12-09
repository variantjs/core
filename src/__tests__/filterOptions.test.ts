import { filterOptions } from '../index';
import { NormalizedOptions } from '../types';

describe('filterOptions', () => {
  const options: NormalizedOptions = [
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
    { value: 'redy', text: 'Reddy' },
  ];

  it('returns the same options is no query', () => {
    const filteredOptions = filterOptions(options, '');
    expect(filteredOptions).toEqual(options);
  });

  it('filters deep', () => {
    const filteredOptions = filterOptions(options, 'red');
    expect(filteredOptions).toEqual([
      {
        value: 'B',
        text: 'B',
        children: [
          {
            value: 1,
            text: 'Option 1',
            children: [{ value: 'red', text: 'Red' }],
          },
        ],
      },
      { value: 'redy', text: 'Reddy' },
    ]);
  });
});
