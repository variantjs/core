import {
  ObjectWithClassesList,
  VariantsWithClassesList,
  WithVariantPropsAndClassesList,
  WithVariantProps,
} from './types/Variants'
import pick from './helpers/pick'

import mergeClasses from './mergeClasses'
import { CSSClassesList, CSSRawClassesList } from './types'
import hasProperty from './helpers/hasProperty'
import isObject from './helpers/isObject'

const getCustomPropsFromVariant = <P extends ObjectWithClassesList, ClassesKeys extends string>(
  variants?: VariantsWithClassesList<P, ClassesKeys>,
  variant?: string
): WithVariantPropsAndClassesList<P, ClassesKeys> | undefined => {
  if (variant !== undefined && variants) {
    return variants[variant]
  }

  return undefined
}

const getShouldClearClasses = <P extends ObjectWithClassesList, ClassesKeys extends string>(
  props: WithVariantPropsAndClassesList<P, ClassesKeys>,
  key: string,
  variant: string | undefined
): boolean => {
  if (variant === undefined) {
    return hasProperty(props, key) && (props[key] === undefined || props[key] === null)
  }

  if (props.variants !== undefined && props.variants[variant] !== undefined) {
    const propsVariant = props.variants[variant] as WithVariantProps<P>

    return (
      hasProperty(propsVariant, key) &&
      (propsVariant[key] === undefined || propsVariant[key] === null)
    )
  }

  return false
}

const parseVariantWithClassesList = <P extends ObjectWithClassesList, ClassesKeys extends string>(
  props: WithVariantPropsAndClassesList<P, ClassesKeys>,
  classesListKeys: Readonly<Array<ClassesKeys>>,
  globalConfiguration?: WithVariantPropsAndClassesList<P, ClassesKeys>,
  defaultConfiguration?: WithVariantPropsAndClassesList<P, ClassesKeys>
): P => {
  const { variants, variant, ...mainProps } = {
    ...defaultConfiguration,
    ...globalConfiguration,
    ...props,
  }

  const classes: Partial<CSSRawClassesList<ClassesKeys>> = {}
  const fixedClasses: Partial<CSSRawClassesList<ClassesKeys>> = {}

  const clearClasses = getShouldClearClasses(props, 'classes', variant)

  const clearFixedClasses = getShouldClearClasses(props, 'fixedClasses', variant)

  if (clearClasses) {
    classesListKeys.forEach((classItemKey) => {
      classes[classItemKey] = undefined
    })
  } else {
    classesListKeys.forEach((classItemKey) => {
      // Get classes from global configuration or alternatively from library configuration
      if (
        globalConfiguration &&
        isObject(globalConfiguration.classes) &&
        classItemKey in globalConfiguration.classes
      ) {
        classes[classItemKey] = globalConfiguration.classes[classItemKey]
      } else if (
        defaultConfiguration &&
        isObject(defaultConfiguration.classes) &&
        classItemKey in defaultConfiguration.classes
      ) {
        classes[classItemKey] = defaultConfiguration.classes[classItemKey]
      }

      // Get classes from props and merge them with the previous ones
      if (isObject(props.classes) && classItemKey in props.classes) {
        if (typeof props.classes[classItemKey] !== 'undefined') {
          classes[classItemKey] = [classes[classItemKey], props.classes[classItemKey]]
        } else {
          classes[classItemKey] = undefined
        }
      }

      if (variant) {
        if (props.variants !== undefined && props.variants[variant] !== undefined) {
          const propsVariant = props.variants[variant] as WithVariantProps<P>

          if (isObject(propsVariant.classes) && classItemKey in propsVariant.classes) {
            classes[classItemKey] = propsVariant.classes[classItemKey]
          }
        } else if (
          globalConfiguration &&
          isObject(globalConfiguration.variants) &&
          variant in globalConfiguration.variants
        ) {
          const globalConfigurationVariant = globalConfiguration.variants[
            variant
          ] as WithVariantProps<P>

          if (
            globalConfigurationVariant.classes &&
            isObject(globalConfigurationVariant.classes) &&
            classItemKey in globalConfigurationVariant.classes
          ) {
            classes[classItemKey] = globalConfigurationVariant.classes[classItemKey]
          }
        } else if (
          defaultConfiguration !== undefined &&
          defaultConfiguration.variants !== undefined &&
          defaultConfiguration.variants[variant] !== undefined
        ) {
          const defaultConfigurationVariant = defaultConfiguration.variants[
            variant
          ] as WithVariantProps<P>

          if (
            defaultConfigurationVariant.classes &&
            isObject(defaultConfigurationVariant.classes) &&
            classItemKey in defaultConfigurationVariant.classes
          ) {
            classes[classItemKey] = defaultConfigurationVariant.classes[classItemKey]
          }
        }
      }
    })
  }

  if (clearFixedClasses) {
    classesListKeys.forEach((classItemKey) => {
      fixedClasses[classItemKey] = undefined
    })
  } else {
    classesListKeys.forEach((classItemKey) => {
      // Get classes from global configuration or alternatively from library configuration
      if (
        globalConfiguration &&
        isObject(globalConfiguration.fixedClasses) &&
        classItemKey in globalConfiguration.fixedClasses
      ) {
        fixedClasses[classItemKey] = globalConfiguration.fixedClasses[classItemKey]
      } else if (
        defaultConfiguration &&
        isObject(defaultConfiguration.fixedClasses) &&
        classItemKey in defaultConfiguration.fixedClasses
      ) {
        fixedClasses[classItemKey] = defaultConfiguration.fixedClasses[classItemKey]
      }

      // Get classes from props and merge them with the previous ones
      if (isObject(props.fixedClasses) && classItemKey in props.fixedClasses) {
        if (typeof props.fixedClasses[classItemKey] !== 'undefined') {
        fixedClasses[classItemKey] = [fixedClasses[classItemKey], props.fixedClasses[classItemKey]]
      } else {
        classes[classItemKey] = undefined
      }
      }

      if (variant) {
        if (props.variants !== undefined && props.variants[variant] !== undefined) {
          const propsVariant = props.variants[variant] as WithVariantProps<P>

          if (isObject(propsVariant.fixedClasses) && classItemKey in propsVariant.fixedClasses) {
            fixedClasses[classItemKey] = propsVariant.fixedClasses[classItemKey]
          }
        } else if (
          globalConfiguration !== undefined &&
          globalConfiguration.variants !== undefined &&
          globalConfiguration.variants[variant] !== undefined
        ) {
          const globalConfigurationVariant = globalConfiguration.variants[
            variant
          ] as WithVariantProps<P>

          if (
            isObject(globalConfigurationVariant.fixedClasses) &&
            classItemKey in globalConfigurationVariant.fixedClasses
          ) {
            fixedClasses[classItemKey] = globalConfigurationVariant.fixedClasses[classItemKey]
          }
        } else if (
          defaultConfiguration !== undefined &&
          defaultConfiguration.variants !== undefined &&
          defaultConfiguration.variants[variant] !== undefined
        ) {
          const defaultConfigurationVariant = defaultConfiguration.variants[
            variant
          ] as WithVariantProps<P>

          if (
            isObject(defaultConfigurationVariant.fixedClasses) &&
            classItemKey in defaultConfigurationVariant.fixedClasses
          ) {
            fixedClasses[classItemKey] = defaultConfigurationVariant.fixedClasses[classItemKey]
          }
        }
      }
    })
  }

  const customProps = getCustomPropsFromVariant(variants, variant)

  const mergedProps = {
    ...mainProps,
    ...customProps,
  }

  delete mergedProps.fixedClasses

  delete mergedProps.classes

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
