import React from "react";
import Details from "../Details";

import { render, fireEvent } from "@testing-library/react";

const name = "Kinfolk";

test("shows the cafe's name", () => {
  const { getByText } = render(<Details name={name} openingHours={[]} />);

  expect(getByText(name)).toBeInTheDocument();
});

test("toggle hours", () => {
  const openingHours = ["CLOSED", "7-2", "7-2", "7-2", "7-2", "7-2", "CLOSED"];
  const today = new Date();

  const { getByText, queryByText } = render(
    <Details dayOfTheWeek={1} name={name} openingHours={openingHours} />
  );

  expect(getByText("Today (Monday): 7-2")).toBeInTheDocument();
  expect(queryByText("Tuesday: 7-2")).toBeNull();

  fireEvent.click(getByText("Show All Hours"));

  expect(getByText("Tuesday: 7-2")).toBeInTheDocument();
  expect(getByText("Wednesday: 7-2")).toBeInTheDocument();
  expect(getByText("Thursday: 7-2")).toBeInTheDocument();

  fireEvent.click(getByText("Show Today's Hours"));

  expect(getByText("Today (Monday): 7-2")).toBeInTheDocument();
  expect(queryByText("Tuesday: 7-2")).toBeNull();
});
