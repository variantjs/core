import parseDate from './parseDate';
import { DateLocale, DateValue, DateParser } from '../types/Dates';

const buildDateParser = (locale: DateLocale, customDateParser?: DateParser): DateParser => (date: DateValue | null | undefined, format = 'Y-m-d H:i:S', timeless?: boolean) => {
  if (customDateParser) {
    return customDateParser(date, format, timeless, locale);
  }

  return parseDate(date, format, timeless, locale);
};

export default buildDateParser;
