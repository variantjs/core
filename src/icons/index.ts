import buildSvgFromSchema from './buildSvgFromSchema';

const closeIcon = buildSvgFromSchema({
  fill: 'none',
  viewBox: '0 0 24 24',
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

// eslint-disable-next-line import/prefer-default-export
export { closeIcon };
