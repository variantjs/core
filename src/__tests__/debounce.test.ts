import debounce from '../helpers/debounce'

describe('debounce', () => {
  it('runs the function after the default time', () => {
    const mockFn = jest.fn()

    jest.useFakeTimers()

    debounce(mockFn)()

    expect(mockFn).not.toHaveBeenCalled()

    jest.advanceTimersByTime(199)

    expect(mockFn).not.toHaveBeenCalled()

    jest.advanceTimersByTime(1)

    expect(mockFn).toHaveBeenCalled()
  })

  it('reset the time if function called again', () => {
    const mockFn = jest.fn()

    jest.useFakeTimers()

    const func = debounce(mockFn, 200)

    func()

    expect(mockFn).not.toHaveBeenCalled()

    jest.advanceTimersByTime(199)

    func()

    jest.advanceTimersByTime(199)

    expect(mockFn).not.toHaveBeenCalled()

    jest.advanceTimersByTime(1)

    expect(mockFn).toHaveBeenCalled()
  })

  it('can cancel the call', () => {
    const mockFn = jest.fn()

    jest.useFakeTimers()

    const func = debounce(mockFn, 200)

    func()

    func.cancel()

    jest.advanceTimersByTime(300)

    expect(mockFn).not.toHaveBeenCalled()
  })

  it('handle the function params ', () => {
    const mockFn = jest.fn()

    jest.useFakeTimers()

    debounce(mockFn, 100)('test', 1)

    jest.advanceTimersByTime(100)

    expect(mockFn).toHaveBeenLastCalledWith(['test', 1])
  })

  it('runs the function inmediatly if wait is falsy value', () => {
    const mockFn = jest.fn()

    debounce(mockFn, 0)()

    expect(mockFn).toHaveBeenCalled()
  })
})
