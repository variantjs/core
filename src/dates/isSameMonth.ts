const isSameMonth = (date1?: Date, date2?: Date): boolean => {
  if (!date1 || !date2) {
    return false;
  }

  return date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth();
};

export default isSameMonth;
