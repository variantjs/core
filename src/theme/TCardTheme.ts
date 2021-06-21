import { CSSClass } from '../types';

export type TCardThemeKeys = 'wrapper' | 'body' | 'header' | 'footer';

export const TCardTheme: {
  classes: {
    [key in TCardThemeKeys]?: CSSClass
  }
} = {
  classes: {
    wrapper: 'border rounded shadow-sm bg-white border-gray-100',
    body: 'p-3',
    header: 'border-b border-gray-100 p-3 rounded-t',
    footer: 'border-gray-100 border-t p-3 rounded-b',
  },
};

export default TCardTheme;
