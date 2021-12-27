import { CSSClasses, CSSClassKeyValuePair } from './types/CSSClass';

export const selectClasses = (classesObject: CSSClassKeyValuePair): CSSClasses => Object.keys(classesObject).filter((className: string) => !!classesObject[className]);

const mergeClasses = (...classes: CSSClasses): string => {
  const mergedClasses = new Set<string>();

  // We use a local function to iterate over the classes so we can pass the
  // currently mergeed classes to functional definitions
  const merge = (...nestedClasses: CSSClasses) => {
    nestedClasses.forEach((className) => {
      if (!className) {
        return;
      }

      if (typeof className === 'boolean') {
        return;
      }

      if (typeof className === 'string') {
        const classNames = className.replace(/  +/g, ' ').trim().split(' ');
        if (classNames.length > 1) {
          merge(...classNames);
        } else {
          mergedClasses.add(classNames[0]);
        }
        return;
      }

      if (Array.isArray(className)) {
        merge(...className);
        return;
      }

      if (typeof className === 'function') {
        className({
          clear() {
            mergedClasses.clear();
          },
          add(...cssClass: string[]) {
            merge(...cssClass);
          },
          remove(cssClass: string) {
            mergedClasses.delete(cssClass);
          },
        });
        return;
      }

      merge(...selectClasses(className));
    });
  };
  merge(...classes);

  return Array.from(mergedClasses).join(' ');
};

export default mergeClasses;
