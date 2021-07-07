import isTouchDevice from '../helpers/isTouchDevice';

describe('isTouchDevice.', () => {
  it('returns `true` if navigator `maxTouchPoints` is > 0', () => {
    const windowMock = {
      ...window,
    };
    const navigatorMock = {
      ...navigator,
      maxTouchPoints: 10,
      msMaxTouchPoints: 0,
    };

    expect(isTouchDevice(windowMock, navigatorMock)).toBe(true);
  });

  it('returns `true` if navigator `msMaxTouchPoints` is > 0', () => {
    const windowMock = {
      ...window,
    };
    const navigatorMock = {
      ...navigator,
      maxTouchPoints: 0,
      msMaxTouchPoints: 10,
    };

    expect(isTouchDevice(windowMock, navigatorMock)).toBe(true);
  });

  it('returns `true` if window `msMaxTouchPoints` has `ontouchstart`', () => {
    const windowMock = {
      ...window,
      ontouchstart: jest.fn(),
    };

    const navigatorMock = {
      ...navigator,
      maxTouchPoints: 0,
      msMaxTouchPoints: 0,
    };

    expect(isTouchDevice(windowMock as unknown as Window, navigatorMock)).toBe(true);
  });

  it('uses the global window and navigator by default', () => {
    expect(isTouchDevice()).toBe(false);
  });
});
