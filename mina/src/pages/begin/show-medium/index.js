import React, { useState, useCallback, useEffect } from "react";
import MaterialIcon from "react-google-material-icons";
import { useNavigate } from "react-router-dom";
import {
  useWorkstation,
  WorkstationActions,
} from "../../../contexts/workstation/workstation";
//import Data from "../../../mock-data.json";
import { listWorkstationsBegin } from "../../../services/workstation";
import { oeeValue } from "../../../utils/utilities";
import { formatWord, getStateMachine } from "../../../utils/utilities";
import ApexChart from "../percentBar";
import { LinhaL, MachineName, NameTop } from "../show-large/style";

import "../show-medium/style.css";

export default function ShowMedium() {
  const [dataWorkstations, setDataWorkstations] = useState();
  const { dispatch } = useWorkstation();
  const navigate = useNavigate();

  const getListWorkstations = useCallback(async () => {
    const res = await listWorkstationsBegin();

    setDataWorkstations(res);
  }, []);

  useEffect(() => {
    getListWorkstations();
  }, []);

  const handleWorkstationId = (id) => {
    dispatch({
      type: WorkstationActions.setId,
      payload: id,
    });
  };

  return (
    <div id="showMedium-expand">
      {dataWorkstations &&
        dataWorkstations.object_list.map((post) => (
          <div
            id="principal-medium"
            /* onClick={() => {
            handleWorkstationId(post.id);
          }} */
            onClick={() => {
              navigate("/workstation/details", { state: { id: post.id } });
            }}
          >
            <div id="conteudo1-medium">
              <div id="superior">
                <NameTop id="nameTop" description={post.status}>
                  {getStateMachine(post.status)}
                </NameTop>
              </div>
              <div id="inferior">
                <MachineName>{formatWord(post.name)}</MachineName>
              </div>
            </div>
            <div id="settingLine">
              <LinhaL description={post.status} />
            </div>

            <div id="icons">
              <div id="icon">
                <a>
                  <MaterialIcon icon="vpn_key" size={20} />
                </a>
                <p>0000</p>
              </div>
              <div id="icon2">
                <a>
                  <MaterialIcon icon="inventory2" size={20} />
                </a>
                <p>0000</p>
              </div>
            </div>

            <div id="conteudo2-medium">
              <div className="informacoes">
                <ApexChart oee={post.oee} />
                <p id="oee">OEE = {oeeValue(87)}</p>
              </div>
              <div className="informacoes">
                <div className="segundo">
                  <p id="aprovados">{post.approved}</p>
                  APROVADAS
                </div>
              </div>
            </div>
          </div>
        ))}
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
