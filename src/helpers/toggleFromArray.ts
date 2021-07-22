/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import isEqual from './isEqual';

const toggleFromArray = (arr: any, value: any): Array<any> => {
  if (!Array.isArray(arr)) {
    return [value];
  }

  const exists = arr.some((valueInOriginal) => isEqual(valueInOriginal, value));

  if (exists) {
    return arr.filter((valueInOriginal) => !isEqual(valueInOriginal, value));
  }

  return [...arr, value];
};

export default toggleFromArray;
