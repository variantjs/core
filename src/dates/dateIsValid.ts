const dateIsValid = (date?: Date): boolean => {
  if (date === undefined) {
    return true;
  }

  return date.getTime() === date.getTime() && date.getTime() >= 0;
};

export default dateIsValid;
