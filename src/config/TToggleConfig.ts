// import { enterAndLeave } from './transitions';

const TToggleConfig = {
  classes: {
    // @tw
    wrapper:
      'bg-gray-100 border-2 border-transparent rounded-full focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50',
    // @tw
    wrapperChecked:
      'bg-blue-500 border-2 border-transparent rounded-full focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50',
    // @tw
    wrapperDisabled:
      'bg-gray-100 border-2 border-transparent rounded-full focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50',
    // @tw
    wrapperCheckedDisabled:
      'bg-blue-500 border-2 border-transparent rounded-full focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50',
    // @tw
    button:
      'flex items-center justify-center w-5 h-5 text-xs text-gray-400 bg-white rounded-full shadow',
    // @tw
    buttonChecked:
      'flex items-center justify-center w-5 h-5 text-xs text-blue-500 bg-white rounded-full shadow',
    // @tw
    checkedPlaceholder:
      'flex items-center justify-center w-5 h-5 text-xs text-gray-400 rounded-full',
    // @tw
    uncheckedPlaceholder:
      'flex items-center justify-center w-5 h-5 text-xs text-gray-400 rounded-full',
  },
  fixedClasses: {
    // @tw
    wrapper:
      'relative inline-flex flex-shrink-0 transition-colors duration-200 ease-in-out cursor-pointer',
    // @tw
    wrapperChecked:
      'relative inline-flex flex-shrink-0 transition-colors duration-200 ease-in-out cursor-pointer',
    // @tw
    wrapperDisabled:
      'relative inline-flex flex-shrink-0 transition-colors duration-200 ease-in-out opacity-50 cursor-pointer cursor-not-allowed',
    // @tw
    wrapperCheckedDisabled:
      'relative inline-flex flex-shrink-0 transition-colors duration-200 ease-in-out opacity-50 cursor-pointer cursor-not-allowed',
    // @tw
    button: 'absolute transition duration-200 ease-in-out transform translate-x-0',
    // @tw
    buttonChecked: 'absolute transition duration-200 ease-in-out transform translate-x-full',
    // @tw
    checkedPlaceholder: '',
    // @tw
    uncheckedPlaceholder: '',
  },
}

export const TToggleClassesKeys = Object.keys(TToggleConfig.classes)

export type TToggleClassesValidKeys = keyof typeof TToggleConfig.classes

export default TToggleConfig
