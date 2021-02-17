import { CSSClass, CSSClassesList, CSSRawClassesList } from './CSSClass'

export type WithVariantProps<P> = {
  classes?: CSSClass
  fixedClasses?: CSSClass
  variants?: Variants<P>
  variant?: string
  class?: string
} & P

export interface Variants<P> {
  [key: string]: WithVariantProps<P> | undefined
}

export type ObjectWithClassName = {
  class?: string
}

export type ObjectWithClassesList = ObjectWithClassName & {
  classesList?: CSSClassesList
}

export type WithVariantPropsAndClassesList<
  P,
  C extends CSSRawClassesList,
  C2 extends CSSRawClassesList
> = {
  classes?: C
  fixedClasses?: C2
  variants?: VariantsWithClassesList<P, C, C2>
  variant?: string
  class?: string
} & P

export interface VariantsWithClassesList<
  P,
  C extends CSSRawClassesList,
  C2 extends CSSRawClassesList
> {
  [key: string]: WithVariantPropsAndClassesList<P, C, C2> | undefined
}
