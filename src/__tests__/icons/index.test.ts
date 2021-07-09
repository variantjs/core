import * as icons from '../../icons';

describe('icons', () => {
  it('exports all the icons', () => {
    expect(Object.keys(icons)).toEqual(['closeIcon']);
  });

  it('has a `closeIcon` icon object', () => {
    const { closeIcon } = icons;

    expect(closeIcon instanceof SVGElement).toBe(true);
    expect(closeIcon.outerHTML).toBe('<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>');
  });
});
