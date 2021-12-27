/* Bangla locals for vue-tailwind */
import { CustomDateLocale } from '../../types/Dates';

export const Bangla: CustomDateLocale = {
  weekdays: {
    shorthand: ['রবি', 'সোম', 'মঙ্গল', 'বুধ', 'বৃহস্পতি', 'শুক্র', 'শনি'],
    longhand: ['রবিবার', 'সোমবার', 'মঙ্গলবার', 'বুধবার', 'বৃহস্পতিবার', 'শুক্রবার', 'শনিবার'],
  },

  months: {
    shorthand: [
      'জানু',
      'ফেব্রু',
      'মার্চ',
      'এপ্রিল',
      'মে',
      'জুন',
      'জুলাই',
      'আগ',
      'সেপ্টে',
      'অক্টো',
      'নভে',
      'ডিসে',
    ],
    longhand: [
      'জানুয়ারী',
      'ফেব্রুয়ারী',
      'মার্চ',
      'এপ্রিল',
      'মে',
      'জুন',
      'জুলাই',
      'আগস্ট',
      'সেপ্টেম্বর',
      'অক্টোবর',
      'নভেম্বর',
      'ডিসেম্বর',
    ],
  },
};

export default Bangla;
