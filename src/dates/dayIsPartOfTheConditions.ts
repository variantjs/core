import isSameDay from './isSameDay';

export type DateValue = Date | string | number;

export type DateCondition = DateValue | ((day: Date) => boolean);

export type DateConditions = DateCondition | DateCondition[];

const dayIsPartOfTheConditions = (day: Date, condition: DateConditions, dateParser: DateParser, dateFormat: string): boolean => {
  if (!day) {
    return false;
  }

  if (typeof condition === 'function') {
    return condition(day);
  }

  if (typeof condition === 'string' || condition instanceof String) {
    const disabledDate = dateParser(condition as string, dateFormat);
    return isSameDay(disabledDate, day);
  }

  if (condition instanceof Date) {
    return isSameDay(condition, day);
  }

  if (Array.isArray(condition)) {
    return condition.some((c) => dayIsPartOfTheConditions(day, c, dateParser, dateFormat));
  }

  return false;
};

export default dayIsPartOfTheConditions;
