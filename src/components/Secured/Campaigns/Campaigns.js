import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { getAllCampaigns } from "../../../ducks/campaignReducer";
import CampaignCard from "./CampaignCard";
import CreateCampaign from "./CreateCampaign";
import { PageContainer } from "../../styled/PageContainer";
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
        />
      );
    });
    console.log(`Campaigns >>`, this.props);
    return (
      <PageContainer>
        <div>
          <button onClick={() => this.createSwitch()}>Create A Campaign</button>
          {this.state.showCreate ? (
            <CreateCampaign
              user={this.props.user}
              createSwitch={this.createSwitch}
            />
          ) : (
            campaignList
          )}
        </div>
      </PageContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    campaignsList: state.campaignReducer.campaignsList,
    user: state.userReducer.user
  };
};
export default connect(mapStateToProps, { getAllCampaigns })(Campaigns);
