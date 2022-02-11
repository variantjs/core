import clone from '../helpers/clone';

const getFirstDayOfMonth = (fromDate: Date): Date => {
  const newDate = clone(fromDate);
  newDate.setUTCDate(1);
  return newDate;
};

export default getFirstDayOfMonth;
