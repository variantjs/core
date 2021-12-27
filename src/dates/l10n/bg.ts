/* Bulgarian locals for vue-tailwind */
import { CustomDateLocale } from '../../types/Dates';

export const Bulgarian: CustomDateLocale = {
  weekdays: {
    shorthand: ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    longhand: ['Неделя', 'Понеделник', 'Вторник', 'Сряда', 'Четвъртък', 'Петък', 'Събота'],
  },

  months: {
    shorthand: [
      'Яну',
      'Фев',
      'Март',
      'Апр',
      'Май',
      'Юни',
      'Юли',
      'Авг',
      'Сеп',
      'Окт',
      'Ное',
      'Дек',
    ],
    longhand: [
      'Януари',
      'Февруари',
      'Март',
      'Април',
      'Май',
      'Юни',
      'Юли',
      'Август',
      'Септември',
      'Октомври',
      'Ноември',
      'Декември',
    ],
  },
  time24hr: true,
  firstDayOfWeek: 1,
};

export default Bulgarian;
