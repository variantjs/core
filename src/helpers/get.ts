/* eslint-disable @typescript-eslint/no-explicit-any */
const get = <T extends Record<K, any>, K extends keyof T>(
  object: T,
  path: string,
  defaultValue?: unknown
): unknown => {
  const result = path
    .replace(/\[/g, '.')
    .replace(/\]/g, '')
    .split('.')
    .reduce((objectSoFar: T | any, step: string) => {
      if (typeof objectSoFar === 'object' || Array.isArray(objectSoFar)) {
        return objectSoFar[step]
      }

      return undefined
    }, object)

  return result === undefined ? defaultValue : result
}

export default get
