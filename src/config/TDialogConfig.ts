export const TDialogConfig = {
  fixedClasses: {
    overlay: 'fixed top-0 bottom-0 left-0 right-0 w-full h-full overflow-auto scrolling-touch',
    wrapper: 'relative mx-auto',
    modal: 'overflow-visible relative ',
  },
  classes: {
    overlay: 'z-40 bg-black bg-opacity-50',
    wrapper: 'relative z-50 max-w-lg px-3 py-12 mx-auto',
    close: 'absolute top-0 right-0 flex items-center justify-center w-8 h-8 -m-3 text-gray-700 transition ease-in-out bg-gray-100 rounded-full shadow duration-400 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 hover:bg-gray-200',
    closeIcon: 'w-4 h-4',
    modal: 'bg-white rounded shadow',
    header: 'p-3 border-b border-gray-100 rounded-t',
    body: 'p-3',
    footer: 'p-3 rounded-b bg-gray-100',
    overlayEnterActiveClass: 'transition ease-out duration-300',
    overlayEnterFromClass: 'transform opacity-0',
    overlayEnterToClass: 'transform opacity-100',
    overlayLeaveActiveClass: 'transition duration-300 ease-in',
    overlayLeaveFromClass: 'transform opacity-100',
    overlayLeaveToClass: 'transform opacity-0',
    enterActiveClass: 'transition duration-100 ease-out',
    enterFromClass: 'transform scale-95 opacity-0',
    enterToClass: 'transform scale-100 opacity-100',
    leaveActiveClass: 'transition duration-100 ease-in',
    leaveFromClass: 'transform scale-100 opacity-100',
    leaveToClass: 'transform scale-95 opacity-0',
  },
};

export enum DialogType {
  Alert = 'alert',
  Confirm = 'confirm',
  Prompt = 'prompt',
}

export enum DialogHideReason {
  Outside = 'outside',
  Close = 'close',
  Esc = 'esc',
  Cancel = 'cancel',
  Ok = 'ok',
  Method = 'method',
  Value = 'value',
}

export type DialogInput = string | string[] | null;

export type DialogResponse = {
  hideReason: DialogHideReason;
  isOk: boolean;
  isCancel: boolean;
  isDismissed: boolean;
  input?: DialogInput;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  response: any;
};

export type DialogShowFn = (name: string) => Promise<DialogResponse>;

export type DialogHideFn = (name: string) => void;

export type DialogBeforeCloseParams = {
  cancel: () => void;
  event: Event;
  reason: DialogHideReason;
  input: DialogInput;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  response: any;
};

export const TDialogClassesKeys = Object.keys(TDialogConfig.classes);

export type TDialogClassesValidKeys = keyof typeof TDialogConfig.classes;

export default TDialogConfig;
