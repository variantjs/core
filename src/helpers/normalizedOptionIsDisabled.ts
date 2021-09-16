import { NormalizedOption } from '..';

const normalizedOptionIsDisabled = (option: NormalizedOption): boolean => option.disabled === true || option.disabled === 'disabled';

export default normalizedOptionIsDisabled;
