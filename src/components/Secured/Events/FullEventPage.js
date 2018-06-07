import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import moment from "moment";
import styled from "styled-components";
import axios from "axios";
import { connect } from "react-redux";
import { getVols } from "../../../ducks/dataReducer";
import mapImage from "./mapImage.png";

const FullEvent = styled.div`
width:100vw;
  padding: 0 0vw;
  display: flex;
  overflow-x:hidden;
  display:flex;

  @media only screen  and (min-width : 1224px) {
    /* position: absolute; */
    width: 100vw;
    margin:0 0vw;
    height: 92vh;
    display:flex;
    justify-content:space-between
`;

const SideEvent = styled.div`
  @media only screen and (min-width: 1224px) {
    width: 35vw;
    border-right: 1px solid black;
    height: 92vh;
    & div {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    & div h1 {
      background: #003459;
      color: white;
      height: 10vh;
      margin: 2vh 0;
      box-shadow: 0 6px 4px rgba(0, 0, 0, 0.3);
      line-height: 2rem;
      font-size: 2rem;
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
    }
    & :first-child {
      margin-top: 0;
    }
    & div h3 {
      margin-bottom: 2vh;
    }
    & div.volunteerBox {
      display: flex;
      flex-direction: column;
      width: 35vw;

      & div.VolListMap {
        width: 35vw;
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
        padding: 0 5vw;
        margin: 1vh 0;
      }
    }

    img {
      max-height: 50px;
    }
  }
`;
const MainEvent = styled.div`
  @media only screen and (min-width: 1224px) {
    width: 65vw;
    height: 92vh;

    & h2 {
      margin: 5vh auto 5vh 5vw;
      font-size: 2rem;
      width: 100%;
    }
    & h1 {
      font-size: 4rem;
      margin-left: 5vw;
      width: 100%;
    }
    & p.eventDescription {
      /* margin: 5vh 5vw; */
      height: 15vh;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 5vw;
    }
  }
`;
const LocationContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 45vh;

  & h2 {
    margin: 1vh auto 3vh 5vw;
  }

  & p {
    margin: 0 5vw;
  }
  & div.Location {
    height: 40vh;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
  }
  & div.MapContainer {
    border: 1px solid grey;
    background-image: url(mapImage);
    position: absolute;
    right: 10vw;
    bottom: 5vh;
    height: 400px;
    width: 450px;
  }
`;

class FullEventPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    let index = this.props.events.findIndex(
      event => event.event_id == this.props.match.params.event_id
    );
    let event = this.props.events[index];
    console.log(`component did mount`, event);

    this.props.getVols(parseInt(event.campaign_id), parseInt(event.event_id));
  }
  render() {
    console.log(this.props);
    let index = this.props.events.findIndex(
      event => event.event_id == this.props.match.params.event_id
    );
    let event = this.props.events[index];
    console.log(event);

    let volList = this.props.volList.map((e, i) => {
      return (
        <div key={i} className="VolListMap">
          <img src={e.profile_img} />
          <h2>
            {e.first_name} {e.last_name}
          </h2>
        </div>
      );
    });
    return (
      <FullEvent>
        <SideEvent>
          <div className="TimeBox">
            <h1>Date</h1>
            <h2>
              {moment(event.starttime, moment.ISO_8601).format(`dddd, MMM Do`)}
            </h2>
            <h3>
              {moment(event.starttime, moment.ISO_8601).format(`LT`)}-{moment(
                event.endtime,
                moment.ISO_8601
              ).format(`LT`)}
            </h3>
          </div>
          <div className="volunteerBox">
            <h1>Scheduled Volunteers</h1>
            {volList}
          </div>
        </SideEvent>
        <MainEvent>
          <h2 className="">{event.type}</h2>
          <h1>{event.event_name}</h1>
          <p className="eventDescription">{event.description}</p>
          <LocationContainer>
            <h2>Location</h2>
            <div className="Location">
              <p>{event.location}</p>
              <p>{event.address}</p>
              <p>
                {event.city}, {event.state} {event.zip}
              </p>
            </div>
            <div className="MapContainer" />
          </LocationContainer>
        </MainEvent>
      </FullEvent>
    );
  }
}

const mapStateToProps = state => {
  return {
    volList: state.dataReducer.volList
  };
};

export default withRouter(connect(mapStateToProps, { getVols })(FullEventPage));
