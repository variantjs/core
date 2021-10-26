const isTouchOnlyDevice = (w: Window = window): boolean => {
  if (typeof w === 'undefined') {
    return false;
  }

  return !!(w.matchMedia && w.matchMedia('(any-hover: none)').matches);
};

export default isTouchOnlyDevice;
