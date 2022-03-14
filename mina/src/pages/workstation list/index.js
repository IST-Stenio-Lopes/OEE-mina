import Button from "@material-ui/core/Button";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Data from "../../mock-data.json";
import { DisplayFlexStyle, MarginSpaceStyle } from "../../styles/style";
import { WorksCenterButton } from "./style";

import "./style.css";

export default function WorkstationList() {
  let navigate = useNavigate();

  const [dataOS, setDataOS] = useState(Data);

  return (
    <div className="principal-workstationlist">
      <DisplayFlexStyle bottom={3}>
        <MarginSpaceStyle left={42} top={3}>
          <h3>Estações de Trabalho</h3>
        </MarginSpaceStyle>
        <MarginSpaceStyle top={3} left={15}>
          <WorksCenterButton>CENTROS DE TRABALHO</WorksCenterButton>
        </MarginSpaceStyle>
      </DisplayFlexStyle>

      <div id="ws-content">
        <MarginSpaceStyle left={10} right={10} bottom={10}>
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
              {dataOS.map((post) => (
                <div id="ws-table-data" onClick={() => alert("clicou!")}>
                  <p>{post.name}</p>
                  <p>{post.description}</p>
                  <p>{post.production}</p>
                  <p>{post.oee}%</p>
                  <p>{post.cach_in_word ? "Sim" : "Não"}</p>
                  <p>{post.discount_scrap ? "Sim" : "Não"}</p>
                </div>
              ))}
            </div>
          </div>
        </MarginSpaceStyle>
      </div>
    </div>
  );
}
