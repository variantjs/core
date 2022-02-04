const diffInDays = (date1?: Date, date2?: Date, absolute = false): boolean | number => {
  const MS_PER_DAY = 1000 * 60 * 60 * 24;

  if (!date1 || !date2) {
    return false;
  }

  // Discard the time and time-zone information.
  const utc1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
  const utc2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());

  const diff = Math.floor((utc2 - utc1) / MS_PER_DAY);
  
  if (absolute) {
    return Math.abs(diff);
  }

  return diff;
};

export default diffInDays;
