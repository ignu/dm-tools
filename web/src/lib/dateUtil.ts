import { State } from 'zustand';
import { Month } from '../store';

const twoDigit = (num: number) => {
  const numString = `0${num}`;
  return numString.substring(numString.length - 2, numString.length);
};

export const getTime = (minutes: number) => {
  const hours = Math.trunc(minutes / 60);
  const remainderMinutes = minutes % 60;

  return hours + ':' + twoDigit(remainderMinutes);
};

export const dayOfWeek = (state: State) => {
  console.log('🦄 - state', state);
};

export const monthsForYear = (months: Array<Month>, year: number) => {
  const modMonths = months.filter((m) => typeof m.mod !== 'undefined');
  const monthsToRemove = modMonths.map((month) => {
    if (!!(year % (month?.mod || 0))) {
      return month;
    }
    return months.find((m) => m.name === month.name) || month;
  });
  return months.filter((m) => !monthsToRemove.includes(m));
};

const accumulator = (counter: number, month: Month) => {
  return counter + month.days;
};

export const daysIn = (months: Array<Month>) => {
  return months.reduce(accumulator, 0);
};
