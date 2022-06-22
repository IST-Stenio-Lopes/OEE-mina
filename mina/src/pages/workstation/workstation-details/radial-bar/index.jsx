import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

class RadialGraphic extends React.Component {
        constructor(props) {
          super(props);

          this.state = {
              oee: props.oee,
          
            series: [props.oee],
            options: {
                fill: {
                    
                    colors: ["#052554"], //O que muda a cor do circulo
                  },
              chart: {
                height: 350,
                type: 'radialBar',
              },
              plotOptions: {
                radialBar: {
                  hollow: {
                    size: "70%",
                  },
                  dataLabels: {
                    showOn: "always",
                    style: {},
                    background: {
                      color: "red",
                    },
                    name: {
                      offsetY: 130,
                      show: true,
                      color: "#052554", //O que muda a cor do nome
                      fontSize: "5vw",
                      fontFamily: "Montserrat",
                      fontWeight: 900,
                      top: 10,
                    },
                    value: {
                      color: "#052554",
                      offsetY: -30,
                      fontSize: "6.5vw",
                      show: true,
                    },
                    dropShadow: {
                      color: "red",
                    },
                  },
                },
              },
              //labels: [this.props.oee + "%" +'\n' + "OEE"],
              labels: ["OEE"]

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
          labels: ["OEE"],
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

                />
            </div>
          );
        }
      }

      
export default RadialGraphic;