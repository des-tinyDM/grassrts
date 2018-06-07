import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";
import moment from "moment";

import { getVolProfile, getUserChart } from "../../../ducks/dataReducer";
import { getPastEvents, getFutureEvents } from "../../../ducks/eventsReducer";
import { addNote, getNotes } from "../../../ducks/userReducer";

import Note from "./Note";

getPastEvents;

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props
      .getVolProfile(
        this.props.match.params.user_id,
        this.props.joined.campaign_id
      )
      .then(() => this.props.getNotes(this.props.match.params.user_id))
      .then(() =>
        this.props.getPastEvents(
          this.props.joined.campaign_id,
          this.props.match.params.user_id
        )
      )
      .then(() => {
        this.props.getFutureEvents(
          this.props.joined.campaign_id,
          this.props.match.params.user_id
        );
      })
      .then(this.props.getUserChart(this.props.match.params.user_id));
  }
  render() {
    console.log(`from UserProfile:`, this.props);
    let { volProfile, pastEvents, futureEvents, userChart } = this.props;

    const sortedObj = userChart.reduce((acc, cur) => {
      if (acc[cur.event_id]) {
        acc[cur.event_id].push(cur);
        return acc;
      }
      acc[cur.event_id] = [cur];
      return acc;
    }, {});

    console.log(sortedObj);

    const sortedList = Object.keys(sortedObj).map(key => {
      return sortedObj[key];
    });
    console.log(sortedList);

    let past = sortedList.map((event, i) => {
      console.log(`events:`, event);
      return (
        <div key={i}>
          <h3>{event[0].event_name}</h3>
          <h4>
            {moment(event[0].starttime, moment.ISO_8601).format(`dddd, MMM Do`)}
          </h4>
          <p>
            {event.map((e, index) => {
              return (
                <p key={index}>
                  {e.outcome}: {e.count}
                </p>
              );
            })}
          </p>
          {this.props.joined.role === "Admin" && (
            <Note
              userid={this.props.user.user_id}
              volunteerid={this.props.match.params.user_id}
              eventid={event[0].event_id}
              addNote={this.props.addNote}
            />
          )}
        </div>
      );
    });
    let future = futureEvents.map((event, i) => {
      return (
        <div key={i}>
          <h3>{event.event_name}</h3>
          <h4>
            {moment(event.starttime, moment.ISO_8601).format(`dddd, MMM Do`)}
          </h4>
          {this.props.joined.role === "Admin" && (
            <Note event_id={event.event_id} />
          )}
        </div>
      );
    });

    let notes = this.props.notes.map((note, i) => {
      return (
        <div key={i}>
          <h3>{note.event_name}</h3>
          <h4>
            {moment(note.starttime, moment.ISO_8601).format(`dddd, MMM Do`)}
          </h4>
          <p>{note.note}</p>
          <p>-{note.writtenby_name}</p>
          <button onClick={() => console.log(`deleting ${note.id}`)}>
            Delete Note
          </button>
        </div>
      );
    });
    return (
      <div>
        <ProfileHeader>
          <img
            src={volProfile.profile_img}
            onError={e => {
              e.target.src =
                "https://discoverthegift.com/wp-content/uploads/2016/03/placeholder.jpg";
            }}
          />
          />
          <h1>
            {this.props.volProfile.first_name} {this.props.volProfile.last_name}
          </h1>
        </ProfileHeader>

        <ProfileContainer>
          <div className="infoContainer">
            <ContactContainer>
              <h1>Contact Information:</h1>
              <p>{this.props.volProfile.address}</p>
              <p>
                {this.props.volProfile.city}, {this.props.volProfile.state}{" "}
                {this.props.volProfile.zip}
              </p>
              <br />
              <p>{this.props.volProfile.email}</p>
              <p>{this.props.volProfile.phone}</p>
            </ContactContainer>
            <BioContainer>
              <h1>Profile:</h1>
              <p>Interests: {this.props.volProfile.interests}</p>
              <br />
              <p>Biography: {this.props.volProfile.bio}</p>
            </BioContainer>
          </div>
          <div className="notesContainer">
            <h1>Notes:</h1>
            {notes}
          </div>
          <div className="eventContainer">
            <div>
              <h1>Past Events:</h1>
              {past}
            </div>
            <div>
              <h1>Scheduled For:</h1>
              {future}
            </div>
          </div>
        </ProfileContainer>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    volProfile: state.dataReducer.volProfile,
    joined: state.campaignReducer.joined,
    user: state.userReducer.user,
    pastEvents: state.eventsReducer.pastEvents,
    futureEvents: state.eventsReducer.futureEvents,
    userChart: state.dataReducer.userChart,
    notes: state.userReducer.notes
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    {
      getVolProfile,
      getPastEvents,
      getFutureEvents,
      getUserChart,
      addNote,
      getNotes
    }
  )(UserProfile)
);

const ContactContainer = styled.div`
  /* padding-bottom: 10vh; */
  background: #fdfdfd;
  color: black;
  width: 30vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 38vh;

  & h1 {
    margin-top: 20vh;
    margin-bottom: 1vh;
  }
`;
const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  position: absolute;
  top: 10vh;
  left: 0;
  width: 100vw;
  & .infoContainer {
    position: fixed;
    left: 5vw;
    display: flex;
    flex-direction: column;
    width: 30vw;
  }
  & div.eventContainer {
    position: fixed;
    width: 30vw;
    height: 60vh;
    right: 0vw;
    top: 35vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: fixed;
    justify-content: space-evenly;
  }
  & .notesContainer {
    position: relative;
    top: 30vh;
    left: 0vw;
    right: 0vw;
    width: 30vw;
    height: 50vh;
    flex-direction: column;
    align-items: center;
    text-align: center;
    overflow-y: scroll;
  }
`;

const BioContainer = styled.div`
  background: #fdfdfd;
  color: black;
  width: 30vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* height: 38vh; */
`;

const ProfileHeader = styled.div`
  /* padding: 5vh 5vw; */

  background: #003459;
  width: 100vw;
  position: fixed;
  left: 0;
  top: 7vh;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  height: 23vh;
  z-index: 5;

  & div {
    /* position: absolute; */
    /* width: 55vw; */
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  & img {
    height: 25vh;
    border-radius: 50%;
    position: absolute;
    top: 10vh;
    z-index: 1000;
    border: 2px solid white;
    box-shadow: 0 6px 4px rgba(0, 0, 0, 0.3);
    /* left: 15vw; */
  }

  & h1 {
    margin-top: 3vh;
    align-self: flex-start;
    color: #fdfdfd;
    font-size: 2em;
    width: 100vw;
    text-align: center;
  }

  & p {
    color: #212121;
  }
`;
