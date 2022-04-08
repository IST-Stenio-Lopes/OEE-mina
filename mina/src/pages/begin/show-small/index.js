import React from "react";
import { useNavigate } from "react-router-dom";
import {
  useWorkstation,
  WorkstationActions,
} from "../../../contexts/workstation/workstation";
import Data from "../../../mock-data.json";
import { oeeValue } from "../../../utils/utilities";
import { formatWord } from "../../../utils/utilities";
import ApexChart from "../percentBar";
import { LinhaL } from "../show-large/style";

import "../show-small/style.css";

export default function ShowSmall() {
  const { dispatch } = useWorkstation();
  const navigate = useNavigate();

  const handleWorkstationId = (id) => {
    dispatch({
      type: WorkstationActions.setId,
      payload: id,
    });
  };

  return (
    <div id="showSmall-expand">
      {Data.map((post) => (
        <div
          id="principal-small"
          onClick={() => {
            navigate("/workstation/details", { state: { id: post.id } });
          }}
        >
          <div id="conteudo1-small">
            <div id="texto">
              <h1>{formatWord(post.name)}</h1>
            </div>
            <div id="settingLine">
              <LinhaL description={post.description} />
            </div>

            <div id="horas"></div>
          </div>
          <div id="icons-small">
            <div id="icon">
              <p>0000</p>
            </div>
            <div id="icon2">
              <p>0000</p>
            </div>
          </div>

          <div id="conteudo2-small">
            <ApexChart oee={post.oee} />
            <p id="oee">OEE = {oeeValue(87)}</p>
          </div>
        </div>
      ))}
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
