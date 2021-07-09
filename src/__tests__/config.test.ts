import * as config from '../config/index';

it('exports all the configs and keys', () => {
  const keys = [
    'TInputConfig',
    'TTextareaConfig',
    'TButtonConfig',
    'TSelectConfig',
    'TCheckboxConfig',
    'TRadioConfig',
    'TCardConfig',
    'TAlertConfig',
    'TTagConfig',
    'TInputGroupConfig',
    'TDropdownConfig',
    'TDropdownPopperDefaultOptions',
    'TWrappedRadioConfig',
    'TWrappedCheckboxConfig',
  ];

  expect(Object.keys(config)).toEqual(keys);

  keys.forEach((key) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect((config as any)[key]).toBeTruthy();
  });
});
