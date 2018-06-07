import React, { Component } from "react";
import { Switch, Route, NavLink as Link, withRouter } from "react-router-dom";

import { connect } from "react-redux";

import UserDash from "./UserDash";
import Campaigns from "../Campaigns/Campaigns";
import EventsPage from "../Events/EventsPage";
import Profile from "../Profile/Profile";
import FullEventPage from "../Events/FullEventPage";
import DataPage from "../Data/DataPage";
import ContactsPage from "../Contacts/ContactsPage";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  render() {
    return (
      <Switch>
        <Route path="/contacts" render={() => <ContactsPage />} />
        <Route path="/data" render={() => <DataPage />} />
        <Route
          exact
          path="/events/:event_id"
          render={() => (
            <FullEventPage user={this.props.user} events={this.props.events} />
          )}
        />
        <Route
          path="/events"
          render={() => (
            <EventsPage
              user={this.props.user}
              campaign_id={this.props.joined.campaign_id}
            />
          )}
        />
        <Route exact path="/campaigns" render={() => <Campaigns />} />
        <Route
          exact
          path="/profile"
          render={() => (
            <Profile user={this.props.user} joined={this.props.joined} />
          )}
        />
        <Route
          exact
          path="/"
          render={() => (
            <UserDash user={this.props.user} joined={this.props.joined} />
          )}
        />
      </Switch>
    );
  }
}

const mapStateToProps = state => {
  return {
    joined: state.campaignReducer.joined,
    user: state.userReducer.user,
    events: state.eventsReducer.events
  };
};

export default withRouter(connect(mapStateToProps, {})(Dashboard));
