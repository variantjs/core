import { Measure } from '../types';

const normalizeMeasure = (measure: Measure): string => {
  if (typeof measure === 'number') {
    return `${measure}px`;
  }

  if (String(Number(measure)) === measure) {
    return `${Number(measure)}px`;
  }

  return measure;
};

export default normalizeMeasure;
