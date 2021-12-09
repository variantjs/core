import promisifyFunctionResult from '../helpers/promisifyFunctionResult'

describe('promisifyFunctionResult', () => {
  it('converts the result of a function into a promise', async () => {
    const fn = () => 'result'

    const promisified = promisifyFunctionResult(fn)

    expect(promisified).toBeInstanceOf(Promise)

    const result = await promisified

    expect(result).toBe('result')
  })

  it('keeps promises as it is', async () => {
    const fn = () => new Promise((resolve) => resolve('result'))

    const promisified = promisifyFunctionResult(fn)

    expect(promisified).toBeInstanceOf(Promise)

    const result = await promisified

    expect(result).toBe('result')
  })

  it('pass the parameters to the function', async () => {
    const fn = (status: string): string => {
      if (status === 'success') {
        return 'success'
      }

      return 'error'
    }

    const promisified = promisifyFunctionResult(fn, 'success')

    expect(promisified).toBeInstanceOf(Promise)

    const result = await promisified

    expect(result).toBe('success')

    const promisified2 = promisifyFunctionResult(fn, 'other')

    expect(promisified2).toBeInstanceOf(Promise)

    const result2 = await promisified2

    expect(result2).toBe('error')
  })

  it('pass the parameters to the promise', async () => {
    const fn = (status: string): Promise<string> =>
      new Promise((resolve) => {
        if (status === 'success') {
          resolve('success')
        }

        resolve('error')
      })

    const promisified = promisifyFunctionResult(fn, 'success')

    expect(promisified).toBeInstanceOf(Promise)

    const result = await promisified

    expect(result).toBe('success')

    const promisified2 = promisifyFunctionResult(fn, 'other')

    expect(promisified2).toBeInstanceOf(Promise)

    const result2 = await promisified2

    expect(result2).toBe('error')
  })
})
