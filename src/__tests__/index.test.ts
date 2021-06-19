import * as helpers from '../helpers/index';

it('exports all the helpers', () => {
  expect(Object.keys(helpers).length).toBe(3);

  expect(helpers.get).toBeTruthy();
  expect(helpers.pick).toBeTruthy();
  expect(helpers.isPrimitive).toBeTruthy();
});
