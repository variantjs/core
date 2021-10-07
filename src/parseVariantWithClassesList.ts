import {
  ObjectWithClassesList,
  VariantsWithClassesList,
  WithVariantPropsAndClassesList,
  WithVariantProps,
} from './types/Variants';
import pick from './helpers/pick';

import mergeClasses from './mergeClasses';
import { CSSClassesList, CSSRawClassesList } from './types';
import hasProperty from './hasProperty';

const getCustomPropsFromVariant = <
  P extends ObjectWithClassesList,
  ClassesKeys extends string,
>(
    variants?: VariantsWithClassesList<P, ClassesKeys>,
    variant?: string,
  ): WithVariantPropsAndClassesList<P, ClassesKeys> | undefined => {
  if (variant !== undefined && variants) {
    return variants[variant];
  }

  return undefined;
};

const parseVariantWithClassesList = <
  P extends ObjectWithClassesList,
  ClassesKeys extends string,
>(
    props: WithVariantPropsAndClassesList<P, ClassesKeys>,
    classesListKeys: Readonly<Array<ClassesKeys>>,
    globalConfiguration?: WithVariantPropsAndClassesList<P, ClassesKeys>,
    defaultConfiguration?: WithVariantPropsAndClassesList<P, ClassesKeys>,
  ): P => {
  const { variants, variant, ...mainProps } = {
    ...defaultConfiguration,
    ...globalConfiguration,
    ...props,
  };

  const classes: Partial<CSSRawClassesList<ClassesKeys>> = {};
  const fixedClasses: Partial<CSSRawClassesList<ClassesKeys>> = {};

  const clearClasses = hasProperty(props, 'classes') && (props.classes === undefined || props.classes === null);
  const clearFixedClasses = hasProperty(props, 'fixedClasses') && (props.fixedClasses === undefined || props.fixedClasses === null);

  if (clearClasses) {
    classesListKeys.forEach((classItemKey) => {
      classes[classItemKey] = undefined;
    });
  }

  if (clearFixedClasses) {
    classesListKeys.forEach((classItemKey) => {
      fixedClasses[classItemKey] = undefined;
    });
  }

  classesListKeys.forEach((classItemKey) => {
    if (!clearClasses) {
      if (props.classes !== undefined && hasProperty(props.classes, classItemKey)) {
        classes[classItemKey] = props.classes[classItemKey];
      } else if (globalConfiguration !== undefined && globalConfiguration.classes !== undefined && hasProperty(globalConfiguration.classes, classItemKey)) {
        classes[classItemKey] = globalConfiguration.classes[classItemKey];
      } else if (defaultConfiguration !== undefined && defaultConfiguration.classes !== undefined && hasProperty(defaultConfiguration.classes, classItemKey)) {
        classes[classItemKey] = defaultConfiguration.classes[classItemKey];
      }
    }

    if (!clearFixedClasses) {
      if (props.fixedClasses !== undefined && hasProperty(props.fixedClasses, classItemKey)) {
        fixedClasses[classItemKey] = props.fixedClasses[classItemKey];
      } else if (globalConfiguration !== undefined && globalConfiguration.fixedClasses !== undefined && hasProperty(globalConfiguration.fixedClasses, classItemKey)) {
        fixedClasses[classItemKey] = globalConfiguration.fixedClasses[classItemKey];
      } else if (defaultConfiguration !== undefined && defaultConfiguration.fixedClasses !== undefined && hasProperty(defaultConfiguration.fixedClasses, classItemKey)) {
        fixedClasses[classItemKey] = defaultConfiguration.fixedClasses[classItemKey];
      }
    }

    if (variant) {
      if (!clearClasses) {
        if (props.variants !== undefined && props.variants[variant] !== undefined) {
          const propsVariant = props.variants[variant] as WithVariantProps<P>;

          if (propsVariant.classes && hasProperty(propsVariant.classes, classItemKey)) {
            classes[classItemKey] = propsVariant.classes[classItemKey];
          }
        } else if (globalConfiguration !== undefined && globalConfiguration.variants !== undefined && globalConfiguration.variants[variant] !== undefined) {
          const globalConfigurationVariant = globalConfiguration.variants[variant] as WithVariantProps<P>;

          if (globalConfigurationVariant.classes && hasProperty(globalConfigurationVariant.classes, classItemKey)) {
            classes[classItemKey] = globalConfigurationVariant.classes[classItemKey];
          }
        } else if (defaultConfiguration !== undefined && defaultConfiguration.variants !== undefined && defaultConfiguration.variants[variant] !== undefined) {
          const defaultConfigurationVariant = defaultConfiguration.variants[variant] as WithVariantProps<P>;

          if (defaultConfigurationVariant.classes && hasProperty(defaultConfigurationVariant.classes, classItemKey)) {
            classes[classItemKey] = defaultConfigurationVariant.classes[classItemKey];
          }
        }
      }

      if (!clearFixedClasses) {
        if (props.variants !== undefined && props.variants[variant] !== undefined) {
          const propsVariant = props.variants[variant] as WithVariantProps<P>;

          if (propsVariant.fixedClasses && hasProperty(propsVariant.fixedClasses, classItemKey)) {
            fixedClasses[classItemKey] = propsVariant.fixedClasses[classItemKey];
          }
        } else if (globalConfiguration !== undefined && globalConfiguration.variants !== undefined && globalConfiguration.variants[variant] !== undefined) {
          const globalConfigurationVariant = globalConfiguration.variants[variant] as WithVariantProps<P>;

          if (globalConfigurationVariant.fixedClasses && hasProperty(globalConfigurationVariant.fixedClasses, classItemKey)) {
            fixedClasses[classItemKey] = globalConfigurationVariant.fixedClasses[classItemKey];
          }
        } else if (defaultConfiguration !== undefined && defaultConfiguration.variants !== undefined && defaultConfiguration.variants[variant] !== undefined) {
          const defaultConfigurationVariant = defaultConfiguration.variants[variant] as WithVariantProps<P>;

          if (defaultConfigurationVariant.fixedClasses && hasProperty(defaultConfigurationVariant.fixedClasses, classItemKey)) {
            fixedClasses[classItemKey] = defaultConfigurationVariant.fixedClasses[classItemKey];
          }
        }
      }
    }
  });

  const customProps = getCustomPropsFromVariant(variants, variant);

  const mergedProps = {
    ...mainProps,
    ...customProps,
  };

  delete mergedProps.fixedClasses;

  delete mergedProps.classes;

  const mergedClasses: CSSClassesList = {};

  classesListKeys.forEach((classItemKey) => {
    const classesForTheCurrentKey = classes[classItemKey];
    const fixedClassesForTheCurrentKey = fixedClasses[classItemKey];

    mergedClasses[classItemKey as string] = mergeClasses(
      classesForTheCurrentKey,
      fixedClassesForTheCurrentKey,
    );
  });

  const result = pick(mergedClasses);

  if (Object.keys(result).length > 0) {
    (mergedProps as P).classesList = result;
  }

  return mergedProps as P;
};

export default parseVariantWithClassesList;
