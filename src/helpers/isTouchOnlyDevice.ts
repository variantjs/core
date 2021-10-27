
const isTouchOnlyDevice = (w?: Window): boolean => {
  if (w === undefined) {
    return false;
  }

  return !!(w.matchMedia && w.matchMedia('(any-hover: none)').matches);
};

export default isTouchOnlyDevice;
