import { NormalizedOption } from '..'
import normalizedOptionIsDisabled from '../helpers/normalizedOptionIsDisabled'

describe('normalizedOptionIsDisabled', () => {
  it('option disabled attribute is "disabled" returns true ', () => {
    const option: NormalizedOption = {
      value: 'value',
      text: 'text',
      disabled: 'disabled',
    }

    expect(normalizedOptionIsDisabled(option)).toBe(true)
  })

  it('option disabled attribute is `true` returns true ', () => {
    const option: NormalizedOption = {
      value: 'value',
      text: 'text',
      disabled: true,
    }

    expect(normalizedOptionIsDisabled(option)).toBe(true)
  })
  it('option disabled attribute is `false` returns false ', () => {
    const option: NormalizedOption = {
      value: 'value',
      text: 'text',
      disabled: false,
    }

    expect(normalizedOptionIsDisabled(option)).toBe(false)
  })
  it('option doesnt have disabled attribute returns false ', () => {
    const option: NormalizedOption = {
      value: 'value',
      text: 'text',
    }

    expect(normalizedOptionIsDisabled(option)).toBe(false)
  })
})
