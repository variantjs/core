const dateIsValid = (date?: Date): boolean => {
  if (date === undefined) {
    return true;
  }

  return date instanceof Date 
    && date.getTime() === date.getTime()
    && isFinite(date.getTime());
};

export default dateIsValid;
