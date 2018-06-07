import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { PageContainer } from "../../styled/PageContainer";

import { getVols } from "../../../ducks/dataReducer";
import { updateCampaign } from "../../../ducks/campaignReducer";

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

    let { volList } = this.props;
    let campaignMembers = volList.map((member, i) => {
      return (
        <CampaignMember user_id={member.user_id}>
          <img
            src={member.profile_img}
            onError={e => {
              e.target.src =
                "https://discoverthegift.com/wp-content/uploads/2016/03/placeholder.jpg";
            }}
          />
          <Link to={`user/${member.user_id}`}>
            <div>
              {member.first_name} {member.last_name}
            </div>
          </Link>
        </CampaignMember>
      );
    });
    let { joined } = this.props;
    return (
      <PageContainer>
        <div className="campaignDescription">
          {this.props.joined.role === "Admin" && (
            <button onClick={() => this.setState({ isEditing: true })}>
              Edit
            </button>
          )}
          {this.state.isEditing ? (
            <CampaignForm>
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
              <p>Orglogo</p>
              <img
                src={this.state.orglogo || this.props.joined.orglogo}
                onError={e => {
                  e.target.src =
                    "https://discoverthegift.com/wp-content/uploads/2016/03/placeholder.jpg";
                }}
              />
              <input
                name="orglogo"
                onChange={this.handleChange}
                value={this.state.orglogo}
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
              <button
                onClick={() =>
                  this.props.updateCampaign(
                    this.props.joined.campaign_id,
                    this.state.name || this.props.joined.name,
                    this.state.organization || this.props.joined.organization,
                    this.state.orglogo || this.props.joined.orglogo,
                    this.state.description || this.props.joined.description,
                    this.state.type || this.props.joined.type,
                    this.state.scope || this.props.joined.scope,
                    this.state.vrGoal || this.props.joined.vrGoal,
                    this.state.commitGoal || this.props.joined.commitGoal
                  )
                }
              >
                Update Campaign
              </button>
            </CampaignForm>
          ) : (
            <div>
              <h2>{joined.organization}</h2>
              <h1>{joined.name}</h1>
              <p>{joined.description}</p>
            </div>
          )}
          <h1>Campaign Members:</h1>
          {campaignMembers}
        </div>
      </PageContainer>
    );
  }
}
const mapStateToProps = state => {
  return {
    volList: state.dataReducer.volList,
    joined: state.campaignReducer.joined
  };
};
export default connect(
  mapStateToProps,
  { getVols, updateCampaign }
)(FullCampaignPage);

const CampaignMember = styled.div`
  display: flex;
  & img {
    height: 80px;
  }
`;
const CampaignForm = styled.div`
  display: flex;
  flex-direction: column;
`;
