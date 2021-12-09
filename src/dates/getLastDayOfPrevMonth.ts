const getLastDayOfPrevMonth = (fromDate: Date): Date =>
  new Date(fromDate.getFullYear(), fromDate.getMonth(), 0)

export default getLastDayOfPrevMonth
