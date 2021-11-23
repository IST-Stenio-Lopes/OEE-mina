import React, { useState } from "react";
import './style.css';
import Data from '../../mock-data.json';
import Button from '@material-ui/core/Button';





export default function WorkstationList() {
    const [dataOS, setDataOS] = useState(Data)
    return (
     
        <div>
            <div id="workstatio-top">
                <h1>Estações de Trabalho</h1>
                <Button variant="contained">Centros de Trabalho</Button>
            </div>

            <div id="ws-content">
                    
                    <div id="ws-table">
                        <div id="ws-table-description">
                            <p>Nome estação de trabalho</p>
                            <p>Descrição</p>
                            <p>Taxa de produção (u/h)</p>
                            <p>Meta OEE%</p>
                            <p>Descontar retrabalho</p>
                            <p>Descontar refugo</p>
                        </div>
                        <div>
                            {
                                dataOS.map((post) => (
                                    <div id="ws-table-data">
                                        <p>{post.name}</p>
                                        <p>{post.description}</p>
                                        <p>{post.production}</p>
                                        <p>{post.oee}%</p>
                                        <p>{post.cach_in_word ? 'Sim' : 'Não'}</p>
                                        <p>{post.discount_scrap ? 'Sim' : 'Não'}</p>
                                    </div>
                                ))
                            }
                        </div>

                    </div>
            
            </div>
        </div>
    );

    

}