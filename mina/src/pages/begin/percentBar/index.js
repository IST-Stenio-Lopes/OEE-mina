import { render } from "@testing-library/react";
import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

import "./style.css";

class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      oee: props.oee,
      series: [props.oee],
      options: {
        fill: {
          colors: ["#052554"], //O que muda a cor do circulo
        },
        chart: {},
        plotOptions: {
          radialBar: {
            hollow: {
              size: "50%",
            },
            dataLabels: {
              showOn: "always",
              style: {},
              background: {
                color: "red",
              },
              name: {
                offsetY: 4,
                show: true,
                color: "#052554", //O que muda a cor do nome
                fontSize: "0.6rem",
                fontFamily: "Montserrat",
                fontWeight: 500,
                top: 20,
              },
              value: {
                color: "#111",
                fontSize: "30rem",
                show: false,
              },
              dropShadow: {
                color: "red",
              },
            },
          },
        },
        stroke: {
          lineCap: "round",
        },
        labels: [props.oee + "%"],
      },
    };
  }

  componentDidUpdate(prevProps) {
    // Uso típico, (não esqueça de comparar as props):
    if (this.props.oee !== prevProps.oee) {
      this.setState({
        ...this.state,
        series: [this.props.oee],
        options: {
          labels: [this.props.oee + "%"],
        },
      });
    }
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="radialBar"
          height={"100px"}
          margin-top={"10px"}
        />
      </div>
    );
  }
}

export default ApexChart;
