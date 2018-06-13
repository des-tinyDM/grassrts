import React, { Component } from "react";
import { connect } from "react-redux";

class CreateEvent extends Component {
  state = {
    name: "",
    date: "",
    start: "",
    end: "",
    description: "",
    location: "",
    address: "",
    city: "",
    stateName: "",
    zip: "",
    type: "",
    vrGoal: "",
    commitGoal: ""
  };

  onEventUpdate = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <h1> List a new event</h1>
        <p>Name</p>
        <input />
        <p>Date</p>
        <input />
        <p>Start</p>
        <input />
        <p>End</p>
        <input />
        <p>Description</p>
        <textarea />
        <p>Address</p>
        <input />
        <p>City</p>
        <input />
        <p>State</p>
        <input />
        <p>Zip</p>
        <input />
        <p>Type</p>
        <select>
          <option>Canvass</option>
          <option>Phonebank</option>
          <option>Canvass</option>
          <option>Door-to-door</option>
          <option>Rally</option>
          <option>Protest</option>
          <option>Community Meeting</option>
        </select>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    joined: state.campaignReducer.joined,
    events: state.eventsReducer.events,
    user: state.userReducer.user
  };
};
export default connect(
  mapStateToProps,
  { createEvent }
)(CreateEvent);
