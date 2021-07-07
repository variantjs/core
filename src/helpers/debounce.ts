/* eslint-disable @typescript-eslint/no-explicit-any */
const debounce = (func: (...args: any[]) => void, wait = 200): (...args: any[]) => void => {
  let timeout: ReturnType<typeof setTimeout> | undefined;

  return (...args: any[]) => {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      timeout = undefined;
      func(args);
    }, wait);

    if (!wait) {
      func(args);
    }
  };
};

export default debounce;
