import promisify from '../helpers/promisify';

describe('promisify', () => {
  it('converts a random value into a promise', async () => {
    const value = 'result';

    const promise = promisify(value);

    expect(promise).toBeInstanceOf(Promise);

    const result = await promise;

    expect(result).toBe(value);
  });

  it('keeps promises as it is', async () => {
    const value = new Promise((resolve) => resolve('result'));

    const promise = promisify(value);

    expect(promise).toBeInstanceOf(Promise);

    const result = await promise;

    expect(result).toBe('result');
  });
});
