/* Uzbek locals for vue-tailwind */
import { CustomDateLocale } from '../../types/Dates';

export const UzbekLatin: CustomDateLocale = {
  weekdays: {
    shorthand: ['Ya', 'Du', 'Se', 'Cho', 'Pa', 'Ju', 'Sha'],
    longhand: [
      'Yakshanba',
      'Dushanba',
      'Seshanba',
      'Chorshanba',
      'Payshanba',
      'Juma',
      'Shanba',
    ],
  },
  months: {
    shorthand: [
      'Yan',
      'Fev',
      'Mar',
      'Apr',
      'May',
      'Iyun',
      'Iyul',
      'Avg',
      'Sen',
      'Okt',
      'Noy',
      'Dek',
    ],
    longhand: [
      'Yanvar',
      'Fevral',
      'Mart',
      'Aprel',
      'May',
      'Iyun',
      'Iyul',
      'Avgust',
      'Sentabr',
      'Oktabr',
      'Noyabr',
      'Dekabr',
    ],
  },
  firstDayOfWeek: 1,
  ordinal() {
    return '';
  },
  rangeSeparator: ' — ',
  weekAbbreviation: 'Hafta',
  amPM: ['AM', 'PM'],
  yearAriaLabel: 'Yil',
  time24hr: true,
};

export default UzbekLatin;
