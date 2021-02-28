import React, { useState } from 'react';
import { Calendar, Edit, X } from 'react-feather';
import { Month, useStore } from '../store';

const MonthInput = ({ month }: { month: Month }) => {
  const { months, setDetails } = useStore((x) => ({ months: x.months, setDetails: x.setDetails }));
  const deleteMonth = () => {
    setDetails({ months: months.filter((m) => m.name !== month.name) });
  };
  return (
    <div>
      <label>
        Name:
        <input type="text" value={month.name} />
      </label>
      <label>
        Days:
        <input className="month" type="number" value={month.days} />
      </label>
      <X className="delete-button" onClick={deleteMonth} />
    </div>
  );
};

const DayInput = ({ day }: { day: string }) => {
  // const { days, setDetails } = useStore((x) => ({ months: x.months, setDetails: x.setDetails }));
  const deleteMonth = (x: any) => x;
  return (
    <div>
      <label>
        Name:
        <input type="text" value={day} />
      </label>
      <X className="delete-button" onClick={deleteMonth} />
    </div>
  );
};

const Settings = () => {
  const store = useStore((x) => x);
  const [editDays, seteditDays] = useState(false);
  const [editMonths, seteditMonths] = useState(false);

  const updateYear = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentYear = parseInt(event.target.value);
    store.setDetails({ currentYear });
  };

  return (
    <div>
      <h1>
        Current Year: {store.currentYear} {store.yearSuffix} <Calendar />
      </h1>
      <label>
        Current Year
        <input
          name="currentYear"
          type="number"
          onChange={updateYear}
          value={store.currentYear.toString()}
        />
      </label>

      <h2>
        {store.dayNames.length} Days a week
        <Edit className="edit-button" onClick={() => seteditDays(true)} />
      </h2>

      {editDays && store.dayNames.map((day) => <DayInput key={day} day={day} />)}

      <h2>
        {store.months.length} Months
        <Edit className="edit-button" onClick={() => seteditMonths(true)} />
      </h2>
      {editMonths && store.months.map((month) => <MonthInput key={month.name} month={month} />)}
    </div>
  );
};

export default Settings;
