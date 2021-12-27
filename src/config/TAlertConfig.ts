import { enterAndLeave } from './transitions';

const TAlertConfig = {
  classes: {
    // @tw
    wrapper:
      'relative flex items-center p-4 border-l-4 border-blue-500 rounded shadow-sm bg-blue-50',
    // @tw
    body: 'flex-grow',
    // @tw
    close:
      'relative flex items-center justify-center flex-shrink-0 w-6 h-6 ml-4 text-blue-500 transition duration-100 ease-in-out rounded hover:bg-blue-200 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50',
    // @tw
    closeIcon: 'w-4 h-4',
    ...enterAndLeave,
  },
};

export const TAlertClassesKeys = Object.keys(TAlertConfig.classes);

export type TAlertClassesValidKeys = keyof typeof TAlertConfig.classes;

export default TAlertConfig;
