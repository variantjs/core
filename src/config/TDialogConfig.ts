import { PromiseRejectFn } from '../types/Misc';
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
    close,
    closeIcon,
    dialog,
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
    input: TInputConfig.classes,

    errorMessage: 'text-red-500 block text-sm',

    busyWrapper: 'absolute bg-opacity-50 bg-white flex h-full items-center justify-center left-0 top-0 w-full',
    busyIcon: 'animate-spin h-6 w-6 fill-current text-gray-500',

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
  hideReason: DialogHideReason;
  isOk: boolean;
  isCancel: boolean;
  isDismissed: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  input?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  response?: any;
};

export type DialogShowFn = (name: string) => Promise<DialogResponse>;

export type DialogHideFn = (name: string) => void;

export type DialogBeforeHideParams = {
  cancel: PromiseRejectFn;
  response?: DialogResponse;
};

export type DialogBeforeShowParams = {
  cancel: PromiseRejectFn;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params?: any;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type DialogInputValidatorFn = (value: any) => string | Promise<string> | null | undefined;

// @TODO: see if was can get use a more specific typing
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type DialogPreconfirmFn = ((input: any) => Promise<any> | any);

export const TDialogClassesKeys = Object.keys(TDialogConfig.classes);

export type TDialogClassesValidKeys = keyof typeof TDialogConfig.classes;

export default TDialogConfig;
