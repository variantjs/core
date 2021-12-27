/* Vietnamese locals for vue-tailwind */
import { CustomDateLocale } from '../../types/Dates';

export const Vietnamese: CustomDateLocale = {
  weekdays: {
    shorthand: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
    longhand: ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'],
  },

  months: {
    shorthand: [
      'Th1',
      'Th2',
      'Th3',
      'Th4',
      'Th5',
      'Th6',
      'Th7',
      'Th8',
      'Th9',
      'Th10',
      'Th11',
      'Th12',
    ],
    longhand: [
      'Tháng một',
      'Tháng hai',
      'Tháng ba',
      'Tháng tư',
      'Tháng năm',
      'Tháng sáu',
      'Tháng bảy',
      'Tháng tám',
      'Tháng chín',
      'Tháng mười',
      'Tháng 11',
      'Tháng 12',
    ],
  },

  firstDayOfWeek: 1,
  rangeSeparator: ' đến ',
};

export default Vietnamese;
