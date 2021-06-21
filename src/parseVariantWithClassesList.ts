import {
  ObjectWithClassesList,
  VariantsWithClassesList,
  WithVariantPropsAndClassesList,
} from './types/Variants';
import get from './helpers/get';
import pick from './helpers/pick';

import mergeClasses from './mergeClasses';
import { CSSClassesList, CSSRawClassesList } from './types';

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

  classesListKeys.forEach((classItemKey) => {
    classes[classItemKey] = get<typeof props, CSSRawClassesList<ClassesKeys>>(
      props,
      `classes.${classItemKey}`,
      get(
        globalConfiguration,
        `classes.${classItemKey}`,
        get(defaultConfiguration, `classes.${classItemKey}`),
      ),
    );

    fixedClasses[classItemKey] = get<typeof props, CSSRawClassesList<ClassesKeys>>(
      props,
      `fixedClasses.${classItemKey}`,
      get(
        globalConfiguration,
        `fixedClasses.${classItemKey}`,
        get(defaultConfiguration, `fixedClasses.${classItemKey}`),
      ),
    );

    if (variant) {
      classes[classItemKey] = get<typeof props, CSSRawClassesList<ClassesKeys>>(
        props,
        `variants.${variant}.classes.${classItemKey}`,
        get(
          globalConfiguration,
          `variants.${variant}.classes.${classItemKey}`,
          get(
            defaultConfiguration,
            `variants.${variant}.classes.${classItemKey}`,
            classes[classItemKey],
          ),
        ),
      );

      fixedClasses[classItemKey] = get<typeof props, CSSRawClassesList<ClassesKeys>>(
        props,
        `variants.${variant}.fixedClasses.${classItemKey}`,
        get(
          globalConfiguration,
          `variants.${variant}.fixedClasses.${classItemKey}`,
          get(
            defaultConfiguration,
            `variants.${variant}.fixedClasses.${classItemKey}`,
            fixedClasses[classItemKey],
          ),
        ),
      );
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
