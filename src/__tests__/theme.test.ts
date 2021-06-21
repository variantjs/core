import * as theme from '../theme/index';

it('exports all the themes and keys', () => {
  const keys = [
    'TInputTheme',
    'TTextareaTheme',
    'TButtonTheme',
    'TSelectTheme',
    'TCheckboxTheme',
    'TRadioTheme',
    'TCardTheme',
    'TWrappedCheckboxTheme',
    'TWrappedRadioTheme',
    'TWrappedRadioClassesListKeys',
    'TWrappedCheckboxClassesListKeys',
  ];

  expect(Object.keys(theme)).toEqual(keys);

  expect(theme.TInputTheme).toBeTruthy();
  expect(theme.TTextareaTheme).toBeTruthy();
  expect(theme.TButtonTheme).toBeTruthy();
  expect(theme.TSelectTheme).toBeTruthy();
  expect(theme.TCheckboxTheme).toBeTruthy();
  expect(theme.TRadioTheme).toBeTruthy();
  expect(theme.TCardTheme).toBeTruthy();
  expect(theme.TWrappedCheckboxTheme).toBeTruthy();
  expect(theme.TWrappedRadioTheme).toBeTruthy();
  expect(theme.TWrappedRadioClassesListKeys).toBeTruthy();
  expect(theme.TWrappedCheckboxClassesListKeys).toBeTruthy();
});
