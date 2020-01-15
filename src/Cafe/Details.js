import React from "react";
import axios from "axios";
import OpeningHours from "./OpeningHours";

class Details extends React.Component {
  state = {
    name: null,
    openingHours: []
  };

  componentDidMount() {
    axios.get("http://localhost:3001/cafes/kinfolk").then(response => {
      this.setState({
        name: response.data.name,
        openingHours: response.data.openingHours
      });
    });
  }

  render() {
    const { name, openingHours } = this.state;
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
