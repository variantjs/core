import isTouchOnlyDevice from '../helpers/isTouchOnlyDevice';

describe('isTouchOnlyDevice.', () => {
  it('returns `true` if matchMedia return matches', () => {
    const windowMock = {
      ...window,
      matchMedia: () => ({
        matches: true,
      }),
    };
    expect(isTouchOnlyDevice(windowMock as unknown as Window)).toBe(true);
  });

  it('returns `true` if matchMedia doesnt return matches', () => {
    const windowMock = {
      ...window,
      matchMedia: () => ({
        matches: false,
      }),
    };
    expect(isTouchOnlyDevice(windowMock as unknown as Window)).toBe(false);
  });

  it('uses the global window and navigator by default', () => {
    expect(isTouchOnlyDevice()).toBe(false);
  });
});
