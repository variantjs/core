import clone from '../helpers/clone';

const getLastDayOfPrevMonth = (fromDate: Date): Date => {
  const newDate = clone(fromDate);
  newDate.setUTCDate(0);
  return newDate;
};

export default getLastDayOfPrevMonth;
