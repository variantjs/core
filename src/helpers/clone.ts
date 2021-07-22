const clone = <P> (obj: P): P => JSON.parse(JSON.stringify(obj));

export default clone;
