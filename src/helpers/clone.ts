// eslint-disable-next-line @typescript-eslint/no-explicit-any
const clone = <P extends any> (obj: P): P => {
  if (obj instanceof Date) {
    return new Date(obj.valueOf()) as P;
  }

  return JSON.parse(JSON.stringify(obj));
};

export default clone;
