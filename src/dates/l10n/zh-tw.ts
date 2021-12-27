/* Mandarin locals for vue-tailwind */
import { CustomDateLocale } from '../../types/Dates';

export const MandarinTraditional: CustomDateLocale = {
  weekdays: {
    shorthand: ['週日', '週一', '週二', '週三', '週四', '週五', '週六'],
    longhand: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
  },
  months: {
    shorthand: [
      '一月',
      '二月',
      '三月',
      '四月',
      '五月',
      '六月',
      '七月',
      '八月',
      '九月',
      '十月',
      '十一月',
      '十二月',
    ],
    longhand: [
      '一月',
      '二月',
      '三月',
      '四月',
      '五月',
      '六月',
      '七月',
      '八月',
      '九月',
      '十月',
      '十一月',
      '十二月',
    ],
  },
  rangeSeparator: ' 至 ',
  weekAbbreviation: '週',
};

export default MandarinTraditional;
