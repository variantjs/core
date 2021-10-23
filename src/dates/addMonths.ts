import clone from '../helpers/clone';
import getLastDayOfPrevMonth from './getLastDayOfPrevMonth';

const addMonths = (date: Date, amount = 1): Date => {
  let newDate = clone(date);
  newDate.setMonth(date.getMonth() + amount);

  // Means the current day has less days so the extra month is
  // in the following month
  if (newDate.getDate() !== date.getDate()) {
    // Assign the last day of previous month
    newDate = getLastDayOfPrevMonth(newDate);
  }

  return newDate;
};

export default addMonths;
