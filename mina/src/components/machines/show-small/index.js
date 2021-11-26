import ApexChart from "../percentBar";
import '../show-small/style.css';
import React from "react";
import { oeeValue } from '../../../utils/utilities';
import Data from '../../../mock-data.json';
import { formatWord } from '../../../utils/utilities';
import { LinhaL } from "../show-large/style";


export default function ShowSmall() {


    return (

        <div id="showSmall-expand">
            {
                Data.map((post) => (
                    <div id="principal-small">

                        <div id="conteudo1-small">
                            <div id="texto">
                                <h1>{formatWord(post.name)}</h1>
                            </div>
                            <div id="settingLine">
                                <LinhaL description={post.description} />
                            </div>

                            <div id="horas">

                            </div>
                        </div>
                        <div id="icons-small">
                            <div id="icon"><p>0000</p></div>
                            <div id="icon2"><p>0000</p></div>
                        </div>

                        <div id="conteudo2-small">
                            <ApexChart oee={post.oee}/>
                            <p id="oee">OEE = {oeeValue(87)}</p>
                        </div>
                    </div>
                ))
            }
        </div>
        /*<div id="principal-small">

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
        </div>*/
    );
}