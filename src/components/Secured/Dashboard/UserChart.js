// import React from "react";
// import { Line as LineChart } from "react-chartjs-2";

// // const data = connect(mapStateToProps, {getUserChart})(chartData) = props => {
// //   {
// //     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
// //     datasets: [
// //     {
// //       label: 'My First dataset',
// //       fill: false,
// //       lineTension: 0.1,
// //       backgroundColor: 'rgba(75,192,192,0.4)',
// //       borderColor: 'rgba(75,192,192,1)',
// //       borderCapStyle: 'butt',
// //       borderDash: [],
// //       borderDashOffset: 0.0,
// //       borderJoinStyle: 'miter',
// //       pointBorderColor: 'rgba(75,192,192,1)',
// //       pointBackgroundColor: '#fff',
// //       pointBorderWidth: 1,
// //       pointHoverRadius: 5,
// //       pointHoverBackgroundColor: 'rgba(75,192,192,1)',
// //       pointHoverBorderColor: 'rgba(220,220,220,1)',
// //       pointHoverBorderWidth: 2,
// //       pointRadius: 1,
// //       pointHitRadius: 10,
// //       data: [65, 59, 80, 81, 56, 55, 40]
// //     }
// //   ]
// // }
// // };

// const options = {
//   legendTemplate:
//     '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
// };

// const styles = {
//   graphContainer: {
//     border: "1px solid black",
//     padding: "15px"
//   }
// };

// class LineChartExample extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: chartData
//     };
//   }

//   render() {
//     return (
//       <div style={{ height: "250px", width: "250px" }}>
//         <LineChart
//           {/* data={this.state.data} */}
//           options={{
//             maintainAspectRatio: false,
//             scaleShowGridLines: true,
//             scaleGridLineColor: "rgba(0,0,0,.05)",
//             scaleGridLineWidth: 1,
//             scaleShowHorizontalLines: true,
//             scaleShowVerticalLines: true,
//             bezierCurve: true,
//             bezierCurveTension: 0.4,
//             pointDot: true,
//             pointDotRadius: 4,
//             pointDotStrokeWidth: 1,
//             pointHitDetectionRadius: 20,
//             datasetStroke: true,
//             datasetStrokeWidth: 2,
//             datasetFill: true
//           }}
//         />
//       </div>
//     );
//   }
// }

// export default LineChartExample;
