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
    // axios
    //   .get(`/api/chart/data?campaign_id=${1}&outcome="VR"`)
    //   .then(res => console.log(res));
    // console.log(this.refs.chart.chart_instance); // returns a Chart.js instance reference
  }
  render() {
    // const months = ["January", "February", "March"];
    // const labels = months.map((e, i) => {
    //   console.log(e);
    //   return e;
    // });
    // console.log(labels);
    // const data = {
    //   labels: labels,
    //   datasets: [
    //     {
    //       label: "My First dataset",
    //       fill: false,
    //       lineTension: 0.1,
    //       backgroundColor: "rgba(75,192,192,0.4)",
    //       borderColor: "rgba(75,192,192,1)",
    //       borderCapStyle: "butt",
    //       borderDash: [],
    //       borderDashOffset: 0.0,
    //       borderJoinStyle: "miter",
    //       pointBorderColor: "rgba(75,192,192,1)",
    //       pointBackgroundColor: "#fff",
    //       pointBorderWidth: 1,
    //       pointHoverRadius: 5,
    //       pointHoverBackgroundColor: "rgba(75,192,192,1)",
    //       pointHoverBorderColor: "rgba(220,220,220,1)",
    //       pointHoverBorderWidth: 2,
    //       pointRadius: 1,
    //       pointHitRadius: 10,
    //       data: [65, 59, 80]
    //     }
    //   ]
    // };
    return <div></div>;
  }
}
const mapStateToProps = state => {
  return {
    contacts: state.dataReducer.contacts
  };
};
export default connect(mapStateToProps, { getContacts })(DataPage);
