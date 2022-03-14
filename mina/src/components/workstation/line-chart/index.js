import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    console.log(props.production_per_hour);
    this.state = {
      series: [
        {
          name: "PRODUÇÃO",
          type: "line",
          //data: [1000, 410, 350, 510, 490, 620, 690, 1520, 2150, 2540, 620, 690, 910, 1480, 1300, 510, 490, 1000, 1200, 2000, 1600, 2800, 1750, 1990, 2100, 2300, 2500]
          data: props.production_per_hour,
          color: "#0C4394",
        },
        {
          name: "RETRABALHO",
          data: [
            808, 468, 726, 355, 335, 769, 890, 654, 864, 326, 652, 423, 537,
            449, 729, 823, 584, 692, 499, 200, 985, 161, 193, 257,
          ],
          color: "#C66B00",
        },
        {
          name: "REFUGO",
          data: [
            259, 290, 493, 92, 486, 131, 689, 256, 304, 434, 602, 257, 281, 507,
            568, 405, 363, 570, 689, 554, 381, 324, 668, 348,
          ],
          color: "#C02B2B",
        },
      ],
      options: {
        markers: {},
        chart: {
          height: 350,
          type: "line",
          zoom: {
            enabled: false,
          },
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
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        xaxis: {
          type: "category",
          categories: [
            "0h",
            "1h",
            "2h",
            "3h",
            "4h",
            "5h",
            "6h",
            "7h",
            "8h",
            "9h",
            "10h",
            "11h",
            "12h",
            "13h",
            "14h",
            "15h",
            "16h",
            "17h",
            "18h",
            "19h",
            "20h",
            "21h",
            "22h",
            "23h",
            "24h",
            "25h",
            "26h",
            "27h",
          ],
        },
      },
    };
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps.production_per_hour);
    this.state = {
      series: [
        {
          name: "PRODUÇÃO",
          type: "line",
          //data: [1000, 410, 350, 510, 490, 620, 690, 1520, 2150, 2540, 620, 690, 910, 1480, 1300, 510, 490, 1000, 1200, 2000, 1600, 2800, 1750, 1990, 2100, 2300, 2500]
          data: nextProps.production_per_hour,
          color: "#0C4394",
        },
        {
          name: "RETRABALHO",
          data: [
            808, 468, 726, 355, 335, 769, 890, 654, 864, 326, 652, 423, 537,
            449, 729, 823, 584, 692, 499, 200, 985, 161, 193, 257,
          ],
          color: "#C66B00",
        },
        {
          name: "REFUGO",
          data: [
            259, 290, 493, 92, 486, 131, 689, 256, 304, 434, 602, 257, 281, 507,
            568, 405, 363, 570, 689, 554, 381, 324, 668, 348,
          ],
          color: "#C02B2B",
        },
      ],
      options: {
        markers: {},
        chart: {
          height: 350,
          type: "line",
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "straight",
          colors: ["#0C4394"], //Muda a cor da linha
        },
        title: {
          text: "PRODUÇÃO POR DIA",
          align: "left",
        },
        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        xaxis: {
          type: "category",
          categories: [
            "0h",
            "1h",
            "2h",
            "3h",
            "4h",
            "5h",
            "6h",
            "7h",
            "8h",
            "9h",
            "10h",
            "11h",
            "12h",
            "13h",
            "14h",
            "15h",
            "16h",
            "17h",
            "18h",
            "19h",
            "20h",
            "21h",
            "22h",
            "23h",
            "24h",
          ],
        },
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="line"
          height={350}
        />
      </div>
    );
  }
}

export default ApexChart;
