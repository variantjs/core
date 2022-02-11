import clone from '../helpers/clone';

const getFirstDayOfNextMonth = (fromDate: Date): Date => {
  const newDate = clone(fromDate);
  newDate.setMonth(fromDate.getMonth() + 1);
  // Means that adding a month added another extra month
  // (e.g. from 31 Jan to 31 Feb means that the new date is 1 Mar)
  // if that is the case setting the date to 0 decreases one month
  if (newDate.getMonth() > fromDate.getMonth() + 1) { 
    newDate.setUTCDate(0);  
  }

  newDate.setUTCDate(1);
  return newDate;  
};

export default getFirstDayOfNextMonth;
