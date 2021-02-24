import { useState } from 'react';
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
      <button onClick={deleteMonth}>❌</button>
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
      <button onClick={deleteMonth}>❌</button>
    </div>
  );
};

const Settings = () => {
  const store = useStore((x) => x);
  const [state, setState] = useState({
    currentYear: store.currentYear,
  });

  const updateYear = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentYear = parseInt(event.target.value);
    setState({ currentYear });
  };

  const updateStore = () => {
    store.setDetails(state);
  };

  return (
    <div>
      <h1>
        Current Year: {store.currentYear} {store.yearSuffix}
      </h1>
      <label>
        Current Year
        <input
          name="currentYear"
          type="number"
          onChange={updateYear}
          value={state.currentYear.toString()}
        />
      </label>

      <h2>Days</h2>
      {store.dayNames.map((day) => (
        <DayInput key={day} day={day} />
      ))}

      <h2>Months</h2>
      {store.months.map((month) => (
        <MonthInput key={month.name} month={month} />
      ))}

      <button onClick={updateStore}>Apply</button>
    </div>
  );
};

export default Settings;
