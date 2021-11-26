import MaterialIcon from 'react-google-material-icons';
import ApexChart from "../percentBar";
import '../show-medium/style.css';
import React from "react";
import { oeeValue } from '../../../utils/utilities';
import Data from '../../../mock-data.json';
import {formatWord, getStateMachine} from '../../../utils/utilities';
import { NameTop, LinhaL } from '../show-large/style';


export default function ShowMedium() {
    return (

        <div id="showMedium-expand">
            {
                Data.map((post) => (
                    <div id="principal-medium">

                        <div id="conteudo1-medium">
                            <div id="superior">
                                <NameTop id="nameTop"description={post.description}>0{post.id}    {getStateMachine(post.description)}</NameTop>
                            </div>
                            <div id="inferior">
                                <h1>{formatWord(post.name)}</h1>
                            </div>
                            
                        </div>
                        <div id="settingLine">
                            <LinhaL description={post.description} />
                        </div>
                        
                     
                        <div id="icons">
                            <div id="icon"><a><MaterialIcon icon="vpn_key" size={20} /></a><p>0000</p></div>
                            <div id="icon2"><a><MaterialIcon icon="inventory2" size={20} /></a><p>0000</p></div>
                        </div>

                        <div id="conteudo2-medium">
                            <div className="informacoes">
                                <ApexChart oee={post.oee} />
                                <p id="oee">OEE = {oeeValue(87)}</p>
                            </div>
                            <div className="informacoes">

                                <div className="segundo">
                                    <p id="aprovados">{post.production}</p>
                                    APROVADAS
                                </div>
                            </div>

                        </div>
                    </div>
                ))
            }

        </div>

        /*
        <div id="principal-medium">

            <div id="conteudo1-medium">
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

            <div id="conteudo2-medium">
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
                
            </div>
        </div>*/
    );
}