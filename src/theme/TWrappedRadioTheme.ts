import { CSSClass } from '../types/CSSClass';

import TRadioTheme from './TRadioTheme';

const TWrappedRadioTheme = {
  classes: {
    wrapper: 'flex items-center space-x-2',
    inputWrapper: 'inline-flex',
    label: '',
    input: TRadioTheme.classes,
  },
};

export const TWrappedRadioClassesListKeys = [
  'wrapper',
  'wrapperChecked',
  'inputWrapper',
  'inputWrapperChecked',
  'input',
  'label',
  'labelChecked',
] as const;

export type TWrappedRadioClassesList = {
  [key in typeof TWrappedRadioClassesListKeys[number]]?: CSSClass;
};

export default TWrappedRadioTheme;
