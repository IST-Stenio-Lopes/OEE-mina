import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  useWorkstation,
  WorkstationActions,
} from "../../../contexts/workstation/workstation";
import Data from "../../../mock-data.json";
import { listWorkstationsBegin } from "../../../services/workstation";
import { oeeValue } from "../../../utils/utilities";
import { formatWord } from "../../../utils/utilities";
import ApexChart from "../percentBar";
import { LinhaL, MachineName } from "../show-large/style";

import "../show-small/style.css";

export default function ShowSmall({ description, machine, socket }) {
  const [dataWorkstations, setDataWorkstations] = useState();
  const { dispatch } = useWorkstation();
  const navigate = useNavigate();
  const [localSocket, setLocalSocket] = useState();

  /* const getListWorkstations = useCallback(async () => {
    const res = await listWorkstationsBegin();

    setDataWorkstations(res);
  }, []); */

  /*   useEffect(() => {
    getListWorkstations();
  }, []); */

  useEffect(() => {
    setDataWorkstations(machine);
  }, [machine]);

  useEffect(() => {
    setLocalSocket(socket);
  }, [socket]);

  const getOeeFromSocket = useCallback((data) => {
    //console.log(data && data[0].oee_value);
    return (
      <>
        {data && data.length >= 1 ? (
          <>
            <ApexChart oee={data[0].oee_value} />
            <p id="oee">OEE = {data[0].oee_value}</p>
          </>
        ) : (
          <>
            <ApexChart oee={0} />
            <p id="oee">OEE = {0}</p>
          </>
        )}
      </>
    );
  }, []);

  const handleWorkstationId = (id) => {
    dispatch({
      type: WorkstationActions.setId,
      payload: id,
    });
  };

  return (
    <div id="showSmall-expand">
      {dataWorkstations &&
        dataWorkstations.object_list.map((post) => (
          <div
            key={post.id}
            id="principal-small"
            onClick={() => {
              navigate("/workstation/details", { state: { id: post.id } });
            }}
          >
            <div id="conteudo1-small">
              <div id="texto">
                <MachineName>{formatWord(post.name)}</MachineName>
              </div>
              <div id="settingLine">
                <LinhaL description={post.status} />
              </div>

              <div id="horas"></div>
            </div>
            <div id="icons-small">
              <div id="icon">
                <p>{post.order_code ? post.order_code : "-"}</p>
              </div>
              <div id="icon2">
                <p>{post.order_product ? post.order_product : "-"}</p>
              </div>
            </div>

            <div id="conteudo2-small">
              {getOeeFromSocket(
                localSocket?.filter((sk) => sk[0].machine_id === post.id)[0]
              )}
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
