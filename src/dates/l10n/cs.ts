/* Czech locals for vue-tailwind */
import { CustomDateLocale } from '../../types/Dates';

export const Czech: CustomDateLocale = {
  weekdays: {
    shorthand: ['Ne', 'Po', 'Út', 'St', 'Čt', 'Pá', 'So'],
    longhand: [
      'Neděle',
      'Pondělí',
      'Úterý',
      'Středa',
      'Čtvrtek',
      'Pátek',
      'Sobota',
    ],
  },
  months: {
    shorthand: [
      'Led',
      'Ún',
      'Bře',
      'Dub',
      'Kvě',
      'Čer',
      'Čvc',
      'Srp',
      'Zář',
      'Říj',
      'Lis',
      'Pro',
    ],
    longhand: [
      'Leden',
      'Únor',
      'Březen',
      'Duben',
      'Květen',
      'Červen',
      'Červenec',
      'Srpen',
      'Září',
      'Říjen',
      'Listopad',
      'Prosinec',
    ],
  },
  firstDayOfWeek: 1,
  ordinal() {
    return '.';
  },
  rangeSeparator: ' do ',
  weekAbbreviation: 'Týd.',
  amPM: ['dop.', 'odp.'],
  yearAriaLabel: 'Rok',
  time24hr: true,
};

export default Czech;
