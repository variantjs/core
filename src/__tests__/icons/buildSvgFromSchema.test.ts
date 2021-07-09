import buildSvgFromSchema from '../../icons/buildSvgFromSchema';

describe('buildSvgFromSchema', () => {
  it('creates a svg element from an schema', () => {
    const svg = buildSvgFromSchema({
      fill: 'none',
      viewBox: '0 0 24 2',
      stroke: 'currentColor',
      children: {
        path: {
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          'stroke-width': '2',
          d: 'M6 18L18 6M6 6l12 12',
        },
      },
    });

    expect(svg.outerHTML).toEqual('<svg fill="none" viewBox="0 0 24 2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>');
  });
});
