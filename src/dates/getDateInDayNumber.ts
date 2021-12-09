const getDateInDayNumber = (date: Date, dayNumber: number): Date =>
  new Date(date.getFullYear(), date.getMonth(), dayNumber)

export default getDateInDayNumber
