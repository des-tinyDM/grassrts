import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { getAllCampaigns } from "../../ducks/campaignReducer";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.getAllCampaigns();
  }
  render() {
    return (
      <FooterContainer>
        <h1>Trusted By:</h1>
      </FooterContainer>
    );
  }
}
const mapStateToProps = state => {
  return {
    campaigns: state.campignReducer.campaignsList
  };
};
export default connect(mapStateToProps, { getAllCampaigns })(Footer);

const FooterContainer = styled.div``;
