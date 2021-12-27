/* Serbian locals for vue-tailwind */
import { CustomDateLocale } from '../../types/Dates';

export const Serbian: CustomDateLocale = {
  weekdays: {
    shorthand: ['Ned', 'Pon', 'Uto', 'Sre', 'Čet', 'Pet', 'Sub'],
    longhand: ['Nedelja', 'Ponedeljak', 'Utorak', 'Sreda', 'Četvrtak', 'Petak', 'Subota'],
  },

  months: {
    shorthand: ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Avg', 'Sep', 'Okt', 'Nov', 'Dec'],
    longhand: [
      'Januar',
      'Februar',
      'Mart',
      'April',
      'Maj',
      'Jun',
      'Jul',
      'Avgust',
      'Septembar',
      'Oktobar',
      'Novembar',
      'Decembar',
    ],
  },

  firstDayOfWeek: 1,
  weekAbbreviation: 'Ned.',
  rangeSeparator: ' do ',
  time24hr: true,
};

export default Serbian;
