import React from "react";
import axios from "axios";

class OpeningHours extends React.Component {
  state = {
    showAll: false
  };

  days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  toggleShowAll = () => {
    this.setState({ showAll: !this.state.showAll });
  };

  renderAllHours() {
    return (
      <div>
        <ul>
          {this.props.hours.map((hours, i) => (
            <li key={i}>
              {this.days[i]}: {hours}
            </li>
          ))}
        </ul>
        <a onClick={this.toggleShowAll} href="#">
          Show Today's Hours
        </a>
      </div>
    );
  }

  renderTodaysHours() {
    const { hours, dayOfTheWeek } = this.props;
    return (
      <div>
        <ul>
          <li>
            Today ({this.days[dayOfTheWeek]}): {hours[dayOfTheWeek]}
          </li>
        </ul>
        <a onClick={this.toggleShowAll} href="#">
          Show All Hours
        </a>
      </div>
    );
  }

  render() {
    const { hours } = this.props;
    if (this.state.showAll) {
      return this.renderAllHours();
    } else {
      return this.renderTodaysHours();
    }
  }
}

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
