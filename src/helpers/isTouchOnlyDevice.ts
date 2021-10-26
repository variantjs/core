const isTouchOnlyDevice = (w?: Window | undefined): boolean => {
  if (typeof w === 'undefined') {
    if (typeof window === 'undefined') {
      return false;
    }

    w = window;
  }

  return !!(w.matchMedia && w.matchMedia('(any-hover: none)').matches);
};

export default isTouchOnlyDevice;
