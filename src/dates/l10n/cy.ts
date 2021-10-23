/* Welsh locals for vue-tailwind */
import { CustomDateLocale } from '../../types/Dates';

export const Welsh: CustomDateLocale = {
  weekdays: {
    shorthand: ['Sul', 'Llun', 'Maw', 'Mer', 'Iau', 'Gwe', 'Sad'],
    longhand: [
      'Dydd Sul',
      'Dydd Llun',
      'Dydd Mawrth',
      'Dydd Mercher',
      'Dydd Iau',
      'Dydd Gwener',
      'Dydd Sadwrn',
    ],
  },

  months: {
    shorthand: [
      'Ion',
      'Chwef',
      'Maw',
      'Ebr',
      'Mai',
      'Meh',
      'Gorff',
      'Awst',
      'Medi',
      'Hyd',
      'Tach',
      'Rhag',
    ],
    longhand: [
      'Ionawr',
      'Chwefror',
      'Mawrth',
      'Ebrill',
      'Mai',
      'Mehefin',
      'Gorffennaf',
      'Awst',
      'Medi',
      'Hydref',
      'Tachwedd',
      'Rhagfyr',
    ],
  },

  firstDayOfWeek: 1,

  ordinal: (nth) => {
    if (nth === 1) return 'af';

    if (nth === 2) return 'ail';

    if (nth === 3 || nth === 4) return 'ydd';

    if (nth === 5 || nth === 6) return 'ed';

    if (
      (nth >= 7 && nth <= 10)
      || nth === 12
      || nth === 15
      || nth === 18
      || nth === 20
    ) { return 'fed'; }

    if (
      nth === 11
      || nth === 13
      || nth === 14
      || nth === 16
      || nth === 17
      || nth === 19
    ) { return 'eg'; }

    if (nth >= 21 && nth <= 39) return 'ain';

    // Inconclusive.
    return '';
  },
  time24hr: true,
};

export default Welsh;
