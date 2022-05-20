import Button from "@material-ui/core/Button";
import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Data from "../../../mock-data.json";
import {
  deleteWorkstation,
  listWorkstationsBegin,
  postWorkstation,
} from "../../../services/workstation";
import { DisplayFlexStyle, MarginSpaceStyle } from "../../../styles/style";
import { WorksCenterButton } from "./style";
import Delete from "../../../assets/delete.svg";
import Edit from "../../../assets/edit.svg";
import "./style.css";
import { useAlert, AlertActions } from "../../../contexts/alert/alert";
import { HasPermission } from "../../../utils/utilities";

export default function WorkstationList() {
  let navigate = useNavigate();
  const [dataWorkstations, setDataWorkstations] = useState();
  const [dataOS, setDataOS] = useState(Data);
  const { dispatch } = useAlert();

  const getListWorkstations = useCallback(async () => {
    const res = await listWorkstationsBegin();

    setDataWorkstations(res);
  }, []);

  useEffect(() => {
    getListWorkstations();
  }, []);

  const handleAlertSetValues = (type, title, msg) => {
    dispatch({
      type: AlertActions.setVisibility,
      payload: true,
    });
    dispatch({
      type: AlertActions.setType,
      payload: type,
    });
    dispatch({
      type: AlertActions.setTitle,
      payload: title,
    });
    dispatch({
      type: AlertActions.setMsg,
      payload: msg,
    });
  };

  async function deleteWorkstationByClick(id) {
    if (
      HasPermission(
        [1024, 15360, 536887168, 1073758094, -2147221506],
        parseInt(localStorage.getItem("@Oee:role"), 10)
      ) === false
    ) {
      handleAlertSetValues(
        "error",
        "sem permissão",
        "Você não possui permissão para remover maquina!"
      );
    } else {
      var remove = await deleteWorkstation(id);
      //console.log(remove);
      if (remove && remove === 201) {
        setInterval(() => {
          window.location.reload();
        }, 1000);

        handleAlertSetValues(
          "success",
          "Tudo Certo!",
          "Maquina Removida com Sucesso!"
        );
      } else {
        handleAlertSetValues("error", "Ops", remove);
      }
    }
  }

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
              <p>Editar</p>
              <p>Remover</p>
            </div>
            <div>
              {dataWorkstations &&
                dataWorkstations.object_list.map((post) => (
                  <div
                    key={post.id}
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
                      <img
                        src={Edit}
                        onClick={() => {
                          navigate("/workstation/register", {
                            state: { object: post },
                          });
                        }}
                      />
                    </p>
                    <p>
                      <img
                        onClick={() => deleteWorkstationByClick(post.id)}
                        src={Delete}
                      />
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
