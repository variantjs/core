import isSameDay from './isSameDay';

import { DateParser, DateConditions } from '../types/Dates';

const dayIsPartOfTheConditions = (
  date: Date | null | undefined,
  condition: DateConditions | undefined,
  dateParser: DateParser,
  dateFormat?: string,
): boolean => {
  if (!date) {
    return false;
  }

  if (typeof condition === 'function') {
    return condition(date);
  }

  if (typeof condition === 'string' || condition instanceof String) {
    const disabledDate = dateParser(condition as string, dateFormat);
    return isSameDay(disabledDate, date);
  }

  if (condition instanceof Date) {
    return isSameDay(condition, date);
  }

  if (Array.isArray(condition)) {
    return condition.some((c) => dayIsPartOfTheConditions(date, c, dateParser, dateFormat));
  }

  return false;
};

export default dayIsPartOfTheConditions;
