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
import UserProfile from "../Profile/UserProfile";

import { getContacts } from "../../../ducks/dataReducer";
import { getJoinedCampaign } from "../../../ducks/campaignReducer";
import { getUser } from "../../../ducks/userReducer";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    console.log(`LOOK HERE`, this.props);
    this.props
      .getUser()
      .then(() => this.props.getJoinedCampaign(this.props.user.user_id))
      .then(
        () =>
          this.props.joined &&
          this.props.getContacts(this.props.joined.campaign_id)
      );
  }
  render() {
    return (
      <Switch>
        <Route path="/user/:user_id" render={() => <UserProfile />} />
        <Route
          path="/contacts"
          render={() => <ContactsPage contacts={this.props.contacts} />}
        />
        <Route
          path="/data"
          render={() => <DataPage contacts={this.props.contacts} />}
        />
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
        <Route
          exact
          path="/campaigns"
          render={() => <Campaigns contacts={this.props.contacts} />}
        />
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
    events: state.eventsReducer.events,
    contacts: state.dataReducer.contacts
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { getContacts, getJoinedCampaign, getUser }
  )(Dashboard)
);
