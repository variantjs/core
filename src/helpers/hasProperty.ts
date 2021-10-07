// eslint-disable-next-line @typescript-eslint/no-explicit-any
const hasProperty = <X extends any, Y extends PropertyKey>(obj: X, prop: Y): obj is X & Record<Y, unknown> => Object.prototype.hasOwnProperty.call(obj, prop);

export default hasProperty;
