import * as helpers from '../helpers/index';
import * as dateHelpers from '../dates/index';

it('exports all the helpers', () => {
  expect(Object.keys(helpers).length).toBe(17);

  expect(typeof helpers.get).toBe('function');
  expect(typeof helpers.pick).toBe('function');
  expect(typeof helpers.clone).toBe('function');
  expect(typeof helpers.isPrimitive).toBe('function');
  expect(typeof helpers.isEqual).toBe('function');
  expect(typeof helpers.hasProperty).toBe('function');
  expect(typeof helpers.debounce).toBe('function');
  expect(typeof helpers.throttle).toBe('function');
  expect(typeof helpers.addToArray).toBe('function');
  expect(typeof helpers.substractFromArray).toBe('function');
  expect(typeof helpers.elementIsTargetOrTargetChild).toBe('function');
  expect(typeof helpers.getFocusableElements).toBe('function');
  expect(typeof helpers.isTouchOnlyDevice).toBe('function');
  expect(typeof helpers.normalizeMeasure).toBe('function');
  expect(typeof helpers.normalizedOptionIsDisabled).toBe('function');
  expect(typeof helpers.promisify).toBe('function');
  expect(typeof helpers.promisifyFunctionResult).toBe('function');
});

it('exports all the date-related helpers', () => {
  expect(Object.keys(dateHelpers).length).toBe(15);

  expect(typeof dateHelpers.dateEnglishLocale).toBe('object');
  expect(typeof dateHelpers.visibleDaysInMonthView).toBe('function');
  expect(typeof dateHelpers.isSameDay).toBe('function');
  expect(typeof dateHelpers.isSameMonth).toBe('function');
  expect(typeof dateHelpers.isToday).toBe('function');
  expect(typeof dateHelpers.diffInDays).toBe('function');
  expect(typeof dateHelpers.addDays).toBe('function');
  expect(typeof dateHelpers.addMonths).toBe('function');
  expect(typeof dateHelpers.addYears).toBe('function');
  expect(typeof dateHelpers.dateIsPartOfTheRange).toBe('function');
  expect(typeof dateHelpers.dayIsPartOfTheConditions).toBe('function');
  expect(typeof dateHelpers.parseDate).toBe('function');
  expect(typeof dateHelpers.formatDate).toBe('function');
  expect(typeof dateHelpers.buildDateParser).toBe('function');
  expect(typeof dateHelpers.buildDateFormatter).toBe('function');
});
