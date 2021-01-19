import { CSSClass } from './CSSClass'

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
