/* German locals for vue-tailwind */
import { CustomDateLocale } from '../../types/Dates';

export const German: CustomDateLocale = {
  weekdays: {
    shorthand: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
    longhand: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
  },

  months: {
    shorthand: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
    longhand: [
      'Januar',
      'Februar',
      'März',
      'April',
      'Mai',
      'Juni',
      'Juli',
      'August',
      'September',
      'Oktober',
      'November',
      'Dezember',
    ],
  },

  firstDayOfWeek: 1,
  weekAbbreviation: 'KW',
  rangeSeparator: ' bis ',
  time24hr: true,
};

export default German;
