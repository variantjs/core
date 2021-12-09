const getFirstDayOfMonth = (fromDate: Date): Date =>
  new Date(fromDate.getFullYear(), fromDate.getMonth(), 1)

export default getFirstDayOfMonth
