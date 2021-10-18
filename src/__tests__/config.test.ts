import * as config from '../config/index';

it('exports all the configs and keys', () => {
  const keys = [
    'TInputConfig',
    'TTextareaConfig',
    'TButtonConfig',
    'TSelectConfig',
    'TCheckboxConfig',
    'TRadioConfig',
    'TTagConfig',
    'TCardConfig',
    'TCardClassesKeys',
    'TModalConfig',
    'TModalClassesKeys',
    'ModalHideReason',
    'TDialogConfig',
    'TDialogClassesKeys',
    'DialogHideReason',
    'DialogType',
    'DialogIcon',
    'TAlertConfig',
    'TAlertClassesKeys',
    'TInputGroupConfig',
    'TInputGroupClassesKeys',
    'TDropdownConfig',
    'TDropdownPopperDefaultOptions',
    'TDropdownClassesKeys',
    'TRichSelectConfig',
    'TRichSelectClassesKeys',
    'TToggleConfig',
    'TToggleClassesKeys',
    'TDatepickerConfig',
    'TDatepickerClassesKeys',
    'TWrappedRadioConfig',
    'TWrappedRadioClassesKeys',
    'TWrappedCheckboxConfig',
    'TWrappedCheckboxClassesKeys',
  ];

  expect(Object.keys(config)).toEqual(keys);

  keys.forEach((key) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect((config as any)[key]).toBeTruthy();
  });
});
