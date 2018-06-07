import React, { Component } from "react";
import {
  submitCampaign,
  getAllCampaigns
} from "../../../ducks/campaignReducer";
import styled from "styled-components";
import { connect } from "react-redux";
class CampaignForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      organization: "",
      orglogo: "",
      description: "",
      type: "",
      scope: ""
    };
  }
  submitHandler = e => {
    e.preventDefault();
    this.props
      .submitCampaign(
        this.state.name,
        this.state.organization,
        this.state.orglogo,
        this.state.type,
        this.state.scope,
        this.state.description,
        this.props.user.user_id
      )
      .then(response => {
        this.props.getAllCampaigns;
      })
      .then(response => {
        this.props.createSwitch();
      });
  };
  campaignInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  //multiple select functionality for campaign type. come back if have time.

  // handleMultipleInput = e => {
  //   this.setState({ type: e.target.value });
  // };
  render() {
    console.log(this.state, this.props);
    return (
      <CreateCampaignForm
        className="campaign-form"
        onSubmit={e => this.submitHandler(e)}
      >
        <h1>Create a Campaign</h1>
        <div>
          <img
            src={this.state.orglogo}
            onError={e => {
              e.target.src =
                "https://discoverthegift.com/wp-content/uploads/2016/03/placeholder.jpg";
            }}
          />
        </div>
        <div>
          <p>Campaign Name</p>
          <input
            name="name"
            value={this.state.name}
            placeholder="Your Campaign Name here"
            onChange={this.campaignInput}
          />
          <p>Organization</p>
          <input
            name="organization"
            value={this.state.organization}
            type="text"
            onChange={this.campaignInput}
          />
          <p>Organization Logo</p>
          <input
            name="orglogo"
            value={this.state.orglogo}
            onChange={this.campaignInput}
          />
          <p>Type</p>
          <select
            type="select-multiple"
            name="type"
            value={this.state.type}
            onChange={this.campaignInput}
          >
            <option value="Single-Issue">Single-Issue</option>
            <option value="Candidate">Candidate</option>
            <option value="Community Organizing">Community Organizing</option>
            <option value="Ballot">Ballot</option>
            <option value="Referendem">Referendem</option>
          </select>
          <p>Scope</p>
          <select
            name="scope"
            value={this.state.scope}
            className="scope"
            onChange={this.campaignInput}
            size="3"
          >
            <option value="National">National</option>
            <option value="Statewide">Statewide</option>
            <option value="Local">Local</option>
          </select>
          <p>Description</p>
          <textarea
            name="description"
            value={this.state.description}
            className="description"
            onChange={this.campaignInput}
          />
          <input type="submit" value="Start Your Campaign" />
          <button onClick={this.createSwitch}>Join an Existing Campaign</button>
        </div>
      </CreateCampaignForm>
    );
  }
}
const mapStateToProps = state => {
  return {
    campaignsList: state.campaignReducer.campaignsList,
    user: state.userReducer.user,
    joined: state.campaignReducer.joined
  };
};
export default connect(mapStateToProps, { submitCampaign, getAllCampaigns })(
  CampaignForm
);

const CreateCampaignForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* padding: 1vh 5vw; */
  overflow-y: scroll;

  & div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  & input {
    border: 1px solid grey;
    width: 80vw;
    height: 4vh;
    margin: 0vh 0 0 0;
    text-align: center;
    outline: none;
    border-radius: 4px;
    line-height: 14px;
    font-size: 14px;
  }
& img {
max-height:30vh;
}
  & textarea {
    border: 1px solid grey;
    width: 80vw;
    width: 70%;
    height: 40vh;
    margin: 1vh 0 0 0;
    text-align: center;
    outline: none;
    border-radius: 4px;
    line-height: 14px;
    font-size: 14px;
  }

  & select {
    border: 1px solid grey;
    width: 70%;
    height: 4vh;
    margin: 1vh 0 0 0;
    text-align: center;
    outline: none;
    border-radius: 4px;
  }

  @media only screen and (min-width: 1224px) {
    display: flex;
  flex-direction: row;
    
    justify-content: space-between;
    align-items: center;
    padding: 1vh 5vw;
    overflow-y: scroll;
    & div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  & input {
    border: 1px solid grey;
    width: 40vw;
    height: 4vh;
    margin: 0vh 0 0 0;
    text-align: center;
    outline: none;
    border-radius: 4px;
    line-height: 14px;
    font-size: 14px;
  }
  
  & textarea {
    width: 40vw;
    height: 20vh;
    margin: 1vh 0 0 0;

  }

  & select {
    border: 1px solid grey;
    width: 40vw;
    height: 10vh;
  }
  
`;
