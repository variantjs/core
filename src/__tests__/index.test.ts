import * as helpers from '../helpers/index'

it('exports all the helpers', () => {
  expect(Object.keys(helpers).length).toBe(2)
  
  expect(helpers.get).toBeTruthy()
  expect(helpers.pick).toBeTruthy()
});