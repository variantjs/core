import { CSSClass, CSSClassesList, CSSRawClassesList } from './CSSClass'

export type WithVariantProps<P> = {
  classes?: CSSClass
  fixedClasses?: CSSClass
  variants?: Variants<P>
  variant?: string
  className?: string
} & P

export interface Variants<P> {
  [key: string]: WithVariantProps<P> | undefined
}

export type ObjectWithClassName = {
  className?: string
}

export type ObjectWithClassesList = ObjectWithClassName & {
  classesList?: CSSClassesList
}

export type WithVariantPropsAndClassesList<P> = {
  classes?: CSSRawClassesList
  fixedClasses?: CSSRawClassesList
  variants?: VariantsWithClassesList<P>
  variant?: string
  className?: string
} & P

export interface VariantsWithClassesList<P> {
  [key: string]: WithVariantPropsAndClassesList<P> | undefined
}
