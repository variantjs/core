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
    'TTagConfig',
    'TInputGroupConfig',
    'TWrappedRadioConfig',
    'TWrappedCheckboxConfig',
  ];

  expect(Object.keys(config)).toEqual(keys);

  keys.forEach((key) => {
    expect((config as any)[key]).toBeTruthy();
  });
});
