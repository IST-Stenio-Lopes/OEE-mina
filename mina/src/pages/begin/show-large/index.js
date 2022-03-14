import React, { Component } from "react";
import MaterialIcon from "react-google-material-icons";
import Workstation from "../../../components/workstation";
import {
  useWorkstation,
  WorkstationActions,
} from "../../../contexts/workstation/workstation";
import Data from "../../../mock-data.json";
import { oeeValue } from "../../../utils/utilities";
import { formatWord } from "../../../utils/utilities";
import { getStateMachine } from "../../../utils/utilities";
import { getNameStateIcon } from "../../../utils/utilities";
import ApexChart from "../percentBar";
//import { DateStatusControll, LinhaL, NameTop, StatusColor } from './style';
import { LinhaL, NameTop, StatusColor, DateStatusControll } from "./style";

import "../show-large/style.css";
import { useNavigate } from "react-router-dom";

export default function ShowLarge({ description }) {
  //<Container background='#00FF00'/>

  const { dispatch } = useWorkstation();

  const handleWorkstationId = (id) => {
    dispatch({
      type: WorkstationActions.setId,
      payload: id,
    });
  };

  const navigate = useNavigate();

  return (
    <div id="showLarger-expand">
      {Data.map(
        (post) => (
          (description = post.description),
          (
            <div
              id="principal"
              onClick={() => {
                /* handleWorkstationId(post.id); */
                navigate("/workstation/details", { state: { id: post.id } });
              }}
            >
              <div id="conteudo1">
                <div id="superior" className="row">
                  <div className="col-6">
                    <NameTop description={post.description}>
                      0{post.id} {getStateMachine(post.description)}
                    </NameTop>
                  </div>
                  <div className="col-6 row">
                    <div className="col-9">
                      <div id="horas">
                        <DateStatusControll description={post.description}>
                          D|H|M|S
                        </DateStatusControll>
                      </div>
                    </div>
                    <div className="col-3">
                      <StatusColor description={post.description}>
                        <MaterialIcon
                          icon={getNameStateIcon(post.description)}
                          size={20}
                        />
                      </StatusColor>
                    </div>
                  </div>
                </div>
                <div id="inferior">
                  <h1>{formatWord(post.name)}</h1>
                </div>

                <LinhaL description={post.description} />
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

              <div id="conteudo2">
                <div className="informacoes">
                  <ApexChart oee={post.oee} />
                  <p id="oee">OEE = {oeeValue(post.oee)}</p>
                </div>
                <div className="informacoes">
                  <div className="segundo">
                    <p id="aprovados">{post.production}</p>
                    APROVADAS
                  </div>
                </div>
                <div className="informacoes">3</div>
              </div>
            </div>
          )
        )
      )}

      <br />
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
