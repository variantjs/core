import { CSSClass } from '../types';

export type TCardConfigKeys = 'wrapper' | 'body' | 'header' | 'footer';

export const TCardConfig: {
  classes: {
    [key in TCardConfigKeys]?: CSSClass
  }
} = {
  classes: {
    wrapper: 'border rounded shadow-sm bg-white border-gray-100',
    body: 'p-3',
    header: 'border-b border-gray-100 p-3 rounded-t',
    footer: 'border-gray-100 border-t p-3 rounded-b',
  },
};

export default TCardConfig;
