/* Russian locals for vue-tailwind */
import { CustomDateLocale } from '../../types/Dates'

export const Russian: CustomDateLocale = {
  weekdays: {
    shorthand: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    longhand: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
  },
  months: {
    shorthand: [
      'Янв',
      'Фев',
      'Март',
      'Апр',
      'Май',
      'Июнь',
      'Июль',
      'Авг',
      'Сен',
      'Окт',
      'Ноя',
      'Дек',
    ],
    longhand: [
      'Январь',
      'Февраль',
      'Март',
      'Апрель',
      'Май',
      'Июнь',
      'Июль',
      'Август',
      'Сентябрь',
      'Октябрь',
      'Ноябрь',
      'Декабрь',
    ],
  },
  firstDayOfWeek: 1,
  ordinal() {
    return ''
  },
  rangeSeparator: ' — ',
  weekAbbreviation: 'Нед.',
  amPM: ['ДП', 'ПП'],
  yearAriaLabel: 'Год',
  time24hr: true,
}

export default Russian
