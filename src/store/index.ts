import create from 'zustand';
import { eberron } from './examples/eberron';
export type Month = {
  name: string;
  days: number;
  // This month is applicable if year % mod is 0. otherwise,
  // take the alternate. This isn't quite sufficient for accurate
  // real world dates, but not sure of a better solution without
  // introducing a DSL
  mod?: number;
};

export type State = {
  currentYear: number;
  currentDay: number;
  currentDayOfWeekIndex: number;
  currentMinutes: number;
  dayNames: Array<string>;
  months: Array<Month>;
  yearSuffix: string;
  increase: (by: number) => void;
  setDetails: (state: Partial<State>) => void;
};

export const useStore = create<State>((set, get) => ({
  ...eberron,
  currentDay: 10,
  currentMinutes: 10,
  increase: (by) => {
    console.log('🦄 - by', by);
  },
  setDetails: (details: Partial<State>) => {
    set({
      ...get(),
      ...details,
    });
  },
}));
