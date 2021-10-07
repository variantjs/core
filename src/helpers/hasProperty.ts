import { Data } from '../types/Misc';

const hasProperty = <X extends Data, Y extends PropertyKey>(obj: X, prop: Y): obj is X & Record<Y, unknown> => Object.prototype.hasOwnProperty.call(obj, prop);

export default hasProperty;
