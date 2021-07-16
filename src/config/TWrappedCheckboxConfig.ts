import { CSSClass } from '../types';
import TCheckboxConfig from './TCheckboxConfig';

export const TWrappedCheckboxClassesKeys = ['wrapper', 'wrapperChecked', 'inputWrapper', 'inputWrapperChecked', 'input', 'label', 'labelChecked'];

export type TWrappedCheckboxClassesValidKeys = 'wrapper' | 'wrapperChecked' | 'inputWrapper' | 'inputWrapperChecked' | 'input' | 'label' | 'labelChecked';

export const TWrappedCheckboxConfig: {
  classes: {
    [key in TWrappedCheckboxClassesValidKeys]?: CSSClass
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
