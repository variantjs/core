import clone from '../helpers/clone';

const addDays = (date: Date, amount = 1): Date => {
  const result = clone(date);
  result.setDate(result.getDate() + amount);
  return result;
};

export default addDays;
