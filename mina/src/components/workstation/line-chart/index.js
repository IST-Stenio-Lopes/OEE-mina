import React, { Component } from "react";
import ReactApexChart from 'react-apexcharts';


class ApexChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                name: "Desktops",
                type: 'line',
                data: [1000, 410, 350, 510, 490, 620, 690, 1520, 2150, 2540, 620, 690, 910, 1480, 1300, 510, 490, 1000, 1200, 2000, 1600, 2800, 1750, 1990, 2100]
            }],
            options: {
                markers: {

                 },
                chart: {
                    height: 350,
                    type: 'line',
                    zoom: {
                        enabled: false
                    }
                },
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    curve: 'straight',
                    colors: ['#0C4394']  //Muda a cor da linha
                },
                title: {
                    text: 'Product Trends by Month',
                    align: 'left'
                },
                grid: {
                    row: {
                        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                        opacity: 0.5
                    },
                },
                xaxis: {
                    type: 'category',
                    categories: ['0h', '1h', '2h', '3h', '4h', '5h', '6h', '7h', '8h', '9h', '10h', '11h', '12h', '13h', '14h', '15h', '16h', '17h', '18h', '19h', '20h', '21h', '22h', '23h', '24h'],
                }
            },


        };
    }



    render() {
        return (


            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />
            </div>);
    }
}



export default ApexChart;