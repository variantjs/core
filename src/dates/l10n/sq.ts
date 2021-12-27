/* Albanian locals for vue-tailwind */
import { CustomDateLocale } from '../../types/Dates';

export const Albanian: CustomDateLocale = {
  weekdays: {
    shorthand: ['Di', 'Hë', 'Ma', 'Më', 'En', 'Pr', 'Sh'],
    longhand: ['E Diel', 'E Hënë', 'E Martë', 'E Mërkurë', 'E Enjte', 'E Premte', 'E Shtunë'],
  },

  months: {
    shorthand: ['Jan', 'Shk', 'Mar', 'Pri', 'Maj', 'Qer', 'Kor', 'Gus', 'Sht', 'Tet', 'Nën', 'Dhj'],
    longhand: [
      'Janar',
      'Shkurt',
      'Mars',
      'Prill',
      'Maj',
      'Qershor',
      'Korrik',
      'Gusht',
      'Shtator',
      'Tetor',
      'Nëntor',
      'Dhjetor',
    ],
  },
  time24hr: true,
};

export default Albanian;
