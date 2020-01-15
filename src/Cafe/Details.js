import React from "react";
import axios from "axios";
import OpeningHours from "./OpeningHours";
import picture from "../kinfolk.jpg";

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

        <img src={picture} />
      </div>
    );
  }
}

export default Details;
