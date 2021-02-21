import create from "zustand";
type Month = {
  name: string;
  days: number;
};

type State = {
  currentYear: number;
  currentDay: number;
  currentSeconds: number;
  dayNames: Array<string>;
  months: Array<Month>;
  yearSuffix: string;
  increase: (by: number) => void;
  setDetails: (state: Partial<State>) => void;
};

export const useStore = create<State>((set, get) => ({
  currentYear: 1495,
  currentDay: 10,
  currentSeconds: 10,
  yearSuffix: "DR",
  months: [{ name: "January", days: 31 }],
  dayNames: ["Monday"],
  increase: (by) => {
    console.log("🦄 - by", by);
  },
  setDetails: (details: Partial<State>) => {
    set({
      ...get(),
      ...details,
    });
  },
}));
