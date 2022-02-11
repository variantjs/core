const YEAR_ZERO_TIMESTAMP = -62167219200000;
const YEAR_9999_TIMESTAMP = 253402300799999;

const dateIsValid = (date?: Date): boolean => {
  if (date === undefined) {
    return true;
  }

  return date instanceof Date 
    && date.getTime() >= YEAR_ZERO_TIMESTAMP
    && date.getTime() <= YEAR_9999_TIMESTAMP
    && date.getTime() === date.getTime()
    && isFinite(date.getTime());
};

export default dateIsValid;
