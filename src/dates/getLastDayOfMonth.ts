const getLastDayOfMonth = (fromDate: Date): Date =>
  new Date(fromDate.getFullYear(), fromDate.getMonth() + 1, 0)

export default getLastDayOfMonth
