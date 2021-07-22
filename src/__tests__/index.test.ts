import * as helpers from '../helpers/index';

it('exports all the helpers', () => {
  expect(Object.keys(helpers).length).toBe(11);

  expect(typeof helpers.get).toBe('function');
  expect(typeof helpers.pick).toBe('function');
  expect(typeof helpers.clone).toBe('function');
  expect(typeof helpers.isPrimitive).toBe('function');
  expect(typeof helpers.isEqual).toBe('function');
  expect(typeof helpers.debounce).toBe('function');
  expect(typeof helpers.throttle).toBe('function');
  expect(typeof helpers.toggleArrayItem).toBe('function');
  expect(typeof helpers.elementIsTargetOrTargetChild).toBe('function');
  expect(typeof helpers.getFocusableElements).toBe('function');
  expect(typeof helpers.isTouchOnlyDevice).toBe('function');
});
