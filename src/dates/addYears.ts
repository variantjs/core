import clone from '../helpers/clone';
import getLastDayOfPrevMonth from './getLastDayOfPrevMonth';

const addYears = (date: Date, amount = 1): Date => {
  let newDate = clone(date);

  newDate.setFullYear(date.getFullYear() + amount);

  // Means the new date is is a different month, this happens when the
  // next month has less days than the current month. (29th feb vs 28th feb)
  if (newDate.getDate() !== date.getDate()) {
    // Assign the last day of previous month
    newDate = getLastDayOfPrevMonth(newDate);
  }

  return newDate;
};

export default addYears;
