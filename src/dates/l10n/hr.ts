/* Croatian locals for vue-tailwind */
import { CustomDateLocale } from '../../types/Dates';

export const Croatian: CustomDateLocale = {
  firstDayOfWeek: 1,

  weekdays: {
    shorthand: ['Ned', 'Pon', 'Uto', 'Sri', 'Čet', 'Pet', 'Sub'],
    longhand: [
      'Nedjelja',
      'Ponedjeljak',
      'Utorak',
      'Srijeda',
      'Četvrtak',
      'Petak',
      'Subota',
    ],
  },

  months: {
    shorthand: [
      'Sij',
      'Velj',
      'Ožu',
      'Tra',
      'Svi',
      'Lip',
      'Srp',
      'Kol',
      'Ruj',
      'Lis',
      'Stu',
      'Pro',
    ],
    longhand: [
      'Siječanj',
      'Veljača',
      'Ožujak',
      'Travanj',
      'Svibanj',
      'Lipanj',
      'Srpanj',
      'Kolovoz',
      'Rujan',
      'Listopad',
      'Studeni',
      'Prosinac',
    ],
  },
  time24hr: true,
};

export default Croatian;
