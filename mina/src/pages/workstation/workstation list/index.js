import Button from "@material-ui/core/Button";
import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Data from "../../../mock-data.json";
import { deleteWorkstation, listWorkstationsBegin } from "../../../services/workstation";
import { DisplayFlexStyle, MarginSpaceStyle } from "../../../styles/style";
import { WorksCenterButton } from "./style";
import Delete from "../../../assets/delete.svg";
import "./style.css";

export default function WorkstationList() {
  let navigate = useNavigate();
  const [dataWorkstations, setDataWorkstations] = useState();
  const [dataOS, setDataOS] = useState(Data);

  const getListWorkstations = useCallback(async () => {
    const res = await listWorkstationsBegin();

    setDataWorkstations(res);
  }, []);

  useEffect(() => {
    getListWorkstations();
  }, []);

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
              <p>Remover</p>
            </div>
            <div>
              {dataWorkstations &&
                dataWorkstations.object_list.map((post) => (
                  <div
                    id="ws-table-data"
                    /* onClick={() => {
                    navigate("/workstation/details", {
                      state: { id: post.id },
                    });
                  }} */
                  >
                    <p>{post.name}</p>
                    <p>{post.name}</p>
                    <p>{post.production_per_hour}</p>
                    <p>{post.oee}%</p>
                    <p>{post.cach_in_word ? "Sim" : "Não"}</p>
                    <p>{post.discount_scrap ? "Sim" : "Não"}</p>
                    <p>
                      <img onClick={() => deleteWorkstation(post.id)} src={Delete} />
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </MarginSpaceStyle>
      </div>
    </div>
  );
}
