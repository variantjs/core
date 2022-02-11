// import { enterAndLeave } from './transitions';

const TDatepickerConfig = {
  classes: {
    // @tw
    // wrapper: 'flex flex-col',
    // @tw
    dropdownWrapper: 'relative z-10',

    // Dropdown related classes
    // @tw
    dropdown: 'absolute mt-1 overflow-hidden origin-top-left bg-white rounded shadow',
    // enterClass: 'opacity-0 scale-95',
    // enterActiveClass: 'transition transform ease-out duration-100',
    // enterToClass: 'opacity-100 scale-100',
    // leaveClass: 'opacity-100 scale-100',
    // leaveActiveClass: 'transition transform ease-in duration-75',
    // leaveToClass: 'opacity-0 scale-95',

    // Wrapper for inline calendar
    // @tw
    inlineWrapper: '',
    // @tw
    inlineViews: 'inline-flex flex-col mt-1 bg-white border rounded',

    // Text input related classes
    // @tw
    inputWrapper: '',
    // @tw
    input: 'block w-full px-3 py-2 text-black placeholder-gray-400 transition duration-100 ease-in-out bg-white border border-gray-300 rounded shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed',
    // @tw
    clearButton: 'text-gray-600 transition duration-100 ease-in-out rounded hover:bg-gray-100',
    // @tw
    clearButtonIcon: '',

    // Picker views
    // @tw
    viewGroup: '',
    // @tw
    view: '',

    // Navigator
    // @tw
    navigator: 'px-3 pt-2',
    // @tw
    navigatorViewButton: 'inline-flex px-2 py-1 -ml-1 transition duration-100 ease-in-out rounded-full cursor-pointer hover:bg-gray-100',
    // @tw
    navigatorViewButtonIcon: 'text-gray-400 fill-current',
    // @tw
    navigatorViewButtonBackIcon: 'text-gray-400 fill-current',
    // @tw
    navigatorViewButtonMonth: 'font-semibold text-gray-700',
    // @tw
    navigatorViewButtonYear: 'ml-1 text-gray-500',
    // @tw
    navigatorViewButtonYearRange: 'ml-1 text-gray-500',
    // @tw
    navigatorLabel: 'py-1',
    // @tw
    navigatorLabelMonth: 'font-semibold text-gray-700',
    // @tw
    navigatorLabelYear: 'ml-1 text-gray-500',
    // @tw
    navigatorPrevButton: 'inline-flex p-1 ml-2 ml-auto transition duration-100 ease-in-out rounded-full cursor-pointer hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed',
    // @tw
    navigatorNextButton: 'inline-flex p-1 -mr-1 transition duration-100 ease-in-out rounded-full cursor-pointer hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed',
    // @tw
    navigatorPrevButtonIcon: 'text-gray-400',
    // @tw
    navigatorNextButtonIcon: 'text-gray-400',

    // Calendar View
    // @tw
    calendarWrapper: 'px-3 py-2',
    // @tw
    calendarHeaderWrapper: '',
    // @tw
    calendarHeaderWeekDay: 'flex items-center justify-center w-8 h-8 text-xs text-gray-500 uppercase',
    // @tw
    calendarDaysWrapper: '',
    // @tw
    calendarDaysDayWrapper: 'flex items-center flex-shrink-0 w-full h-8',

    // Day item
    // @tw
    otherMonthDay: 'w-8 h-8 mx-auto text-sm text-gray-400 rounded-full hover:bg-blue-100 disabled:opacity-50 disabled:cursor-not-allowed',
    // @tw
    emptyDay: '',
    // @tw
    inRangeFirstDay: 'w-full h-8 text-sm text-white bg-blue-500 rounded-l-full',
    // @tw
    inRangeLastDay: 'w-full h-8 text-sm text-white bg-blue-500 rounded-r-full',
    // @tw
    inRangeDay: 'w-full h-8 text-sm bg-blue-200 disabled:opacity-50 disabled:cursor-not-allowed',
    // @tw
    selectedDay: 'w-8 h-8 mx-auto text-sm text-white bg-blue-500 rounded-full disabled:opacity-50 disabled:cursor-not-allowed',
    // @tw
    activeDay: 'w-8 h-8 mx-auto text-sm bg-blue-100 rounded-full disabled:opacity-50 disabled:cursor-not-allowed',
    // @tw
    highlightedDay: 'w-8 h-8 mx-auto text-sm bg-blue-200 rounded-full disabled:opacity-50 disabled:cursor-not-allowed',
    // @tw
    day: 'w-8 h-8 mx-auto text-sm rounded-full hover:bg-blue-100 disabled:opacity-50 disabled:cursor-not-allowed',
    // @tw
    today: 'w-8 h-8 mx-auto text-sm border border-blue-500 rounded-full hover:bg-blue-100 disabled:opacity-50 disabled:cursor-not-allowed',

    // Months View
    // @tw
    monthWrapper: 'px-3 py-2',
    // @tw
    selectedMonth: 'w-full h-12 mx-auto text-sm text-white bg-blue-500 rounded',
    // @tw
    activeMonth: 'w-full h-12 mx-auto text-sm bg-blue-100 rounded',
    // @tw
    month: 'w-full h-12 mx-auto text-sm rounded hover:bg-blue-100',

    // Years View
    // @tw
    yearWrapper: 'px-3 py-2',
    // @tw
    year: 'w-full h-12 mx-auto text-sm rounded hover:bg-blue-100',
    // @tw
    selectedYear: 'w-full h-12 mx-auto text-sm text-white bg-blue-500 rounded',
    // @tw
    activeYear: 'w-full h-12 mx-auto text-sm bg-blue-100 rounded',

    // Time selector
    // @tw
    timepickerWrapper: 'flex items-center px-4 py-2 space-x-2',
    // @tw
    timepickerTimeWrapper: 'flex items-center space-x-2',
    // @tw
    timepickerTimeFieldsWrapper: 'flex items-center w-full text-right bg-gray-100 border border-gray-100 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50',
    // @tw
    timepickerOkButton: 'text-sm font-semibold text-blue-600 uppercase transition duration-100 ease-in-out border border-transparent rounded cursor-pointer focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50',
    // @tw
    timepickerInput: 'w-8 h-6 p-0 text-sm text-center transition duration-100 ease-in-out bg-transparent border border-transparent rounded focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50',
    // @tw
    timepickerTimeLabel: 'flex-grow text-sm text-gray-500',
    // @tw
    timepickerAmPmWrapper: 'relative inline-flex flex-shrink-0 transition duration-200 ease-in-out bg-gray-100 border border-transparent rounded cursor-pointer focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50',
    // @tw
    timepickerAmPmWrapperChecked: 'relative inline-flex flex-shrink-0 transition duration-200 ease-in-out bg-gray-100 border border-transparent rounded cursor-pointer focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50',
    // @tw
    timepickerAmPmWrapperDisabled: 'relative inline-flex flex-shrink-0 transition duration-200 ease-in-out opacity-50 cursor-not-allowed',
    // @tw
    timepickerAmPmWrapperCheckedDisabled: 'relative inline-flex flex-shrink-0 transition duration-200 ease-in-out opacity-50 cursor-not-allowed',
    // @tw
    timepickerAmPmButton: 'absolute flex items-center justify-center w-6 h-6 text-xs text-gray-800 transition duration-200 ease-in-out transform translate-x-0 bg-white rounded shadow',
    // @tw
    timepickerAmPmButtonChecked: 'absolute flex items-center justify-center w-6 h-6 text-xs text-gray-800 transition duration-200 ease-in-out transform translate-x-full bg-white rounded shadow',
    // @tw
    timepickerAmPmCheckedPlaceholder: 'flex items-center justify-center w-6 h-6 text-xs text-gray-500 rounded-sm',
    // @tw
    timepickerAmPmUncheckedPlaceholder: 'flex items-center justify-center w-6 h-6 text-xs text-gray-500 rounded-sm',
    // ...enterAndLeave,
  },
};

export const TDatepickerClassesKeys = Object.keys(TDatepickerConfig.classes);

export type TDatepickerClassesValidKeys = keyof typeof TDatepickerConfig.classes;

export default TDatepickerConfig;
