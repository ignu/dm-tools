import { Month } from '../store';
import { daysIn, getTime, monthsForYear } from './dateUtil';

describe('daysIn', () => {
  it('can count the number of days', () => {
    const months: Array<Month> = [
      { name: 'July', days: 31 },
      { name: 'June', days: 30 },
    ];

    expect(daysIn(months)).toEqual(61);
  });
});

describe('monthsInYear', () => {
  it('should return unique month names', () => {
    const months: Array<Month> = [
      { name: 'January', days: 31 },
      { name: 'Feb', days: 28 },
      { name: 'Feb', days: 29, mod: 4 },
    ];

    const uniqueMonths = monthsForYear(months, 2020);
    expect(uniqueMonths.length).toEqual(2);
    expect(uniqueMonths[1].days).toEqual(29);
    expect(monthsForYear(months, 2021)[1].days).toEqual(28);
  });
});

describe('getTime', () => {
  it('returns time', () => {
    expect(getTime(40)).toEqual('0:40');
    expect(getTime(80)).toEqual('1:20');
    expect(getTime(780)).toEqual('13:00');
  });
});
