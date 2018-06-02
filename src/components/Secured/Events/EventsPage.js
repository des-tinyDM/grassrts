import React, { Component } from "react";
import { connect } from "react-redux";

import { EventCard } from "./Events";
import { getEvents } from "../../../ducks/eventsReducer";

class EventsPage extends Component {
  constructor(props) {
    super(props);
    this.state = { scheduled: false, completed: false };
  }
  componentDidMount = () => {
    this.props.getEvents(
      this.props.campaign_id,
      this.state.scheduled,
      this.state.completed,
      this.props.user.user_id
    );
  };
  toggleCheckbox(name, event) {
    let obj = {};
    obj[name] = !this.state[name];
    this.setState(obj, () =>
      this.props.getEvents(
        this.props.campaign_id,
        this.state.scheduled,
        this.state.completed,
        this.props.user.user_id
      )
    );
  }
  render() {
    let { events } = this.props;

    let eventArr = events.map((e, i) => {
      return (
        <EventCard
          key={i}
          event_name={e.event_name}
          start={e.starttime}
          event_id={e.event_id}
        />
      );
    });
    console.log(`Events Page:`, this.props, this.state);
    return (
      <div>
        <span>Scheduled Events</span>
        <input
          name="scheduled"
          type="checkbox"
          defaultChecked={this.state.scheduled}
          value={this.state.scheduled}
          onChange={this.toggleCheckbox.bind(this, "scheduled")}
        />
        <span>Completed</span>
        <input
          name="completed"
          type="checkbox"
          defaultChecked={this.state.completed}
          value={this.state.completed}
          onChange={this.toggleCheckbox.bind(this, "completed")}
        />
        {events[0] && eventArr}
        {!events[0] &&
          this.state.scheduled &&
          !this.state.completed && (
            <h1>You haven't signed up for any event!</h1>
          )}
        {!events[0] &&
          this.state.scheduled &&
          this.state.completed && (
            <h1>
              You haven't volunteered before! Sign up for your first shift!
            </h1>
          )}
        {!events[0] &&
          !this.state.scheduled &&
          this.state.completed && (
            <h1>You haven't signed up for any event! Sign up for </h1>
          )}
        {!events[0] &&
          !this.state.scheduled &&
          !this.state.completed && (
            <h1>You've never volunteered! Sign up for your first event!</h1>
          )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    events: state.eventsReducer.events
  };
};

export default connect(mapStateToProps, { getEvents })(EventsPage);
