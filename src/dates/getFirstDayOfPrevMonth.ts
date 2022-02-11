import clone from '../helpers/clone';

const getFirstDayOfPrevMonth = (fromDate: Date): Date => {
  const newDate = clone(fromDate);
  newDate.setUTCDate(0);
  newDate.setUTCDate(1);
  return newDate;
};

export default getFirstDayOfPrevMonth;
