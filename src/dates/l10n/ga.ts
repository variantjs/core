/* Gaelic Irish locale for flatpickr */
import { CustomDateLocale } from '../../types/Dates';

export const Irish: CustomDateLocale = {
  firstDayOfWeek: 1,

  weekdays: {
    shorthand: ['Dom', 'Lua', 'Mái', 'Céa', 'Déa', 'Aoi', 'Sat'],
    longhand: [
      'Dé Domhnaigh',
      'Dé Luain',
      'Dé Máirt',
      'Dé Céadaoin',
      'Déardaoin',
      'Dé hAoine',
      'Dé Sathairn',
    ],
  },

  months: {
    shorthand: ['Ean', 'Fea', 'Már', 'Aib', 'Bea', 'Mei', 'Iúi', 'Lún', 'MFo', 'DFo', 'Sam', 'Nol'],
    longhand: [
      'Eanáir',
      'Feabhra',
      'Márta',
      'Aibreán',
      'Bealtaine',
      'Meitheamh',
      'Iúil',
      'Lúnasa',
      'Meán Fómhair',
      'Deireadh Fómhair',
      'Samhain',
      'Nollaig',
    ],
  },
  time24hr: true,
};

export default Irish;
