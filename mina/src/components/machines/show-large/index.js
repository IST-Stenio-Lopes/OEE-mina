import MaterialIcon from 'react-google-material-icons';
import ApexChart from "../percentBar";
import '../show-large/style.css';
import React, { Component } from "react";
import { oeeValue } from '../../../utils/utilities';
import {formatWord} from '../../../utils/utilities';
import Data from '../../../mock-data.json';


export default function ShowLarge() {


    return (
    
        <div id="showLarger-expand">
            {
                Data.map((post) => (
                    <div id="principal">

                        <div id="conteudo1">
                            <div id="superior">
                                <h5>A02 - Man. Mecânica</h5>
                                <div id="horas">

                                </div>
                            </div>
                            <div id="inferior">
                                <h1>{formatWord(post.name)}</h1>
                            </div>

                            <p id="linha"></p>
                        </div>
                        <div id="icons">
                            <div id="icon"><a><MaterialIcon icon="vpn_key" size={20} /></a><p>0000</p></div>
                            <div id="icon2"><a><MaterialIcon icon="inventory2" size={20} /></a><p>0000</p></div>
                        </div>

                        <div id="conteudo2">
                            <div className="informacoes">
                                <ApexChart oee={post.oee}/>
                                <p id="oee">OEE = {oeeValue(post.oee)}</p>
                            </div>
                            <div className="informacoes">

                                <div className="segundo">
                                    <p id="aprovados">{post.production}</p>
                                    APROVADAS
                                </div>
                            </div>
                            <div className="informacoes">
                                3
                            </div>
                        </div>
                    </div>
                ))
            }
            <br/>
        </div>

        /*<div id="principal">

            <div id="conteudo1">
                <div id="texto">
                    <h5>A02 - Man. Mecânica</h5>
                    <h1>{props.name}</h1>
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
                    <p id="oee">OEE = {oeeValue(25)}</p>
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
        </div>*/
    );
}