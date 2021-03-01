import { State } from 'zustand';
import { Month } from '../store';

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
