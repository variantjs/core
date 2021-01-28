export type CSSClassKeyValuePair = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

export type CSSClasses = CSSClass[]

export type CSSClass = CSSClassKeyValuePair | string | CSSClasses | undefined

export type CSSRawClassesList = {
  [key: string]: CSSClass
}

export type CSSClassesList = {
  [key: string]: string
}
