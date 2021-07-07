const isTouchDevice = (w: Window = window, n: Navigator = navigator): boolean => (('ontouchstart' in w)
     || (n.maxTouchPoints > 0)
     || (n.msMaxTouchPoints > 0));

export default isTouchDevice;
