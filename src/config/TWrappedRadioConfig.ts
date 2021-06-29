import { CSSClass } from '../types/CSSClass';

import TRadioConfig from './TRadioConfig';

export type TWrappedRadioConfigKeys = 'wrapper' | 'wrapperChecked' | 'inputWrapper' | 'inputWrapperChecked' | 'input' | 'label' | 'labelChecked';

export const TWrappedRadioConfig: {
  classes: {
    [key in TWrappedRadioConfigKeys]?: CSSClass
  }
} = {
  classes: {
    wrapper: 'flex items-center space-x-2',
    inputWrapper: 'inline-flex',
    label: '',
    input: TRadioConfig.classes,
  },
};

export default TWrappedRadioConfig;
