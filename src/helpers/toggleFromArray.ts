/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import isEqual from './isEqual';

const toggleFromArray = <P extends Array<any>>(arr: any, value: any): P => {
  if (!Array.isArray(arr)) {
    return [value] as P;
  }

  const exists = arr.some((valueInOriginal) => isEqual(valueInOriginal, value));

  if (exists) {
    return arr.filter((valueInOriginal) => !isEqual(valueInOriginal, value)) as P;
  }

  return [...arr, value] as P;
};

export default toggleFromArray;
