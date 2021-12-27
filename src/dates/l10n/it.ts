/* Italian locals for vue-tailwind */
import { CustomDateLocale } from '../../types/Dates';

export const Italian: CustomDateLocale = {
  weekdays: {
    shorthand: ['Dom', 'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab'],
    longhand: ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'],
  },

  months: {
    shorthand: ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic'],
    longhand: [
      'Gennaio',
      'Febbraio',
      'Marzo',
      'Aprile',
      'Maggio',
      'Giugno',
      'Luglio',
      'Agosto',
      'Settembre',
      'Ottobre',
      'Novembre',
      'Dicembre',
    ],
  },
  firstDayOfWeek: 1,
  ordinal: () => '°',
  rangeSeparator: ' al ',
  weekAbbreviation: 'Se',
  time24hr: true,
};

export default Italian;
