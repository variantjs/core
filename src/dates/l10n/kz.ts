/* Kazakh locals for vue-tailwind */
import { CustomDateLocale } from '../../types/Dates';

export const Kazakh: CustomDateLocale = {
  weekdays: {
    shorthand: ['Жс', 'Дс', 'Сc', 'Ср', 'Бс', 'Жм', 'Сб'],
    longhand: ['Жексенбi', 'Дүйсенбi', 'Сейсенбi', 'Сәрсенбi', 'Бейсенбi', 'Жұма', 'Сенбi'],
  },
  months: {
    shorthand: ['Қаң', 'Ақп', 'Нау', 'Сәу', 'Мам', 'Мау', 'Шiл', 'Там', 'Қыр', 'Қаз', 'Қар', 'Жел'],
    longhand: [
      'Қаңтар',
      'Ақпан',
      'Наурыз',
      'Сәуiр',
      'Мамыр',
      'Маусым',
      'Шiлде',
      'Тамыз',
      'Қыркүйек',
      'Қазан',
      'Қараша',
      'Желтоқсан',
    ],
  },
  firstDayOfWeek: 1,
  ordinal() {
    return '';
  },
  rangeSeparator: ' — ',
  weekAbbreviation: 'Апта',
  amPM: ['ТД', 'ТК'],
  yearAriaLabel: 'Жыл',
};

export default Kazakh;
