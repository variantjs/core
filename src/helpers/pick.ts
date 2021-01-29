/* eslint-disable @typescript-eslint/no-explicit-any */
const pick = <T>(object: T, condition: (value: any) => boolean = (value) => !!value): T => {
  const newObject = { ...object }

  Object.keys(object)
    .filter((key) => !condition(newObject[key as keyof T]))
    .forEach((key) => delete newObject[key as keyof T])

  return newObject
}

export default pick
