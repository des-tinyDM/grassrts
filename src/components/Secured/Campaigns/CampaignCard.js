import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { joinCampaign } from "../../../ducks/campaignReducer";
import { withRouter } from "react-router-dom";

const Campaign = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80vw;
  min-height: 40vh;
  max-height: 65vh;
  margin: 2.5vh 0;
  text-align: center;
  border: 1px solid grey;
  padding: 1vh 5vw;

  &h1 {
    font-size: 1em;
  }
  & img {
    max-width: 70vw;
    max-height: 15vh;
    margin: 1vh auto;
    /* max-height: 20vh; */
  }
  & button {
    width: 40vw;
    height: 7vh;
    outline: none;
    font-size: 2rem;
  }
`;

const CampaignCard = props => {
  console.log(props.campaign_id, props.user.user_id);
  return (
    <Campaign>
      <h1>{props.name}</h1>
      <p>with</p>
      <h2>{props.organization}</h2>
      <img src={props.orglogo} />
      <p>{props.description}</p>
      <button
        onClick={() =>
          props
            .joinCampaign(props.campaign_id, props.user.user_id)
            .then(() => props.history.push(`/`))
        }
      >
        JOIN
      </button>
    </Campaign>
  );
};
const mapStateToProps = state => {
  return {
    joined: state.campaignReducer.joined,
    user: state.userReducer.user
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    { joinCampaign }
  )(CampaignCard)
);
