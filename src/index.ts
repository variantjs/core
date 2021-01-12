export type CSSClassKeyValuePair = {
  [key: string]: unknown
}

export type CSSClasses = CSSClass[]

export type CSSClass = string | CSSClassKeyValuePair | CSSClasses | undefined

export const selectClasses = (classesObject: CSSClassKeyValuePair): CSSClasses => {
  return Object.keys(classesObject).filter((className: string) => {
    return !!classesObject[className]
  })
}

export const mergeClasses = (...classes: CSSClasses): string => {
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
