import React from "react";

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

export default OpeningHours;
