import React from "react";
import { render, screen, fireEvent, wait } from "@testing-library/react";
import Details from "../details";

const cafeName = "Kinfolk";
const openingHours = ["CLOSED", "9-5", "9-5", "9-5", "9-5", "9-5", "CLOSED"];

test("shows today's opening hours by default", async () => {
  const { getByText } = render(
    <Details dayOfTheWeek={1} name={cafeName} openingHours={openingHours} />
  );

  expect(screen.getByText("Today (Monday): 9-5")).toBeInTheDocument();
});

test("can toggle between all hours and just today's", async () => {
  const { getByText } = render(
    <Details dayOfTheWeek={1} name={cafeName} openingHours={openingHours} />
  );

  expect(screen.getByText("Today (Monday): 9-5")).toBeInTheDocument();

  expect(screen.queryByText("Tuesday: 9-5")).toBeNull();

  fireEvent.click(getByText("Show All Hours"));

  expect(screen.getByText("Tuesday: 9-5")).toBeInTheDocument();

  fireEvent.click(getByText("Show Today's Hours"));

  expect(screen.queryByText("Tuesday: 9-5")).toBeNull();
});
