import TButtonConfig from './TButtonConfig';
import { enterAndLeave } from './transitions';

const TDropdownConfig = {
  classes: {
    trigger: TButtonConfig.classes,
    dropdown: 'w-56 rounded shadow bg-white',
    ...enterAndLeave,
  },
};

export const TDropdownClassesKeys = Object.keys(TDropdownConfig.classes);

export type TDropdownClassesValidKeys = keyof typeof TDropdownConfig.classes;

export const TDropdownPopperDefaultOptions = {
  placement: 'bottom',
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: [0, 10],
      },
    },
  ],
  strategy: 'absolute',
  onFirstUpdate: undefined,
};

export default TDropdownConfig;
