import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import moment from "moment";
import Chart from "chart.js";
import { Doughnut } from "react-chartjs-2";

import { PageContainer } from "../../styled/PageContainer";
import { getContacts } from "../../../ducks/dataReducer";

class DataPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getContacts();
  }
  render() {
    return <div />;
  }
}
const mapStateToProps = state => {
  return {
    contacts: state.dataReducer.contacts
  };
};
export default connect(
  mapStateToProps,
  { getContacts }
)(DataPage);
