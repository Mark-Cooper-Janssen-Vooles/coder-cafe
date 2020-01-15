import React from "react";

import "./App.css";

import Cafe from "./Cafe/Details";

const openingHours = ["CLOSED", "9-5", "9-5", "9-5", "9-5", "9-5", "CLOSED"];

function App() {
  const today = new Date();

  return (
    <div className="App">
      <Cafe
        name="Kinfolk"
        dayOfTheWeek={today.getDay()}
        openingHours={openingHours}
      />
    </div>
  );
}

export default App;
