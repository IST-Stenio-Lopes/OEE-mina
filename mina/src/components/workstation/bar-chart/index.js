import React, { Component } from "react";
import ReactApexChart from 'react-apexcharts';

export class ApexChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                name: 'Meta OEE',
                data: [70]
            }, {
                name: 'OEE',
                data: [30]
            }],
            options: {
                dataLabels: {
                    //enabled: false, remove o percentual interno
                    style: {
                        colors: ['#FFFFFF', '#000000'] //muda cor do percentual interno
                    }
                },
                chart: {
    
                    type: 'bar',
                    height: 100,
                    stacked: true,
                    toolbar: {
                        show: false
                    },
                    zoom: {
                        enabled: false
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        legend: {
                            position: 'bottom',
                            offsetX: -10,
                            offsetY: 0
                        }
                    }
                }],
                plotOptions: {
                    bar: {
                        horizontal: false,
                        borderRadius: 10
                    },
                },
                legend:{
                    show: false
                },
                xaxis: {
                    type: 'category',
                    categories: ['OEE'],
                },
                yaxis: {
                    show: false,
                },
                legend: {
                    position: 'right',
                    offsetY: 40
                },
                grid: {
                    show: false
                },
                fill: {
                    opacity: 1,
                    colors: ['#0C4394', '#F0F0F0']
                }
            },


        };
    }



    render() {
        return (


            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
            </div>


        );
    }
}
