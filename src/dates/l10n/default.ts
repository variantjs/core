import { DateLocale } from '../../types/Dates';

export const English: DateLocale = {
  weekdays: {
    shorthand: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    longhand: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  },
  months: {
    shorthand: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    longhand: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
  },
  daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  firstDayOfWeek: 0,
  ordinal: (nth: number) => {
    const s = nth % 100;
    switch (s % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  },
  rangeSeparator: ' to ',
  weekAbbreviation: 'Wk',
  amPM: ['AM', 'PM'],
  yearAriaLabel: 'Year',
  monthAriaLabel: 'Month',
  hourAriaLabel: 'Hour',
  minuteAriaLabel: 'Minute',
  time24hr: false,
  timeLabel: 'Time',
  okLabel: 'Ok',
};

export default English;
