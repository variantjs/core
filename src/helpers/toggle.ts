/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import isEqual from './isEqual';

const toggle = (original: any, value: any, defaultValue: any = null): Array<any> => {
  if (isEqual(original, value)) {
    return defaultValue;
  }

  return value;
};

export default toggle;
