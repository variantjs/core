/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import isEqual from './isEqual';

const toggle = <P, K = null>(original: P, value: any, defaultValue: K | null = null): P | K => {
  if (isEqual(original, value)) {
    return defaultValue as K;
  }

  return value as P;
};

export default toggle;
