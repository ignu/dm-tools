import { render } from "@testing-library/react";
import { useEffect } from "react";
import { useStore } from "./index";

describe("store", () => {
  it("can set new details", async () => {
    const DateDisplay = () => {
      const store = useStore((x) => x);
      useEffect(() => {
        store.setDetails({ currentYear: 2020 });
      }, []);

      return <div>{store.currentYear}</div>;
    };

    const { findByText } = render(<DateDisplay />);

    await findByText("2020");
  });
});
