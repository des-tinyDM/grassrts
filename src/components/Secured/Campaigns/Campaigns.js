import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { getAllCampaigns } from "../../../ducks/campaignReducer";
import CampaignCard from "./CampaignCard";
import CreateCampaign from "./CreateCampaign";
import { PageContainer } from "../../styled/PageContainer";
import FullCampaignPage from "./FullCampaignPage";
class Campaigns extends Component {
  constructor() {
    super();
    this.state = { showCreate: false };
  }
  componentDidMount() {
    this.props.getAllCampaigns();
  }
  createSwitch = e => this.setState({ showCreate: !this.state.showCreate });

  render() {
    let campaignList = this.props.campaignsList.map((e, i) => {
      return (
        <CampaignCard
          key={i}
          name={e.name}
          organization={e.organization}
          orglogo={e.orglogo}
          description={e.description}
          campaign_id={e.campaign_id}
          user={this.props.user}
        />
      );
    });
    console.log(`Campaigns >>`, this.props);
    return (
      <PageContainer id="Campaigns">
        <div className="campaignList">
          {!this.props.joined && (
            <button onClick={() => this.createSwitch()}>
              Create A Campaign
            </button>
          )}
          {!this.props.joined &&
            this.state.showCreate && (
              <CreateCampaign
                user={this.props.user}
                createSwitch={this.createSwitch}
              />
            )}
          {!this.props.joined && !this.state.showCreate && campaignList}
        </div>
        <div className="fullCampaign">
          {this.props.joined && (
            <FullCampaignPage
              contacts={this.props.contacts}
              joined={this.props.joined}
            />
          )}
        </div>
      </PageContainer>
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
export default connect(
  mapStateToProps,
  { getAllCampaigns }
)(Campaigns);
