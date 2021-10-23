import isSameDay from './isSameDay';

const isToday = (date: Date) : boolean => isSameDay(date, new Date());

export default isToday;
