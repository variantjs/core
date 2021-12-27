/* Ukrainian locals for vue-tailwind */
import { CustomDateLocale } from '../../types/Dates';

export const Ukrainian: CustomDateLocale = {
  firstDayOfWeek: 1,

  weekdays: {
    shorthand: ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    longhand: ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', "П'ятниця", 'Субота'],
  },

  months: {
    shorthand: ['Січ', 'Лют', 'Бер', 'Кві', 'Тра', 'Чер', 'Лип', 'Сер', 'Вер', 'Жов', 'Лис', 'Гру'],
    longhand: [
      'Січень',
      'Лютий',
      'Березень',
      'Квітень',
      'Травень',
      'Червень',
      'Липень',
      'Серпень',
      'Вересень',
      'Жовтень',
      'Листопад',
      'Грудень',
    ],
  },
  time24hr: true,
};

export default Ukrainian;
