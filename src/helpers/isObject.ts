const isObject = <T extends Record<string, unknown>, U>(value: T | U): value is T => {
  if (!value) {
    return false;
  }

  if (typeof value !== 'object') {
    return false;
  }

  if (Array.isArray(value)) {
    return false;
  }

  return true;
};

export default isObject;
