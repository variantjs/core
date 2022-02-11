import clone from '../helpers/clone';

const getDateInDayNumber = (fromDate: Date, dayNumber: number): Date => {
  const newDate = clone(fromDate);
  newDate.setUTCDate(dayNumber);
  return  newDate;
};

export default getDateInDayNumber;
