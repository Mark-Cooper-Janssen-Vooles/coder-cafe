import React from "react";
import axios from "axios";
import OpeningHours from "./OpeningHours";

class Details extends React.Component {
  render() {
    const { name, openingHours, dayOfTheWeek } = this.props;
    return (
      <div>
        <h2>{name}</h2>

        <OpeningHours
          dayOfTheWeek={this.props.dayOfTheWeek}
          hours={openingHours}
        />
      </div>
    );
  }
}

export default Details;
