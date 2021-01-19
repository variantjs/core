export type CSSClassKeyValuePair = {
  [key: string]: unknown
}

export type CSSClasses = CSSClass[]

export type CSSClass = string | CSSClassKeyValuePair | CSSClasses | undefined
