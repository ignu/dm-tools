import { useState } from "react";
import { useForm } from "react-use-form-control";
import { useStore } from "../store";

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
      <h1>{store.currentYear}</h1>
      <label>
        Current Year
        <input
          name="currentYear"
          type="number"
          onChange={updateYear}
          value={state.currentYear.toString()}
        />
      </label>

      <button onClick={updateStore}>Apply</button>
    </div>
  );
};

export default Settings;
