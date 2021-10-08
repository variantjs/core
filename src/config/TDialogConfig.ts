const TDialogConfig = {
  fixedClasses: {
    overlay: 'fixed top-0 bottom-0 left-0 right-0 w-full h-full overflow-auto scrolling-touch',
    wrapper: '',
    dialog: 'overflow-visible relative ',
  },
  classes: {
    overlay: 'z-40 bg-black bg-opacity-50',
    wrapper: 'relative z-50 max-w-lg px-3 py-12 mx-auto',
    close: 'absolute top-0 right-0 flex items-center justify-center w-8 h-8 -m-3 text-gray-700 transition ease-in-out bg-gray-100 rounded-full shadow duration-400 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 hover:bg-gray-200',
    closeIcon: 'w-4 h-4',
    dialog: 'bg-white rounded shadow',
    body: 'p-3 space-y-2',
    content: 'flex flex-col justify-center w-full',

    iconWrapper: 'flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto bg-gray-100 rounded-full',
    icon: 'w-6 h-6 text-gray-700',

    titleWrapper: '',
    title: 'text-lg font-medium leading-6 text-center text-gray-900',

    textWrapper: 'w-full text-center',
    text: 'text-sm text-gray-500',

    buttons: 'flex justify-center p-3 space-x-4 bg-gray-100 rounded-b',
    cancelButton: 'block w-full max-w-xs px-4 py-2 transition duration-100 ease-in-out bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-100 focus:border-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed',
    okButton: 'block w-full max-w-xs px-4 py-2 text-white transition duration-100 ease-in-out bg-blue-500 border border-transparent rounded shadow-sm hover:bg-blue-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed',

    inputWrapper: 'mt-3 flex',

    errorMessage: 'text-red-500 block text-sm',

    busyWrapper: 'absolute bg-opacity-50 bg-white flex h-full items-center justify-center left-0 top-0 w-full',
    busyIcon: 'animate-spin h-6 w-6 fill-current text-gray-500',

    enterActiveClass: 'transition duration-100 ease-out',
    enterFromClass: 'transform scale-95 opacity-0',
    enterToClass: 'transform scale-100 opacity-100',
    leaveActiveClass: 'transition duration-100 ease-in',
    leaveFromClass: 'transform scale-100 opacity-100',
    leaveToClass: 'transform scale-95 opacity-0',

    overlayEnterActiveClass: 'transition ease-out duration-300',
    overlayEnterFromClass: 'transform opacity-0',
    overlayEnterToClass: 'transform opacity-100',
    overlayLeaveActiveClass: 'transition duration-300 ease-in',
    overlayLeaveFromClass: 'transform opacity-100',
    overlayLeaveToClass: 'transform opacity-0',
  },
};

export enum DialogType {
  Alert = 'alert',
  Confirm = 'confirm',
  Prompt = 'prompt',
}

export enum DialogIcon {
  Success = 'success',
  Error = 'error',
  Warning = 'warning',
  Info = 'info',
  Question = 'question',
}

export enum DialogHideReason {
  Outside = 'outside',
  Close = 'close',
  Esc = 'esc',
  Method = 'method',
  Value = 'value',
  Other = 'other',
  Cancel = 'cancel',
  Ok = 'ok',
}

export type DialogResponse = {
  hideReason: DialogHideReason;
  isOk: boolean;
  isCancel: boolean;
  isDismissed: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  input?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  response: any;
};

export type DialogShowFn = (name: string) => Promise<DialogResponse>;

export type DialogHideFn = (name: string) => void;

export type DialogBeforeCloseParams = {
  cancel: () => void;
  event: Event;
  reason: DialogHideReason;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  input: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  response: any;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type DialogInputValidatorFn = (value: any) => string | Promise<string> | null | undefined;

// @TODO: see if was can get use a more specific typing
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type DialogPreconfirmFn = ((params: any) => Promise<any> | any);

export const TDialogClassesKeys = Object.keys(TDialogConfig.classes);

export type TDialogClassesValidKeys = keyof typeof TDialogConfig.classes;

export default TDialogConfig;
