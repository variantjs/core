/* Turkish locals for vue-tailwind */
import { CustomDateLocale } from '../../types/Dates';

export const Turkish: CustomDateLocale = {
  weekdays: {
    shorthand: ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt'],
    longhand: ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'],
  },

  months: {
    shorthand: ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'],
    longhand: [
      'Ocak',
      'Şubat',
      'Mart',
      'Nisan',
      'Mayıs',
      'Haziran',
      'Temmuz',
      'Ağustos',
      'Eylül',
      'Ekim',
      'Kasım',
      'Aralık',
    ],
  },
  firstDayOfWeek: 1,
  ordinal: () => '.',
  rangeSeparator: ' - ',
  weekAbbreviation: 'Hf',
  amPM: ['ÖÖ', 'ÖS'],
  time24hr: true,
};

export default Turkish;
