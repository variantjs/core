import { CSSClass } from '../types';
import TCheckboxConfig from './TCheckboxConfig';

export type TWrappedCheckboxConfigKeys = 'wrapper' | 'wrapperChecked' | 'inputWrapper' | 'inputWrapperChecked' | 'input' | 'label' | 'labelChecked';

export const TWrappedCheckboxConfig: {
  classes: {
    [key in TWrappedCheckboxConfigKeys]?: CSSClass
  }
} = {
  classes: {
    wrapper: 'flex items-center space-x-2',
    inputWrapper: 'inline-flex',
    label: '',
    input: TCheckboxConfig.classes,
  },
};

export default TWrappedCheckboxConfig;
