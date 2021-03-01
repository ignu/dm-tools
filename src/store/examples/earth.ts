const earth = {
  currentYear: 2021,
  yearSuffix: 'AD',
  months: [
    { name: 'January', days: 31 },
    { name: 'February', days: 28 },
    { name: 'February', days: 29, mod: 4 },
    { name: 'March', days: 31 },
    { name: 'April', days: 30 },
    { name: 'May', days: 31 },
    { name: 'June', days: 30 },
    { name: 'July', days: 31 },
    { name: 'August', days: 31 },
    { name: 'September', days: 30 },
    { name: 'October', days: 31 },
    { name: 'November', days: 30 },
    { name: 'December', days: 31 },
  ],
  dayNames: ['Sunday', 'Monday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
};

export default earth;
