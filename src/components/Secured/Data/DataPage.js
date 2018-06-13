import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import moment from "moment";
import Chart from "chart.js";
import { Doughnut } from "react-chartjs-2";
import styled from "styled-components";

import { PageContainer } from "../../styled/PageContainer";
import { getContacts } from "../../../ducks/dataReducer";

class DataPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getContacts(this.props.joined.campaign_id);
  }
  render() {
    let contacts = this.props.contacts.map((contact, i) => {
      return (
        <Contacts>
          <h2>
            {contact.first_name} {contact.last_name}
          </h2>
          <p>{contact.phone}</p>
          <p>{contact.email}</p>
        </Contacts>
      );
    });
    return (
      <PageContainer>
        <div className="contactsContainer">
          <h1>Contacts:</h1>
          {contacts}
        </div>
      </PageContainer>
    );
  }
}
const mapStateToProps = state => {
  return {
    contacts: state.dataReducer.contacts,
    joined: state.campaignReducer.joined
  };
};
export default connect(
  mapStateToProps,
  { getContacts }
)(DataPage);

const Contacts = styled.div`
  display: flex;
  flex-direction: row;
  width: 40vw;
  overflow-y: scroll;
  justify-content: space-evenly;
  align-items: center;
  text-align: start;
  & p {
    width: 30%;
  }
  & h2 {
    width: 36%;
  }
`;
