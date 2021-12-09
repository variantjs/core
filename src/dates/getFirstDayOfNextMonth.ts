const getFirstDayOfNextMonth = (fromDate: Date): Date => new Date(fromDate.getFullYear(), fromDate.getMonth() + 1, 1);

export default getFirstDayOfNextMonth;
