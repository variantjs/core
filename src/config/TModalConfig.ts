export const TModalConfig = {
  fixedClasses: {
    // @tw
    overlay: 'fixed top-0 bottom-0 left-0 right-0 w-full h-full overflow-auto scrolling-touch',
    // @tw
    wrapper: 'relative mx-auto',
    // @tw
    modal: 'relative overflow-visible',
  },
  classes: {
    // @tw
    overlay: 'z-40 bg-black bg-opacity-50',
    // @tw
    wrapper: 'z-50 max-w-lg px-3 py-12',
    // @tw
    close: 'absolute top-0 right-0 z-10 flex items-center justify-center w-8 h-8 -m-3 text-gray-700 transition ease-in-out bg-gray-100 rounded-full shadow duration-400 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 hover:bg-gray-200',
    // @tw
    closeIcon: 'w-4 h-4',
    // @tw
    modal: 'bg-white rounded shadow',
    // @tw
    header: 'p-3 border-b border-gray-100 rounded-t',
    // @tw
    body: 'p-3',
    // @tw
    footer: 'p-3 bg-gray-100 rounded-b',
    // @tw
    overlayEnterActiveClass: 'transition duration-300 ease-out',
    // @tw
    overlayEnterFromClass: 'transform opacity-0',
    // @tw
    overlayEnterToClass: 'transform opacity-100',
    // @tw
    overlayLeaveActiveClass: 'transition duration-300 ease-in',
    // @tw
    overlayLeaveFromClass: 'transform opacity-100',
    // @tw
    overlayLeaveToClass: 'transform opacity-0',
    // @tw
    enterActiveClass: 'transition duration-100 ease-out',
    // @tw
    enterFromClass: 'transform scale-95 opacity-0',
    // @tw
    enterToClass: 'transform scale-100 opacity-100',
    // @tw
    leaveActiveClass: 'transition duration-100 ease-in',
    // @tw
    leaveFromClass: 'transform scale-100 opacity-100',
    // @tw
    leaveToClass: 'transform scale-95 opacity-0',
  },
};

export enum ModalHideReason {
  Outside = 'outside',
  Close = 'close',
  Esc = 'esc',
  Method = 'method',
  Value = 'value',
  Other = 'other',
}

export type ModalShowFn = (name: string, params?: Record<string, unknown>) => void;

export type ModalHideFn = (name: string) => void;

export const TModalClassesKeys = Object.keys(TModalConfig.classes);

export type TModalClassesValidKeys = keyof typeof TModalConfig.classes;

export default TModalConfig;
