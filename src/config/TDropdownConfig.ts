import TButtonConfig from './TButtonConfig';
import { enterAndLeave, EnterAndLeaveKeys } from './transitions';

const TDropdownConfig = {
  classes: {
    trigger: TButtonConfig.classes,
    dropdown: 'w-56 rounded shadow bg-white',
    ...enterAndLeave,
  },
};

export type TDropdownConfigKeys = 'trigger' | 'dropdown' & EnterAndLeaveKeys;

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
