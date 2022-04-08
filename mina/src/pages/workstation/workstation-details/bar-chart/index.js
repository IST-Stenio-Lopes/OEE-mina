import React, { Component, useEffect, useMemo, useState } from "react";
import ReactApexChart from "react-apexcharts";

/* export class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "OEE",
          data: [props.oee],
        },
        {
          name: "Meta OEE",
          data: [props.oeeGoal - props.oee],
        },
      ],
      options: {
        tooltip: {
          enabled: false,
        },
        dataLabels: {
          //enabled: false, //remove o percentual interno
          style: {
            colors: ["#FFFFFF", "#000000"], //muda cor do percentual interno
          },
        },
        chart: {
          type: "bar",
          stackType: "100%",
          height: "200px",
          stacked: true,
          toolbar: {
            show: false, //opção para baixar o grafico em svg, png, etc.
          },
          zoom: {
            enabled: false,
          },
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
        plotOptions: {
          bar: {
            horizontal: false,
            borderRadius: 10,
          },
        },
        xaxis: {
          type: "category",
          categories: [""], //Escrita na parte inferior da barra
        },
        yaxis: {
          show: false,
        },
        legend: {
          position: "right",
          offsetY: 40,
          show: false, //Remove os nomes dos dados que aparecem na lateral
        },
        grid: {
          show: false, //Remove as linhas
        },
        fill: {
          opacity: 1,
          colors: ["#0C4394", "#F0F0F0"],
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
          type="bar"
          height={window.screen.width > 1600 ? 560 : 510}
        />
      </div>
    );
  }
} */

export default function GraphicBar(props) {
  const [oee, setOee] = useState(props.oee);
  const [oeeGoal, setOeeGoal] = useState(props.oeeGoal);

  const object = useMemo(
    () => ({
      series: [
        {
          name: "OEE",
          data: [oee],
        },
        {
          name: "Meta OEE",
          data: [oeeGoal - oee],
        },
      ],
      options: {
        tooltip: {
          enabled: false, //Remove o detalhamento quando passa o hover do mouse
        },
        dataLabels: {
          //enabled: false, //remove o percentual interno

          style: {
            colors: ["#FFFFFF", oeeGoal - oee < 0 || oee === 0? "transparent" : "#000000" ], //muda cor do percentual interno
          },
        },
        chart: {
          type: "bar",
          stackType: "100%",
          height: "200px",
          stacked: true,
          toolbar: {
            show: false, //opção para baixar o grafico em svg, png, etc.
          },
          zoom: {
            enabled: false,
          },
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
        plotOptions: {
          bar: {
            horizontal: false,
            borderRadius: 10,
          },
        },
        xaxis: {
          type: "category",
          categories: [""], //Escrita na parte inferior da barra
        },
        yaxis: {
          show: false,
        },
        legend: {
          position: "right",
          offsetY: 40,
          show: false, //Remove os nomes dos dados que aparecem na lateral
        },
        grid: {
          show: false, //Remove as linhas
        },
        fill: {
          opacity: 1,
          colors: ["#0C4394", "#F0F0F0"],
        },
      },
    }),
    [oee, oeeGoal]
  );

  useEffect(() => {
    setOee(props.oee);
    setOeeGoal(props.oeeGoal);
  }, [props]);

  return (
    <div id="chart">
      <ReactApexChart
        options={object.options}
        series={object.series}
        type="bar"
        height={window.screen.width > 1600 ? 560 : 510}
      />
    </div>
  );
}
