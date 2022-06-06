import React, { Component, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      approved_per_hour: props.approved_per_hour,
      rework_per_hour: props.rework_per_hour,
      scrap_per_hour: props.scrap_per_hour,
      hours: props.hours,
      series: [
        {
          name: "PRODUÇÃO",
          type: "line",
          //data: [1000, 410, 350, 510, 490, 620, 690, 1520, 2150, 2540, 620, 690, 910, 1480, 1300, 510, 490, 1000, 1200, 2000, 1600, 2800, 1750, 1990, 2100, 2300, 2500]
          data: [...props.approved_per_hour],
          color: "#0C4394",
        },
        {
          name: "RETRABALHO",
          // data: [
          //   // 808, 468, 726, 355, 335, 769, 890, 654, 864, 326, 652, 423, 537,
          //   // 449, 729, 823, 584, 692, 499, 200, 985, 161, 193, 257,
          // ],
          data: [...props.rework_per_hour],
          color: "#C66B00",
        },
        {
          name: "REFUGO",
          // data: [
          //   // 259, 290, 493, 92, 486, 131, 689, 256, 304, 434, 602, 257, 281, 507,
          //   // 568, 405, 363, 570, 689, 554, 381, 324, 668, 348,
          // ],
          data: [...props.scrap_per_hour],
          color: "#C02B2B",
        },
      ],
      options: {
        markers: {
          size: 1,
        },
        chart: {
          height: 350,
          type: "line",
          zoom: {
            enabled: true,
          },
          events: {},
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "straight",
          colors: ["#0C4394", "#C66B00", "#C02B2B"], //Muda a cor da linha
        },
        title: {
          text: "",
          align: "left",
        },
        grid: {
          row: {
            colors: ["#0000", "transparent"], // takes an array which will be repeated on columns muda a cor da linha de fundo
            opacity: 0.5,
          },
        },
        xaxis: {
          type: "string",
          labels: {
            show: false,
          },
          categories: [props.hours],
        },
        tooltip: {
          enabled: true,
          shared: true,
          followCursor: true,
          intersect: false,
          inverseOrder: false,
          fillSeriesColor: false,
          style: {
            fontSize: "12px",
            textAlign: "center",
            fontFamily: undefined,
          },
          onDatasetHover: {
            highlightDataSeries: true,
          },
          marker: {
            show: true,
          },
          fixed: {
            enabled: false,
            position: "topLeft",
            offsetX: 50,
            offsetY: 50,
          },
        },
      },
    };
  }

  componentDidUpdate(prevProps) {
    // Uso típico, (não esqueça de comparar as props):
    if (
      (this.props.approved_per_hour !== prevProps.approved_per_hour ||
        this.props.rework_per_hour !== prevProps.rework_per_hour ||
        this.props.scrap_per_hour !== prevProps.scrap_per_hour) &&
      prevProps.hours.length != 0
    ) {
      {
        //console.log("entrou de novo");
      }
      this.setState({
        ...this.state,
        approved_per_hour: prevProps.approved_per_hour,
        rework_per_hour: prevProps.rework_per_hour,
        scrap_per_hour: prevProps.scrap_per_hour,
        hours: prevProps.hours,
        series: [
          {
            name: "PRODUÇÃO",
            type: "line",
            //data: [1000, 410, 350, 510, 490, 620, 690, 1520, 2150, 2540, 620, 690, 910, 1480, 1300, 510, 490, 1000, 1200, 2000, 1600, 2800, 1750, 1990, 2100, 2300, 2500]
            data: prevProps.approved_per_hour,
            color: "#0C4394",
          },
          {
            name: "RETRABALHO",
            data: prevProps.rework_per_hour /* [
              808, 468, 726, 355, 335, 769, 890, 654, 864, 326, 652, 423, 537,
              449, 729, 823, 584, 692, 499, 200, 985, 161, 193, 257,
            ] */,
            color: "#C66B00",
          },
          {
            name: "REFUGO",
            data: [...prevProps.scrap_per_hour] /* [
              259, 290, 493, 92, 486, 131, 689, 256, 304, 434, 602, 257, 281, 507,
              568, 405, 363, 570, 689, 554, 381, 324, 668, 348,
            ] */,
            color: "#C02B2B",
          },
        ],
        options: {
          xaxis: {
            type: "string",
            labels: {
              show: false,
              trim: false,
              hideOverlappingLabels: false,
            },
            categories: [...prevProps.hours],
          },
        },
      });
    }
  }

  /*   componentDidUpdate(prevProps) {
    // Uso típico, (não esqueça de comparar as props):
    if (this.props.approved_per_hour !== prevProps.approved_per_hour) {
      this.setState({
        ...this.state,
        series: [{ data: [25] }],
      });
    }
  } */

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="line"
          height={window.screen.width > 1600 ? 660 : 450}
        />
      </div>
    );
  }
}

export default ApexChart;
