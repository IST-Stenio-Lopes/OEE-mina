import ReactApexChart from 'react-apexcharts';
import React, { Component } from "react";
import { render } from "@testing-library/react";
import '../percentBar/style.css';

class ApexChart extends React.Component {
    constructor(props) {
        super(props);
        var porcentagem = 70;
        this.state = {

            series: [porcentagem],
            options: {
                fill: {
                    colors: ['#052554'] //O que muda a cor do circulo
                  },
                chart: {
                },
                plotOptions: {
                    radialBar: {
                        hollow: {

                            size: '50%',
                        },
                        dataLabels: {
                            showOn: "always",
                            style:{
                                
                            },
                            background:{
                                color: 'red'
                            },
                            name: {
                                offsetY: 4,
                                show: true,
                                color: "#052554", //O que muda a cor do nome
                                fontSize: "12px",
                                top: 20
                            },
                            value: {
                                color: "#111",
                                fontSize: "30px",
                                show: false
                            },
                            dropShadow: {
                                color: 'red'
                            }
                        },
                    },
                },
                stroke: {
                    lineCap: "round",
                  },
                labels: [porcentagem + "%"],
            },


        };
    }

    render() {
        return (
            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={'100px'} margin-top={'10px'} />
            </div>
        );
    }
}


export default ApexChart;