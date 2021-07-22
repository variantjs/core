/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import isEqual from './isEqual';

const toggleFromArray = <P extends Array<any>, K extends Array<any>>(arr: P, value: any): K => {
  if (!Array.isArray(arr)) {
    return [value] as K;
  }

  const exists = arr.some((valueInOriginal) => isEqual(valueInOriginal, value));

  if (exists) {
    return arr.filter((valueInOriginal) => !isEqual(valueInOriginal, value)) as K;
  }

  return [...arr, value] as K;
};

export default toggleFromArray;
