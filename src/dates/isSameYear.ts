const isSameYear = (date1?: Date, date2?: Date): boolean => {
  if (!date1 || !date2) {
    return false;
  }

  return date1.getFullYear() === date2.getFullYear();
};

export default isSameYear;
