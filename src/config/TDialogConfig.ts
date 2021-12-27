import { PromiseRejectFn, Data } from '../types/Misc';
import TInputConfig from './TInputConfig';
// eslint-disable-next-line import/no-named-as-default
import TModalConfig from './TModalConfig';

const {
  overlay: fixedOverlay,
  wrapper: fixedWrapper,
  modal: fixedDialog,
} = TModalConfig.fixedClasses;

const {
  overlay,
  wrapper,
  close,
  closeIcon,
  modal: dialog,
  overlayEnterActiveClass,
  overlayEnterFromClass,
  overlayEnterToClass,
  overlayLeaveActiveClass,
  overlayLeaveFromClass,
  overlayLeaveToClass,
  enterActiveClass,
  enterFromClass,
  enterToClass,
  leaveActiveClass,
  leaveFromClass,
  leaveToClass,
} = TModalConfig.classes;

const TDialogConfig = {
  fixedClasses: {
    overlay: fixedOverlay,
    wrapper: fixedWrapper,
    dialog: fixedDialog,
  },
  classes: {
    overlay,
    wrapper,
    // @tw
    close: `${close} disabled:text-opacity-50 disabled:cursor-not-allowed`,
    closeIcon,
    dialog,
    // @tw
    body: 'relative p-3',
    // @tw
    content: 'flex flex-col justify-center w-full',
    // @tw
    iconWrapper:
      'flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto mb-2 bg-gray-100 rounded-full',
    // @tw
    icon: 'w-6 h-6 text-gray-700',
    // @tw
    titleWrapper: '',
    // @tw
    title: 'text-lg font-medium leading-6 text-center text-gray-900',
    // @tw
    textWrapper: 'w-full text-center',
    // @tw
    text: 'text-sm text-gray-500',

    // @tw
    buttons: 'flex justify-center p-3 space-x-4 bg-gray-100 rounded-b',
    // @tw
    cancelButton:
      'block w-full max-w-xs px-4 py-2 transition duration-100 ease-in-out bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-100 focus:border-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed',
    // @tw
    okButton:
      'block w-full max-w-xs px-4 py-2 text-white transition duration-100 ease-in-out bg-blue-500 border border-transparent rounded shadow-sm hover:bg-blue-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed',

    // @tw
    inputWrapper: 'mt-3',
    // @tw
    inputValidationError: 'mt-1 text-sm font-semibold text-red-600',
    input: TInputConfig.classes,

    // @tw
    errorMessage: 'block p-3 mb-3 -mx-3 -mt-3 text-sm text-center text-red-500 rounded-t bg-red-50',

    // @tw
    busyWrapper:
      'absolute top-0 left-0 flex items-center justify-center w-full h-full bg-white bg-opacity-75',
    // @tw
    busyIcon: 'w-6 h-6 text-gray-500',

    enterActiveClass,
    enterFromClass,
    enterToClass,
    leaveActiveClass,
    leaveFromClass,
    leaveToClass,

    overlayEnterActiveClass,
    overlayEnterFromClass,
    overlayEnterToClass,
    overlayLeaveActiveClass,
    overlayLeaveFromClass,
    overlayLeaveToClass,
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
  hideReason: DialogHideReason
  isOk: boolean
  isCancel: boolean
  isDismissed: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  input?: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  response?: any
};

export type DialogShowFn = (name: string) => Promise<DialogResponse>;

export type DialogProgramaticallyShowFn = <Options extends Data>(
  titleOrDialogOptions: Options | string,
  text?: string,
  icon?: string
) => Promise<DialogResponse>;

export type DialogHideFn = (name: string) => void;

export type DialogBeforeHideParams = {
  cancel: PromiseRejectFn
  response?: DialogResponse
};

export type DialogBeforeShowParams = {
  cancel: PromiseRejectFn
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params?: any
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type DialogInputValidatorFn = (value: any) => string | Promise<string> | null | undefined;

// @TODO: see if was can get use a more specific typing
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type DialogPreconfirmFn = (input: any) => Promise<any> | any;

export const TDialogClassesKeys = Object.keys(TDialogConfig.classes);

export type TDialogClassesValidKeys = keyof typeof TDialogConfig.classes;

export default TDialogConfig;
