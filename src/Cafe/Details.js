import React from "react";
import axios from "axios";
import OpeningHours from "./OpeningHours";
import picture from "../kinfolk.jpg";

class Details extends React.Component {
  state = {
    name: null,
    openingHours: []
  };
  componentDidMount() {
    axios.get(`http://localhost:3000/cafes/${this.props.id}`, response => {
      this.setState({
        name: response.data.name,
        openingHours: response.data.openingHours
      });
    });
  }

  render() {
    const { name, openingHours } = this.state;
    const { dayOfTheWeek } = this.props;
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
