import {
  ObjectWithClassesList,
  VariantsWithClassesList,
  WithVariantPropsAndClassesList,
} from './types/Variants'
import get from './helpers/get'
import pick from './helpers/pick'

import mergeClasses from './mergeClasses'
import { CSSClassesList, CSSRawClassesList } from './types'

const getCustomPropsFromVariant = <
  P extends ObjectWithClassesList,
  C extends CSSRawClassesList,
  C2 extends CSSRawClassesList
>(
  variants?: VariantsWithClassesList<P, C, C2>,
  variant?: string
): WithVariantPropsAndClassesList<P, C, C2> | undefined => {
  if (variant !== undefined && variants) {
    return variants[variant]
  }

  return undefined
}

const parseVariantWithClassesList = <
  P extends ObjectWithClassesList,
  C extends CSSRawClassesList,
  C2 extends CSSRawClassesList
>(
  props: WithVariantPropsAndClassesList<P, C, C2>,
  classesListKeys: Readonly<(keyof C)[]>,
  globalConfiguration?: WithVariantPropsAndClassesList<P, C, C2>,
  defaultConfiguration?: WithVariantPropsAndClassesList<P, C, C2>
): P => {
  const { variants, variant, ...mainProps } = {
    ...defaultConfiguration,
    ...globalConfiguration,
    ...props,
  }

  const classes: Partial<C> = {}
  const fixedClasses: Partial<C> = {}

  classesListKeys.forEach((classItemKey) => {
    classes[classItemKey] = get<typeof props, C[keyof C]>(
      props,
      `classes.${classItemKey}`,
      get(
        globalConfiguration,
        `classes.${classItemKey}`,
        get(defaultConfiguration, `classes.${classItemKey}`)
      )
    )

    fixedClasses[classItemKey] = get<typeof props, C[keyof C]>(
      props,
      `fixedClasses.${classItemKey}`,
      get(
        globalConfiguration,
        `fixedClasses.${classItemKey}`,
        get(defaultConfiguration, `fixedClasses.${classItemKey}`)
      )
    )

    if (variant) {
      classes[classItemKey] = get<typeof props, C[keyof C]>(
        props,
        `variants.${variant}.classes.${classItemKey}`,
        get(
          globalConfiguration,
          `variants.${variant}.classes.${classItemKey}`,
          get(
            defaultConfiguration,
            `variants.${variant}.classes.${classItemKey}`,
            classes[classItemKey]
          )
        )
      )

      fixedClasses[classItemKey] = get<typeof props, C[keyof C]>(
        props,
        `variants.${variant}.fixedClasses.${classItemKey}`,
        get(
          globalConfiguration,
          `variants.${variant}.fixedClasses.${classItemKey}`,
          get(
            defaultConfiguration,
            `variants.${variant}.fixedClasses.${classItemKey}`,
            fixedClasses[classItemKey]
          )
        )
      )
    }
  })

  const customProps = getCustomPropsFromVariant(variants, variant)

  const mergedProps = {
    ...mainProps,
    ...customProps,
  }

  delete mergedProps['fixedClasses']

  delete mergedProps['classes']

  const mergedClasses: CSSClassesList = {}

  classesListKeys.forEach((classItemKey) => {
    const classesForTheCurrentKey = classes[classItemKey]
    const fixedClassesForTheCurrentKey = fixedClasses[classItemKey]

    mergedClasses[classItemKey as string] = mergeClasses(
      classesForTheCurrentKey,
      fixedClassesForTheCurrentKey
    )
  })

  const result = pick(mergedClasses)

  if (Object.keys(result).length > 0) {
    ;(mergedProps as P).classesList = result
  }

  return mergedProps as P
}

export default parseVariantWithClassesList
