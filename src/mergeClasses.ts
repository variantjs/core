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

      if (typeof className === 'string' || typeof className === 'undefined') {
        mergedClasses.add(`${className || ''}`.replace(/  +/g, ' ').trim());
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
          add(cssClass: string) {
            merge(...cssClass.split(' '));
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
