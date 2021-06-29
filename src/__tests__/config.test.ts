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
    'TWrappedRadioConfig',
    'TWrappedCheckboxConfig',
  ];

  expect(Object.keys(config)).toEqual(keys);

  expect(config.TInputConfig).toBeTruthy();
  expect(config.TTextareaConfig).toBeTruthy();
  expect(config.TButtonConfig).toBeTruthy();
  expect(config.TSelectConfig).toBeTruthy();
  expect(config.TCheckboxConfig).toBeTruthy();
  expect(config.TRadioConfig).toBeTruthy();
  expect(config.TCardConfig).toBeTruthy();
  expect(config.TWrappedCheckboxConfig).toBeTruthy();
  expect(config.TWrappedRadioConfig).toBeTruthy();
});
