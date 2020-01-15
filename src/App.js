import React from "react";

import "./App.css";

import Cafe from "./Cafe/Details";

const openingHours = ["CLOSED", "7-2", "7-2", "7-2", "7-2", "7-2", "CLOSED"];

function App() {
  const today = new Date();

  return (
    <div className="App">
      <Cafe id={"kinfolk"} dayOfTheWeek={today.getDay()} />
    </div>
  );
}

export default App;
