/* Icelandic locale for flatpickr */
import { CustomDateLocale } from '../../types/Dates';

export const Icelandic: CustomDateLocale = {
  weekdays: {
    shorthand: ['Sun', 'Mán', 'Þri', 'Mið', 'Fim', 'Fös', 'Lau'],
    longhand: [
      'Sunnudagur',
      'Mánudagur',
      'Þriðjudagur',
      'Miðvikudagur',
      'Fimmtudagur',
      'Föstudagur',
      'Laugardagur',
    ],
  },

  months: {
    shorthand: ['Jan', 'Feb', 'Mar', 'Apr', 'Maí', 'Jún', 'Júl', 'Ágú', 'Sep', 'Okt', 'Nóv', 'Des'],
    longhand: [
      'Janúar',
      'Febrúar',
      'Mars',
      'Apríl',
      'Maí',
      'Júní',
      'Júlí',
      'Ágúst',
      'September',
      'Október',
      'Nóvember',
      'Desember',
    ],
  },

  ordinal: () => '.',

  firstDayOfWeek: 1,
  rangeSeparator: ' til ',
  weekAbbreviation: 'vika',
  yearAriaLabel: 'Ár',
  time24hr: true,
};

export default Icelandic;
