import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { PageContainer } from "../../styled/PageContainer";

import { getVols } from "../../../ducks/dataReducer";
import {
  updateCampaign,
  getJoinedCampaign
} from "../../../ducks/campaignReducer";

class FullCampaignPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      name: "",
      organization: "",
      orglogo: "",
      description: "",
      type: "",
      scope: "",
      vrGoal: 0,
      commitGoal: 0
    };
  }
  componentDidMount() {
    let { campaign_id } = this.props.joined;
    this.props.getVols(campaign_id);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    console.log(`FullCampaignPage:`, this.props);

    let { volList, contacts } = this.props;
    let campaignMembers = volList.map((member, i) => {
      return (
        <CampaignMember user_id={member.user_id}>
          <img
            className="memberImg"
            src={member.profile_img}
            onError={e => {
              e.target.src =
                "https://discoverthegift.com/wp-content/uploads/2016/03/placeholder.jpg";
            }}
          />
          <div className="memberInfo">
            <p>
              {member.first_name} {member.last_name}
            </p>
            <Link
              style={{ textDecoration: "none" }}
              className="linkToProfile"
              to={`user/${member.user_id}`}
            >
              <button>View Profile</button>
            </Link>
          </div>
          <div className="memberContactInfo">
            {member.phone} {member.email}
          </div>
        </CampaignMember>
      );
    });
    let contactsMap = this.props.contacts.map((e, i) => {
      return (
        <Contact className="contactCard">
          <h2>
            {e.first_name} {e.last_name}
          </h2>
          <p>{e.phone}</p>
          <p>{e.email}</p>
        </Contact>
      );
    });
    let { joined } = this.props;
    return (
      <CampaignPage>
        <div className="campaignUpdateForm">
          <h1 />
          {this.props.joined.role === "Admin" && (
            <button onClick={() => this.setState({ isEditing: true })}>
              Edit
            </button>
          )}
          {this.state.isEditing ? (
            <CampaignForm>
              <div className="imgForm">
                <img
                  className="orglogo"
                  src={this.state.orglogo || this.props.joined.orglogo}
                  onError={e => {
                    e.target.src =
                      "https://discoverthegift.com/wp-content/uploads/2016/03/placeholder.jpg";
                  }}
                />
                <p>Orglogo</p>
                <input
                  name="orglogo"
                  onChange={this.handleChange}
                  value={this.state.orglogo}
                />
              </div>
              <div>
                <p>Campaign Name:</p>
                <input
                  name="name"
                  onChange={this.handleChange}
                  value={this.state.name}
                />
                <p>Organization:</p>
                <input
                  name="organization"
                  onChange={this.handleChange}
                  value={this.state.organization}
                />
                <p>Type</p>
                <select
                  type="select-multiple"
                  name="type"
                  value={this.state.type}
                  onChange={this.handleChange}
                >
                  <option value="Single-Issue">Single-Issue</option>
                  <option value="Candidate">Candidate</option>
                  <option value="Community Organizing">
                    Community Organizing
                  </option>
                  <option value="Ballot">Ballot</option>
                  <option value="Referendem">Referendem</option>
                </select>
                <p>Scope</p>
                <select
                  name="scope"
                  value={this.state.scope}
                  className="scope"
                  onChange={this.handleChange}
                  size="3"
                >
                  <option value="National">National</option>
                  <option value="Statewide">Statewide</option>
                  <option value="Local">Local</option>
                </select>
              </div>
              <div>
                <p>Description</p>

                <textarea
                  name="description"
                  onChange={this.handleChange}
                  value={this.state.description}
                />
                <p>Overall Campaign VR Goal</p>
                <input
                  name="vrGoal"
                  type="number"
                  onChange={this.handleChange}
                  value={this.state.vrGoal}
                />
                <p>Overall Campaign Commit Goal</p>
                <input
                  name="commitGoal"
                  type="number"
                  onChange={this.handleChange}
                  value={this.state.commitGoal}
                />
              </div>
              <div style={{ position: "absolute" }}>
                <button
                  onClick={() =>
                    this.props
                      .updateCampaign(
                        this.props.joined.campaign_id,
                        this.state.name || this.props.joined.name,
                        this.state.organization ||
                          this.props.joined.organization,
                        this.state.orglogo || this.props.joined.orglogo,
                        this.state.description || this.props.joined.description,
                        this.state.type || this.props.joined.type,
                        this.state.scope || this.props.joined.scope,
                        this.state.vrGoal || this.props.joined.vrGoal,
                        this.state.commitGoal || this.props.joined.commitGoal
                      )
                      .then(() =>
                        this.getJoinedCampaign(this.props.user.user_id).then(
                          () => this.setState({ isEditing: false })
                        )
                      )
                  }
                >
                  Update Campaign
                </button>
                <button onClick={() => this.setState({ isEditing: false })}>
                  Cancel
                </button>
              </div>
            </CampaignForm>
          ) : (
            <div className="campaignDescription">
              <h2>{joined.organization}</h2>
              <p>
                {joined.scope} - {joined.type}
              </p>
              <h1>{joined.name}</h1>
              <p>{joined.description}</p>
              <span>
                <h3>Goals:</h3>
                <p>VR: {joined.vrgoal}</p> <p>Commit: {joined.commitgoal}</p>
              </span>
            </div>
          )}
          <div className="campaignStats">
            <div className="contactsContainer">
              <h1>Campaign Contacts:</h1>
              <div className="info">
                {this.props.contacts ? (
                  contactsMap
                ) : (
                  <h1>
                    This campaign has no contacts! Get out there and volunteer!
                  </h1>
                )}
              </div>
            </div>
            <div className="membersContainer">
              <h1>Campaign Members:</h1>
              <div className="info">{campaignMembers}</div>
            </div>
          </div>
        </div>
      </CampaignPage>
    );
  }
}
const mapStateToProps = state => {
  return {
    volList: state.dataReducer.volList,
    joined: state.campaignReducer.joined,
    user: state.userReducer.user
  };
};
export default connect(
  mapStateToProps,
  { getVols, updateCampaign, getJoinedCampaign }
)(FullCampaignPage);

