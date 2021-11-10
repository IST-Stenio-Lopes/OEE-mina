import { render } from "@testing-library/react";
import React, { Component } from "react";

import MaterialIcon from 'react-google-material-icons';
import ApexChart from "./percentBar";




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
            <p></p>
        );
    }
}

export default Machines;