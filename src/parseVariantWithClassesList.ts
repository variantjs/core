import {
  ObjectWithClassesList,
  VariantsWithClassesList,
  WithVariantPropsAndClassesList,
} from './types/Variants'
import get from './helpers/get'
import pick from './helpers/pick'

import mergeClasses from './mergeClasses'
import { CSSClassesList, CSSRawClassesList } from './types'

const getCustomPropsFromVariant = <P extends ObjectWithClassesList, C extends CSSRawClassesList>(
  variants?: VariantsWithClassesList<P, C>,
  variant?: string
): WithVariantPropsAndClassesList<P, C> | undefined => {
  if (variant !== undefined && variants) {
    return variants[variant]
  }

  return undefined
}

const parseVariantWithClassesList = <P extends ObjectWithClassesList, C extends CSSRawClassesList>(
  props: WithVariantPropsAndClassesList<P, C>,
  classesListKeys: Array<string>,
  globalConfiguration?: WithVariantPropsAndClassesList<P, C>,
  defaultConfiguration?: WithVariantPropsAndClassesList<P, C>
): P => {
  const { variants, variant, ...mainProps } = {
    ...defaultConfiguration,
    ...globalConfiguration,
    ...props,
  }

  const classes: CSSRawClassesList = {}
  const fixedClasses: CSSRawClassesList = {}

  classesListKeys.forEach((classItemKey) => {
    classes[classItemKey] = get<typeof props, string>(
      props,
      `classes.${classItemKey}`,
      get(
        globalConfiguration,
        `classes.${classItemKey}`,
        get(defaultConfiguration, `classes.${classItemKey}`)
      )
    )

    fixedClasses[classItemKey] = get<typeof props, string>(
      props,
      `fixedClasses.${classItemKey}`,
      get(
        globalConfiguration,
        `fixedClasses.${classItemKey}`,
        get(defaultConfiguration, `fixedClasses.${classItemKey}`)
      )
    )

    if (variant) {
      classes[classItemKey] = get<typeof props, string>(
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

      fixedClasses[classItemKey] = get<typeof props, string>(
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

    mergedClasses[classItemKey] = mergeClasses(
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
