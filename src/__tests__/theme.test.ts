import * as theme from '../theme/index';

it('exports all the themes', () => {
  const keys = [
    'TInputTheme',
    'TTextareaTheme',
    'TButtonTheme',
    'TSelectTheme',
    'TCheckboxTheme',
    'TRadioTheme',
    'TWrappedCheckboxTheme',
    'TWrappedRadioTheme',
  ];

  expect(Object.keys(theme)).toEqual(keys);

  expect(theme.TInputTheme).toBeTruthy();
  expect(theme.TTextareaTheme).toBeTruthy();
  expect(theme.TButtonTheme).toBeTruthy();
  expect(theme.TSelectTheme).toBeTruthy();
  expect(theme.TCheckboxTheme).toBeTruthy();
  expect(theme.TRadioTheme).toBeTruthy();
  expect(theme.TWrappedCheckboxTheme).toBeTruthy();
  expect(theme.TWrappedRadioTheme).toBeTruthy();
});
