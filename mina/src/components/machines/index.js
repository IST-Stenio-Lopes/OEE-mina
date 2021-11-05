import { render } from "@testing-library/react";
import React, {Component} from "react";

class Machines extends Component{

    constructor(props){
        super(props);
        this.state={
            machines :[
                {id:1, name:"Prensa Menegotto", description:"working", productionTime:0, oee:0, cachInWord:true, discountScrap:true},
                {id:2, name:"CT Teste", description:"working", productionTime:10, oee:25, cachInWord:true, discountScrap:true},
                {id:3, name:"Envase", description:"working", productionTime:20, oee:38, cachInWord:true, discountScrap:true},
                {id:4, name:"Montagem", description:"working", productionTime:0, oee:72, cachInWord:true, discountScrap:true},
                {id:5, name:"Cola", description:"working", productionTime:40, oee:87, cachInWord:true, discountScrap:true}
            ]
        };
    }

    render(){
        return(
            <div>
                test
            </div>
        );
    }
}

export default Machines;