/* Macedonian locals for vue-tailwind */
import { CustomDateLocale } from '../../types/Dates';

export const Macedonian: CustomDateLocale = {
  weekdays: {
    shorthand: ['Не', 'По', 'Вт', 'Ср', 'Че', 'Пе', 'Са'],
    longhand: ['Недела', 'Понеделник', 'Вторник', 'Среда', 'Четврток', 'Петок', 'Сабота'],
  },

  months: {
    shorthand: ['Јан', 'Фев', 'Мар', 'Апр', 'Мај', 'Јун', 'Јул', 'Авг', 'Сеп', 'Окт', 'Ное', 'Дек'],
    longhand: [
      'Јануари',
      'Февруари',
      'Март',
      'Април',
      'Мај',
      'Јуни',
      'Јули',
      'Август',
      'Септември',
      'Октомври',
      'Ноември',
      'Декември',
    ],
  },

  firstDayOfWeek: 1,
  weekAbbreviation: 'Нед.',
  rangeSeparator: ' до ',
  time24hr: true,
};

export default Macedonian;
