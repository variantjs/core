/* Bosnian locals for vue-tailwind */
import { CustomDateLocale } from '../../types/Dates';

export const Bosnian: CustomDateLocale = {
  firstDayOfWeek: 1,

  weekdays: {
    shorthand: ['Ned', 'Pon', 'Uto', 'Sri', 'Čet', 'Pet', 'Sub'],
    longhand: ['Nedjelja', 'Ponedjeljak', 'Utorak', 'Srijeda', 'Četvrtak', 'Petak', 'Subota'],
  },

  months: {
    shorthand: ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Avg', 'Sep', 'Okt', 'Nov', 'Dec'],
    longhand: [
      'Januar',
      'Februar',
      'Mart',
      'April',
      'Maj',
      'Juni',
      'Juli',
      'Avgust',
      'Septembar',
      'Oktobar',
      'Novembar',
      'Decembar',
    ],
  },
  time24hr: true,
};

export default Bosnian;
