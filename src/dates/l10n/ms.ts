/* Malaysian locals for vue-tailwind */
import { CustomDateLocale } from '../../types/Dates';

export const Malaysian: CustomDateLocale = {
  weekdays: {
    shorthand: ['Min', 'Isn', 'Sel', 'Rab', 'Kha', 'Jum', 'Sab'],
    longhand: ['Minggu', 'Isnin', 'Selasa', 'Rabu', 'Khamis', 'Jumaat', 'Sabtu'],
  },

  months: {
    shorthand: ['Jan', 'Feb', 'Mac', 'Apr', 'Mei', 'Jun', 'Jul', 'Ogo', 'Sep', 'Okt', 'Nov', 'Dis'],
    longhand: [
      'Januari',
      'Februari',
      'Mac',
      'April',
      'Mei',
      'Jun',
      'Julai',
      'Ogos',
      'September',
      'Oktober',
      'November',
      'Disember',
    ],
  },

  firstDayOfWeek: 1,

  ordinal: () => '',
};

export default Malaysian;
