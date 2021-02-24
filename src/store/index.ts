import create from 'zustand';
export type Month = {
  name: string;
  days: number;
  mod?: number;
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
  yearSuffix: 'DR',
  months: [
    { name: 'Hammer', days: 30 },
    { name: 'MidWinter', days: 1 },
    { name: 'Alturiak', days: 30 },
    { name: 'Ches', days: 30 },
    { name: 'Tarsakh', days: 30 },
    { name: 'Greengrass', days: 1 },
    { name: 'Mirtul', days: 30 },
    { name: 'Kythorn', days: 30 },
    { name: 'Flamerule', days: 30 },
    { name: 'Eleasis', days: 30 },
    { name: 'Midsummer', days: 1 },
    { name: 'Shieldmeet', days: 1, mod: 4 },
    { name: 'Eleint', days: 30 },
    { name: 'Highharvesttide', days: 1 },
    { name: 'Marpenoth', days: 30 },
    { name: 'Uktar', days: 30 },
    { name: 'Feast of the Moon', days: 1 },
    { name: 'Nightal', days: 30 },
  ],
  dayNames: [
    'Firstday',
    'Secondday',
    'Thirdday',
    'Fourthday',
    'Fifthday',
    'Sixthday',
    'Seventday',
    'Eightday',
    'Ninthday',
    'Tenthday',
  ],
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
