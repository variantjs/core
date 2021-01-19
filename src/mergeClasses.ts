import { CSSClass, CSSClasses, CSSClassKeyValuePair } from './types/CSSClass'

export const selectClasses = (classesObject: CSSClassKeyValuePair): CSSClasses => {
  return Object.keys(classesObject).filter((className: string) => {
    return !!classesObject[className]
  })
}

const mergeClasses = (...classes: CSSClasses): string => {
  return classes
    .map((className: CSSClass): string => {
      if (typeof className === 'string' || className === undefined) {
        return className || ''
      }

      if (Array.isArray(className)) {
        return mergeClasses(...className)
      }

      return mergeClasses(...selectClasses(className))
    })
    .join(' ')
    .replace(/  +/g, ' ')
    .trim()
}

export default mergeClasses
