import { enterAndLeave } from './transitions'

const TRichSelectConfig = {
  classes: {
    // @tw
    wrapper: 'relative',

    // TDropdown Component
    // @tw
    trigger:
      'flex items-center justify-between w-full px-3 py-2 text-left text-black transition duration-100 ease-in-out bg-white border border-gray-300 rounded shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed',
    // @tw
    dropdown: 'z-10 bg-white rounded shadow-lg',
    // Dropdown content
    // @tw
    dropdownContent: 'p-2 space-y-2',

    // Clear button
    // @tw
    clearButton:
      'absolute flex items-center justify-center w-6 h-6 text-gray-600 transition duration-100 ease-in-out rounded mt-2.5 mr-2 top-0 right-0 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50',

    // Option list
    // @tw
    optionsList: 'space-y-1',
    // @tw
    optionsListLoadingMore: 'flex items-center justify-between px-3 py-2 text-sm text-gray-400',

    // Option wrapper
    // @tw
    optionWrapper: '',

    // Option button
    // @tw
    option: 'w-full rounded cursor-pointer disabled:cursor-not-allowed disabled:opacity-50',
    // @tw
    selectedOption: 'font-semibold text-white bg-blue-500',
    // @tw
    highlightedOption: 'bg-blue-100',
    // @tw
    selectedHighlightedOption: 'font-semibold text-white bg-blue-600',

    //  Option content
    // @tw
    optionContent: 'flex items-center justify-between px-3 py-2',
    // @tw
    optionLabel: 'block truncate',
    // @tw
    optionSelectedIcon: 'w-5 h-5',

    // Option group
    // @tw
    optgroup: 'space-y-2',
    // @tw
    optgroupContent: '',
    // @tw
    optgroupLabel: 'block px-3 py-2 text-xs text-gray-400 uppercase truncate',
    // @tw
    optgroupOptionsList: 'px-2 pb-2',

    // Search
    // @tw
    searchWrapper: 'inline-block w-full placeholder-gray-400',
    // @tw
    searchInput:
      'inline-block w-full px-3 py-2 text-sm border border-gray-300 rounded shadow-inner bg-gray-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50',

    // State texts
    // @tw
    searchingText: 'text-sm text-gray-400',
    // @tw
    needsMoreCharsText: 'text-sm text-gray-400',
    // @tw
    noResultsText: 'text-sm text-gray-400',

    // Select button
    // @tw
    selectButtonLabel: 'block pr-4 truncate',
    // @tw
    selectButtonPlaceholder: 'block text-gray-400 truncate',
    // @tw
    selectButtonSearchingPlaceholder: 'block text-gray-400 truncate',
    // @tw
    selectButtonLoadingIcon: 'flex-shrink-0 w-4 h-4 ml-1 text-gray-600',
    // @tw
    selectButtonSelectorIcon: 'flex-shrink-0 w-4 h-4 ml-1 text-gray-600',

    // Select button tags
    // @tw
    tagsWrapper: 'flex flex-wrap overflow-hidden -mx-2 -my-2.5 py-1 pr-8',

    // Single tag
    // @tw
    tag: 'bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50 duration-100 ease-in-out focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded shadow-sm text-sm text-white transition white-space-no m-0.5 max-w-full h-8 flex items-center cursor-pointer',
    // @tw
    tagLabel: 'px-3',
    // @tw
    tagDeleteButton:
      '-ml-1.5 h-full hover:bg-blue-600 hover:shadow-sm inline-flex items-center px-2 transition focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 rounded-r',
    // @tw
    tagDeleteButtonIcon: 'w-3 h-3',

    ...enterAndLeave,
  },
}

export const TRichSelectClassesKeys = Object.keys(TRichSelectConfig.classes)

export type TRichSelectClassesValidKeys = keyof typeof TRichSelectConfig.classes

export default TRichSelectConfig
