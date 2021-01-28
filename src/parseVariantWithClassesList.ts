import {
  ObjectWithClassesList,
  VariantsWithClassesList,
  WithVariantPropsAndClassesList,
} from './types/Variants'
import mergeClasses from './mergeClasses'
import { CSSClassesList } from './types'

const getCustomPropsFromVariant = <P extends ObjectWithClassesList>(
  variants?: VariantsWithClassesList<P>,
  variant?: string
): WithVariantPropsAndClassesList<P> | undefined => {
  if (variant !== undefined && variants) {
    return variants[variant]
  }

  return undefined
}

const parseVariantWithClassesList = <P extends ObjectWithClassesList>(
  props: WithVariantPropsAndClassesList<P>,
  classesListKeys: Array<string>,
  globalConfiguration?: WithVariantPropsAndClassesList<P>,
  defaultConfiguration?: WithVariantPropsAndClassesList<P>
): P => {
  const { variants, variant, ...mainProps } = {
    ...defaultConfiguration,
    ...globalConfiguration,
    ...props,
  }

  const customProps = getCustomPropsFromVariant(variants, variant)

  const mergedProps = {
    ...mainProps,
    ...customProps,
  }

  const { classes, fixedClasses, ...componentProps } = mergedProps

  const mergedClasses: CSSClassesList = {}

  classesListKeys.forEach((classItemKey) => {
    const classesForTheCurrentKey = classes ? classes[classItemKey] : undefined
    const fixedClassesForTheCurrentKey = fixedClasses ? fixedClasses[classItemKey] : undefined

    mergedClasses[classItemKey] = mergeClasses(
      classesForTheCurrentKey,
      fixedClassesForTheCurrentKey
    )
  })

  if (Object.keys(mergedClasses).length > 0) {
    ;(componentProps as P).classesList = mergedClasses
  }

  return componentProps as P
}

export default parseVariantWithClassesList
