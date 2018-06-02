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
        {this.state.showCreate ? (
          <div>
            <button
              className="createCampButton"
              onClick={e => this.createSwitch(e)}
            >
              Return to Campaigns
            </button>
            <CreateCampaign />
          </div>
        ) : (
          <div>
            <button onClick={() => this.createSwitch()}>
              Create A Campaign
            </button>
            {campaignList}
          </div>
        )}
      </PageContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    campaignsList: state.campaignReducer.campaignsList
  };
};
export default connect(mapStateToProps, { getAllCampaigns })(Campaigns);

// const PaigeContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;

//   overflow-y: scroll;

/* & .createCampButton {
    padding: 2vh 1vw;
    border-radius: 6px;
    transition: all 0.3s;
    width: 40vw;
    border-radius: 6px;
    outline: none;
    font-size: 0.75em;
    border: solid 1px #dce8ef;
    color: #595c63;
    align-self: center;

    &:hover {
      box-shadow: 1px 1px 3px #dee9f9;
      transition: 0.2s;
    }
    &:active {
      background: #1f83ff;
      color: #fdfdfd;
    }
  }
`; */
