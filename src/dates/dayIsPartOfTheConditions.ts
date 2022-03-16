import isSameDay from './isSameDay';

import { DateParser, DateConditions } from '../types/Dates';

const dayIsPartOfTheConditions = (date: Date | null | undefined, condition: DateConditions | undefined, dateParser: DateParser, dateFormat?: string): boolean => {
  if (!date || condition === undefined) {
    return false;
  }

  if (typeof condition === 'function') {
    return condition(date);
  }

  if (Array.isArray(condition)) {
    return condition.some((c) => dayIsPartOfTheConditions(date, c, dateParser, dateFormat));
  }

  if (typeof condition === 'string' || typeof condition === 'number' || condition instanceof String) {
    const disabledDate = dateParser(condition as string, dateFormat);
    return isSameDay(disabledDate, date);
  }

  return isSameDay(condition, date);
};

export default dayIsPartOfTheConditions;
