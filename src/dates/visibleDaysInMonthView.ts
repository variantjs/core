import { WeekDay } from '../types/Dates';

import getDateInDayNumber from './getDateInDayNumber';
import getFirstDayOfMonth from './getFirstDayOfMonth';
import getFirstDayOfNextMonth from './getFirstDayOfNextMonth';
import getFirstDayOfPrevMonth from './getFirstDayOfPrevMonth';
import getLastDayOfMonth from './getLastDayOfMonth';
import getLastDayOfPrevMonth from './getLastDayOfPrevMonth';

const getNextMonthDays = (
  firstDayOfNextMonth: Date,
  monthDays: Date[],
  prevMonthDays: Date[],
): Date[] => {
  const nextMonthTotalDays = 7 - ((monthDays.length + prevMonthDays.length) % 7);

  if (nextMonthTotalDays === 7) {
    return [];
  }

  return Array.from({ length: nextMonthTotalDays }, (_x, i) => i + 1).map((day) => getDateInDayNumber(firstDayOfNextMonth, day));
};

const getMonthDays = (month: Date, lastDayOfMonth: Date): Date[] => Array.from({ length: lastDayOfMonth.getDate() }, (_x, i) => i + 1).map((day) => getDateInDayNumber(month, day));

const getPreviousMonthDays = (
  month: Date,
  firstDayOfPrevMonth: Date,
  lastDayOfPrevMonth: Date,
  weekstart: WeekDay,
): Date[] => {
  let prevMonthTotalDays = getFirstDayOfMonth(month).getDay() - weekstart;
  if (prevMonthTotalDays < 0) {
    prevMonthTotalDays = 7 + prevMonthTotalDays;
  }

  return Array.from({ length: prevMonthTotalDays }, (_x, i) => lastDayOfPrevMonth.getDate() - i)
    .reverse()
    .map((day) => getDateInDayNumber(firstDayOfPrevMonth, day));
};

const visibleDaysInMonthView = (month: Date, weekstart: WeekDay = WeekDay.Sunday): Date[] => {
  const firstDayOfPrevMonth = getFirstDayOfPrevMonth(month);
  const lastDayOfPrevMonth = getLastDayOfPrevMonth(month);
  const lastDayOfMonth = getLastDayOfMonth(month);
  const firstDayOfNextMonth = getFirstDayOfNextMonth(month);

  const prevMonthDays = getPreviousMonthDays(
    month,
    firstDayOfPrevMonth,
    lastDayOfPrevMonth,
    weekstart,
  );
  const monthDays = getMonthDays(month, lastDayOfMonth);
  const nextMonthDays = getNextMonthDays(firstDayOfNextMonth, monthDays, prevMonthDays);

  return prevMonthDays.concat(monthDays, nextMonthDays);
};

export default visibleDaysInMonthView;
