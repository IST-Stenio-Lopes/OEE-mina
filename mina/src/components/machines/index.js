import { render } from "@testing-library/react";
import React, { Component } from "react";
import '../machines/style.css';
import MaterialIcon from 'react-google-material-icons';
import ApexChart from "./percentBar";


class Machines extends Component {

    constructor(props) {
        super(props);
        this.state = {
            machines: [
                { id: 1, name: "Prensa Menegotto", description: "working", productionTime: 0, oee: 0, cachInWord: true, discountScrap: true },
                { id: 2, name: "CT Teste", description: "working", productionTime: 10, oee: 25, cachInWord: true, discountScrap: true },
                { id: 3, name: "Envase", description: "working", productionTime: 20, oee: 38, cachInWord: true, discountScrap: true },
                { id: 4, name: "Montagem", description: "working", productionTime: 0, oee: 72, cachInWord: true, discountScrap: true },
                { id: 5, name: "Cola", description: "working", productionTime: 40, oee: 87, cachInWord: true, discountScrap: true }
            ]
        };
    }


    render() {
        return (
            <div id="principal">
                <div id="conteudo1">
                    <div id="texto">
                        <h5>A02 - Man. Mecânica</h5>
                        <h1>Prensa <br /> Menegotto</h1>
                    </div>
                    <p id="linha"></p>

                    <div id="horas">

                    </div>
                </div>
                <div id="icons">
                    <div id="icon"><a><MaterialIcon icon="vpn_key" size={20} /></a><p>0000</p></div>
                    <div id="icon2"><a><MaterialIcon icon="inventory2" size={20} /></a><p>0000</p></div>
                </div>

                <div id="conteudo2">
                    <div className="informacoes">
                        <ApexChart />
                    </div>
                    <div className="informacoes">
                        2
                    </div>
                    <div className="informacoes">
                        3
                    </div>
                </div>

            </div>
        );
    }
}

export default Machines;