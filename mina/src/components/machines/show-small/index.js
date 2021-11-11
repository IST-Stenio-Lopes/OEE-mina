import ApexChart from "../percentBar";
import '../show-small/style.css';
import React from "react";
import { oeeValue } from '../../../utils/utilities';


export default function ShowSmall() {

    return (
        <div id="principal-small">

            <div id="conteudo1-small">
                <div id="texto">
                    Prensa <br /> Menegotto
                </div>
                <p id="linha"></p>

                <div id="horas">

                </div>
            </div>
            <div id="icons">
                <div id="icon"><p>0000</p></div>
                <div id="icon2"><p>0000</p></div>
            </div>

            <div id="conteudo2-small">
                <ApexChart />
                <p id="oee">OEE = {oeeValue(87)}</p> 
            </div>
        </div>
    );
}