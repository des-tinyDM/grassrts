import React, { Component } from "react";
import styled from "styled-components";
import { PageContainer } from "../../styled/PageContainer";
import logo from "../../../logo.png";

const CreateACampaign = styled.form`
  height: inherit;
  width: inherit;
  background: aliceblue;

  & img {
    height: 100px;
    width: 200px;
  }
`;

class CreateCampaign extends Component {
  state = {
    campaignname: "",
    organization: "",
    orglogo: "",
    description: "",
    type: "",
    scope: ""
  };
  userInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleMultipleInput = e => {
this.setState({type:e.target.value})
  }

  render() {
    console.log(this.state);
    return (
      <PageContainer>
        <CreateACampaign onSubmit={this.submitForm}>
          <p>Campaign Name</p>
          <input
            autoFocus
            name="campaignname"
            value={this.state.campaignname}
            onChange={this.userInput}
          />
          <p>Campaign Org</p>
          <input
            name="organization"
            value={this.state.organization}
            onChange={this.userInput}
          />
          <img
            src={this.state.orglogo}
            onError={e => {
              e.target.src =
                "https://discoverthegift.com/wp-content/uploads/2016/03/placeholder.jpg";
            }}
          />
          <p>Campaign Logo</p>
          <input
            name="orglogo"
            value={this.state.orglogo}
            onChange={this.userInput}
          />
          <p>Campaign Description</p>
          <textarea
            name="description"
            value={this.state.description}
            onChange={this.userInput}
          />
          <p>Campaign Type</p>
          <select name="type" onChange={e => this.handleMultipleInput(e)}>
            <option value="Single-Issue">Single-Issue</option>
            <option value="Candidate">Candidate</option>
            <option value="Community Organizing">Community Organizing</option>
            <option value="Ballot Initiative">Ballot</option>
            <option value="Referendem">Referendem</option>
          </select>
          <p>Campaign Scope</p>
          <select
            title="The size of your campaign. Will you be operating on a national, state-wide, or local scale?"
            name="scope"
            size="3"
            onChange={this.userInput}
          >
            <option value="National">National</option>
            <option value="State-wide">State-wide</option>
            <option value="Local">Local</option>
          </select>
        </CreateACampaign>
      </PageContainer>
    );
  }
}

export default CreateCampaign;
