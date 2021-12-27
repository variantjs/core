/* Estonian locals for vue-tailwind */
import { CustomDateLocale } from '../../types/Dates';

export const Estonian: CustomDateLocale = {
  weekdays: {
    shorthand: ['P', 'E', 'T', 'K', 'N', 'R', 'L'],
    longhand: ['Pühapäev', 'Esmaspäev', 'Teisipäev', 'Kolmapäev', 'Neljapäev', 'Reede', 'Laupäev'],
  },

  months: {
    shorthand: [
      'Jaan',
      'Veebr',
      'Märts',
      'Apr',
      'Mai',
      'Juuni',
      'Juuli',
      'Aug',
      'Sept',
      'Okt',
      'Nov',
      'Dets',
    ],
    longhand: [
      'Jaanuar',
      'Veebruar',
      'Märts',
      'Aprill',
      'Mai',
      'Juuni',
      'Juuli',
      'August',
      'September',
      'Oktoober',
      'November',
      'Detsember',
    ],
  },

  firstDayOfWeek: 1,

  ordinal() {
    return '.';
  },

  weekAbbreviation: 'Näd',
  rangeSeparator: ' kuni ',
  time24hr: true,
};

export default Estonian;
