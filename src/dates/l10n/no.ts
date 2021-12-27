/* Norwegian locals for vue-tailwind */
import { CustomDateLocale } from '../../types/Dates';

export const Norwegian: CustomDateLocale = {
  weekdays: {
    shorthand: ['Søn', 'Man', 'Tir', 'Ons', 'Tor', 'Fre', 'Lør'],
    longhand: ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag'],
  },

  months: {
    shorthand: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Des'],
    longhand: [
      'Januar',
      'Februar',
      'Mars',
      'April',
      'Mai',
      'Juni',
      'Juli',
      'August',
      'September',
      'Oktober',
      'November',
      'Desember',
    ],
  },

  firstDayOfWeek: 1,
  rangeSeparator: ' til ',
  weekAbbreviation: 'Uke',
  time24hr: true,

  ordinal: () => '.',
};

export default Norwegian;
