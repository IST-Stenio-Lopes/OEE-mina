import { render } from "@testing-library/react";
import React, { Component } from "react";
import '../machines/style.css';
import MaterialIcon from 'react-google-material-icons';
import ApexChart from "./percentBar";


function oeeValue (valor) {
    if(valor > 100){
        return 100;
    }else if(valor <0){
        return 0;
    }else{
        return valor;
    }
}

class Machines extends Component {
    
    constructor(props) {
        super(props);
        this.state = {

            
            machines: [
                { id: 1, name: "Prensa Menegotto", description: "working", production: 3487, productionTime: 0, oee: 0, cachInWord: true, discountScrap: true },
                { id: 2, name: "CT Teste", description: "working", production: 3487, productionTime: 10, oee: 25, cachInWord: true, discountScrap: true },
                { id: 3, name: "Envase", description: "working", production: 3487, productionTime: 20, oee: 38, cachInWord: true, discountScrap: true },
                { id: 4, name: "Montagem", description: "working", production: 3487, productionTime: 0, oee: 72, cachInWord: true, discountScrap: true },
                { id: 5, name: "Cola", description: "working", production: 3487, productionTime: 40, oee: 87, cachInWord: true, discountScrap: true }
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
                        <p id="oee">OEE = {oeeValue(87)}</p>
                    </div>
                    <div className="informacoes">
                       
                       <div className="segundo">
                           <p id="aprovados">3.487</p>
                           APROVADAS
                       </div>
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