import throttle from '../helpers/throttle'

describe('throttle', () => {
  it('runs the method after 200 ms by default', () => {
    const mockFn = jest.fn()

    jest.useFakeTimers()

    const throttledFn = throttle(mockFn)

    throttledFn()

    expect(mockFn).toHaveBeenCalledTimes(1)

    jest.advanceTimersByTime(199)

    throttledFn()

    expect(mockFn).toHaveBeenCalledTimes(1)

    jest.advanceTimersByTime(1)

    throttledFn()

    expect(mockFn).toHaveBeenCalledTimes(2)
  })

  it('runs the method inmediatly once', () => {
    const mockFn = jest.fn()

    jest.useFakeTimers()

    const throttledFn = throttle(mockFn, 300)

    throttledFn()

    expect(mockFn).toHaveBeenCalledTimes(1)

    jest.advanceTimersByTime(299)

    throttledFn()

    expect(mockFn).toHaveBeenCalledTimes(1)

    jest.advanceTimersByTime(1)

    throttledFn()

    expect(mockFn).toHaveBeenCalledTimes(2)
  })
})
