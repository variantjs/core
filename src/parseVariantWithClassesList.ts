import {
  ObjectWithClassesList,
  VariantsWithClassesList,
  WithVariantPropsAndClassesList,
} from './types/Variants'
import get from './helpers/get'

import mergeClasses from './mergeClasses'
import { CSSClassesList, CSSRawClassesList } from './types'

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

  if (Object.keys(mergedClasses).length > 0) {
    ;(mergedProps as P).classesList = mergedClasses
  }

  return mergedProps as P
}

export default parseVariantWithClassesList
