import formatDate from './formatDate';
import { DateLocale, DateFormatter } from '../types/Dates';

const buildDateFormatter = (locale: DateLocale, customDateFormatter?: DateFormatter): DateFormatter => (date: Date | null | undefined, format = 'Y-m-d H:i:S') => {
  if (customDateFormatter) {
    return customDateFormatter(date, format, locale);
  }

  return formatDate(date, format, locale);
};

export default buildDateFormatter;
