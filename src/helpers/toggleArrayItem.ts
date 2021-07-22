import isEqual from './isEqual';

const toggleArrayItem = (arr: any, value: any): Array<any> => {
  if (!Array.isArray(arr)) {
    return [value];
  }

  const exists = arr.some((valueInOriginal) => isEqual(valueInOriginal, value));

  if (exists) {
    return arr.filter((valueInOriginal) => !isEqual(valueInOriginal, value));
  }

  return [...arr, value];
};

export default toggleArrayItem;
