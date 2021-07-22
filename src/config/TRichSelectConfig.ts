import { enterAndLeave } from './transitions';

const TRichSelectConfig = {
  classes: {
    wrapper: 'relative',

    selectButton: 'w-full flex text-left justify-between items-center',
    dropdown: 'w-full z-10',

    buttonWrapper: 'inline-block relative w-full',

    selectButtonLabel: 'block truncate',
    selectButtonTagWrapper: 'flex flex-wrap overflow-hidden',
    selectButtonTag: 'bg-blue-500 block disabled:cursor-not-allowed disabled:opacity-50 duration-100 ease-in-out focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded shadow-sm text-sm text-white transition white-space-no m-0.5 max-w-full overflow-hidden h-8 flex items-center',
    selectButtonTagText: 'px-3',
    selectButtonTagDeleteButton: '-ml-1.5 h-full hover:bg-blue-600 hover:shadow-sm inline-flex items-center px-2 transition',
    selectButtonTagDeleteButtonIcon: 'w-3 h-3',
    selectButtonPlaceholder: 'block truncate',
    selectButtonIcon: 'fill-current flex-shrink-0 ml-1 h-4 w-4',
    selectButtonClearButton: 'flex flex-shrink-0 items-center justify-center absolute right-0 top-0 m-2 h-6 w-6',
    selectButtonClearIcon: 'fill-current h-3 w-3',

    dropdownFeedback: '',
    loadingMoreResults: '',
    optionsList: 'overflow-auto',
    searchWrapper: 'inline-block w-full',
    searchBox: 'inline-block w-full',
    optgroup: '',
    option: 'cursor-pointer',
    disabledOption: 'opacity-50 cursor-not-allowed',
    highlightedOption: 'cursor-pointer',
    selectedOption: 'cursor-pointer',
    selectedHighlightedOption: 'cursor-pointer',
    optionContent: '',
    optionLabel: 'truncate block',
    selectedIcon: 'fill-current h-4 w-4',
    ...enterAndLeave,
  },
};

export const TRichSelectClassesKeys = Object.keys(TRichSelectConfig.classes);

export type TRichSelectClassesValidKeys = keyof typeof TRichSelectConfig.classes;

export default TRichSelectConfig;
