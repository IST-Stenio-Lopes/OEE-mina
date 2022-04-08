import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";
import { MarginSpaceStyle } from "../../../../styles/style";

export default class ColumnOee extends React.Component {
  constructor(props) {
    var dataOee = props.oee ? "OEE = " + props.oee : "OEE = Não Recebido";
    var oeeGoal = props.oeeGoal ? props.oeeGoal : 87;
    var oeeReceived = props.oeeReceived ? props.oeeReceived : 70;

    super(props);

    this.state = {
      series: [
        {
          name: "OEE",
          data: [oeeReceived, 55, 41, 67, 22, 43, 21, 49],
        },
        {
          name: "Meta OEE",
          data: [oeeGoal - oeeReceived, 23, 20, 8, 13, 27, 33, 12],
        },
        {
          name: "100%",
          data: [100-oeeGoal, 17, 15, 15, 21, 14, 15, 13],
        }, 
      ],
      options: {
        chart: {
          type: "bar",
          height: 350,
          stacked: true,
          //stackType: '100%'
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                position: "bottom",
                offsetX: -10,
                offsetY: 0,
              },
            },
          },
        ],
        xaxis: {
          categories: [
            dataOee,
            "2011 Q2",
            "2011 Q3",
            "2011 Q4",
            "2012 Q1",
            "2012 Q2",
            "2012 Q3",
            "2012 Q4",
          ],
        },
        fill: {
          opacity: 1,
        },
        legend: {
          position: "right",
          offsetX: 0,
          offsetY: 50,
        },
      },
    };
  }

  render() {
    return (
      <MarginSpaceStyle top={10}>
        <div id="chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="bar"
            height={350}
          />
        </div>
      </MarginSpaceStyle>
    );
  }
}

/* const domContainer = document.querySelector("#app");
ReactDOM.render(React.createElement(ApexChart), domContainer);
 */
