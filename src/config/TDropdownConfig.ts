import { Options } from '@popperjs/core/lib/popper-lite';

import TButtonConfig from './TButtonConfig';

const TDropdownConfig = {
  classes: {
    trigger: TButtonConfig.classes,
    dropdown: 'w-56 rounded shadow bg-white',
    enterActiveClass: 'transition duration-100 ease-out',
    enterFromClass: 'transform scale-95 opacity-0',
    enterToClass: 'transform scale-100 opacity-100',
    leaveActiveClass: 'transition duration-75 ease-in',
    leaveFromClass: 'transform scale-100 opacity-100',
    leaveToClass: 'transform scale-95 opacity-0',
  },
};

export type TDropdownConfigKeys = 'trigeer' | 'dropdown' | 'enterFromClass' | 'enterActiveClass' | 'enterToClass' | 'leaveFromClass' | 'leaveActiveClass' | 'leaveToClass';

export const TDropdownPopperDefaultOptions: Options = {
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
