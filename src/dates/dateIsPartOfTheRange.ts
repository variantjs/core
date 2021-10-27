import { DateParser, DateValue } from '../types/Dates';
import parseDate from './parseDate';

const dateIsPartOfTheRange = (date: Date, min: DateValue | undefined, max: DateValue | undefined, dateParser: DateParser = parseDate, dateFormat = 'Y-m-d H:i:S'): boolean => {
  const minDate = min === undefined ? undefined : dateParser(min, dateFormat);
  const maxDate = max === undefined ? undefined : dateParser(max, dateFormat);

  const time = date.getTime();

  if (minDate && maxDate) {
    return time >= minDate.getTime() && time <= maxDate.getTime();
  }

  if (minDate) {
    return time >= minDate.getTime();
  }

  if (maxDate) {
    return time <= maxDate.getTime();
  }

  return true;
};

export default dateIsPartOfTheRange;
