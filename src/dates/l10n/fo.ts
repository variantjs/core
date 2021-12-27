/* Faroese locale for flatpickr */
import { CustomDateLocale } from '../../types/Dates';

export const Faroese: CustomDateLocale = {
  weekdays: {
    shorthand: ['Sun', 'Mán', 'Týs', 'Mik', 'Hós', 'Frí', 'Ley'],
    longhand: [
      'Sunnudagur',
      'Mánadagur',
      'Týsdagur',
      'Mikudagur',
      'Hósdagur',
      'Fríggjadagur',
      'Leygardagur',
    ],
  },

  months: {
    shorthand: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Des'],
    longhand: [
      'Januar',
      'Februar',
      'Mars',
      'Apríl',
      'Mai',
      'Juni',
      'Juli',
      'August',
      'Septembur',
      'Oktobur',
      'Novembur',
      'Desembur',
    ],
  },

  ordinal: () => '.',

  firstDayOfWeek: 1,
  rangeSeparator: ' til ',
  weekAbbreviation: 'vika',
  yearAriaLabel: 'Ár',
  time24hr: true,
};

export default Faroese;
