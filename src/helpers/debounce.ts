const debounce = (
  func: (...args: any[]) => void,
  wait = 200,
) => {
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
