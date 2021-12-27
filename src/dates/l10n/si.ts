/* Sinhala locals for vue-tailwind */
import { CustomDateLocale } from '../../types/Dates';

export const Sinhala: CustomDateLocale = {
  weekdays: {
    shorthand: ['ඉ', 'ස', 'අ', 'බ', 'බ්‍ර', 'සි', 'සෙ'],
    longhand: ['ඉරිදා', 'සඳුදා', 'අඟහරුවාදා', 'බදාදා', 'බ්‍රහස්පතින්දා', 'සිකුරාදා', 'සෙනසුරාදා'],
  },

  months: {
    shorthand: [
      'ජන',
      'පෙබ',
      'මාර්',
      'අප්‍රේ',
      'මැයි',
      'ජුනි',
      'ජූලි',
      'අගෝ',
      'සැප්',
      'ඔක්',
      'නොවැ',
      'දෙසැ',
    ],
    longhand: [
      'ජනවාරි',
      'පෙබරවාරි',
      'මාර්තු',
      'අප්‍රේල්',
      'මැයි',
      'ජුනි',
      'ජූලි',
      'අගෝස්තු',
      'සැප්තැම්බර්',
      'ඔක්තෝබර්',
      'නොවැම්බර්',
      'දෙසැම්බර්',
    ],
  },
  time24hr: true,
};

export default Sinhala;
