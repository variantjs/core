const isTouchOnlyDevice = (w: Window = window): boolean => !!(w.matchMedia && w.matchMedia('(any-hover: none)').matches);

export default isTouchOnlyDevice;
