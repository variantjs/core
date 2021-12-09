import isTouchOnlyDevice from '../helpers/isTouchOnlyDevice'

describe('isTouchOnlyDevice.', () => {
  it('returns `true` if matchMedia return matches', () => {
    const windowMock = {
      ...window,
      matchMedia: () => ({
        matches: true,
      }),
    }
    expect(isTouchOnlyDevice(windowMock as unknown as Window)).toBe(true)
  })

  it('returns `true` if matchMedia doesnt return matches', () => {
    const windowMock = {
      ...window,
      matchMedia: () => ({
        matches: false,
      }),
    }
    expect(isTouchOnlyDevice(windowMock as unknown as Window)).toBe(false)
  })

  it('uses the global window and navigator by default', () => {
    expect(isTouchOnlyDevice()).toBe(false)
  })

  it('returns `false` if window is not defined', () => {
    const windowSpy = jest.spyOn(window, 'window', 'get')
    windowSpy.mockImplementation(() => undefined as unknown as Window & typeof globalThis)

    expect(isTouchOnlyDevice()).toBe(false)

    windowSpy.mockRestore()
  })
})