const CampaignMember = styled.div`
  display: flex;
  width: 40vw;
  height: 10vh;
  align-items: center;
  justify-content: space-between;
  margin: none;
  & div.memberContactInfo {
    width: 12vw;
  }
  & img.memberImg {
    height: 80px;
    margin-left: 5vw;
  }
`;
const CampaignForm = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  & div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 33%;
    /* padding:  */
  }
`;
const CampaignPage = styled.div`
  flex-direction: column;
  justify-content: space-between;
  height: 92vh;

  & div.campaignUpdateForm {
    padding-top: 5vh;
    margin-bottom: 10vh;
    height: 45vh;
    justify-content: space-between;

    & img.orglogo {
      padding-top: 5vh 2vw;
      max-width: 30vw;
    }
    & input {
      border: 1px solid grey;
      width: 25vw;
      height: 4vh;
      margin: 0vh 0 0 0;
      text-align: center;
      outline: none;
      border-radius: 4px;
      line-height: 14px;
      font-size: 14px;
    }

    & textarea {
      border: 1px solid grey;
      width: 80vw;
      width: 25vw;
      height: 8vh;
      margin: 1vh 0 0 0;
      text-align: center;
      outline: none;
      border-radius: 4px;
      line-height: 14px;
      font-size: 14px;
    }

    & select {
      border: 1px solid grey;
      width: 25vw;
      height: 4vh;
      margin: 1vh 0 0 0;
      text-align: center;
      outline: none;
      border-radius: 4px;
    }
  }

  & div.campaignDescription {
    width: 100vw;
    height: 45vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 5vhvh 5vw 0 10vw;

    & p {
      max-width: 80%;
    }
    & span {
      display: flex;
      flex-direction: row;
      justify-content: center;
      width: 100%;
    }
  }
  & div.campaignStats {
    height: 40vh;
    width: 100vw;
    display: flex;
    position: fixed;
    bottom: 5vh;
    flex-direction: row-reverse;

    & div.contactsContainer,
    div.membersContainer {
      width: 50vw;
      height: 45vh;
      padding: 0 2.5vw;

      & h1 {
        height: 5vh;
        background: #003459;
        color: white;
        margin: 2vh 0 0 0;
        box-shadow: 0 6px 4px rgba(0, 0, 0, 0.3);
        line-height: 2rem;
        font-size: 2rem;
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
      }
      & div.info {
        /* width: 40vh; */
        height: 35vh;
        overflow-y: scroll;
        border: 1px solid grey;
        border-top: none;

        &:hover {
          box-shadow: 0 6px 4px rgba(0, 0, 0, 0.3);
        }
      }
    }
  }
`;

const Contact = styled.div`
  height: 7vh;
  width: 30vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & p {
    width: 25%;
  }
  & h2 {
    widt: 40%;
  }
`;
