import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  DisplayFlexStyle,
  DisplayGridStyle,
  MarginSpaceStyle,
} from "../../styles/style";
import {
  BoxPrincipalDivCollectors,
  ButtonAddCollector,
  DataTableCollector,
  DescriptionTableCollector,
} from "./style";
import CollectorsData from "./mock-collectors.json";
import Visibility from "../../assets/visibility.svg";
import Edit from "../../assets/edit.svg";
import Remove from "../../assets/delete.svg";
import Interruptor2 from "../../components/inputs/interruptor/index2";
import { useNavigate } from "react-router-dom";
import { HasPermission } from "../../utils/utilities";
import { AlertActions, useAlert } from "../../contexts/alert/alert";
import CollectorChannels from "./modal-channels";
import Check from "../../assets/machine-begin/check.svg";
import False from "../../assets/close.svg";
import { DeleteCollector, listCollectors } from "../../services/collector";
import moment from "moment";

export default function Collectors() {
  const { dispatch } = useAlert();
  let navigate = useNavigate();
  const [dataCollectors, setDataCollectors] = useState();
  const [responseDelete, setResponseDelete] = useState();

  const [showModal, setShowModal] = useState(false);
  const [selectedCollectorChannel, setSelectedCollectorChannel] = useState();

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

  const getListColectors = useCallback(async () => {
    const res = await listCollectors();

    setDataCollectors(res);
  }, []);

  const deleteColector = useCallback(async (id) => {
    const res = await DeleteCollector(id);
    //setResponseDelete(res);
    res === 201
      ? handleAlertSetValues("success", "ok", "Coletor removido com sucesso!")
      : handleAlertSetValues("error", "", res);
  }, []);

  useEffect(() => {
    getListColectors();
  }, []);

  return (
    <MarginSpaceStyle>
      {showModal && (
        <CollectorChannels
          post={selectedCollectorChannel}
          setShowModal={setShowModal}
        />
      )}
      <BoxPrincipalDivCollectors>
        <DisplayGridStyle>
          <DisplayFlexStyle>
            <h1>Gerenciamento de coletores</h1>
            <button
              onClick={() => {
                console.log(dataCollectors && dataCollectors.object_list); //Se essa variavel nn existir, então nn foi um erro do servidor
              }}
            >
              teste requisition
            </button>
            <MarginSpaceStyle left={60}>
              <ButtonAddCollector
                onClick={() => {
                  HasPermission(
                    [32768, 245760, -2147221506],
                    parseInt(localStorage.getItem("@Oee:role"), 10)
                  )
                    ? navigate("/registercolector")
                    : handleAlertSetValues(
                        "error",
                        "Sem Permissão",
                        "Você não possui Permissão suficiente para adicionar um coletor!"
                      );
                }}
              >
                + ADICIONAR
              </ButtonAddCollector>
            </MarginSpaceStyle>
          </DisplayFlexStyle>
          <DescriptionTableCollector>
            <p>Identificação do coletor</p>
            <p>Tipo</p>
            <p>Última Atualização</p>
            <p>Canais</p>
            <p>Ativo</p>
            <p>Editar</p>
            <p>Remover</p>
          </DescriptionTableCollector>
          <DataTableCollector>
            {dataCollectors &&
              dataCollectors.object_list.map((post) => (
                <div>
                  <p>{post.name}</p>
                  <p>{post.type}</p>
                  <p>
                    {post.updated_at
                      ? moment(post.updated_at).format("DD / MM / YYYY") +
                        "  " +
                        moment(post.updated_at).format("hh:mm")
                      : "Não registrada"}
                  </p>
                  <p>
                    <img
                      src={Visibility}
                      onClick={() => {
                        setSelectedCollectorChannel(post);
                        setShowModal(true);
                        console.log(showModal);
                      }}
                    />
                  </p>
                  <p>
                    <MarginSpaceStyle left={16}>
                      {HasPermission(
                        [32768, 245760, -2147221506],
                        parseInt(localStorage.getItem("@Oee:role"), 10)
                      ) ? (
                        <Interruptor2 state={post.active} />
                      ) : post.active ? (
                        <MarginSpaceStyle left={10}>
                          <img src={Check} />
                        </MarginSpaceStyle>
                      ) : (
                        <MarginSpaceStyle left={10}>
                          <img src={False} />
                        </MarginSpaceStyle>
                      )}
                    </MarginSpaceStyle>
                  </p>
                  <p>
                    <img
                      src={Edit}
                      onClick={() => {
                        HasPermission(
                          [32768, 245760, -2147221506],
                          parseInt(localStorage.getItem("@Oee:role"), 10)
                        )
                          ? alert("ok")
                          : handleAlertSetValues(
                              "error",
                              "Sem Permissão",
                              "Você não possui Permissão suficiente para editar um coletor!"
                            );
                      }}
                    />
                  </p>
                  <p>
                    <img
                      src={Remove}
                      onClick={() => {
                        HasPermission(
                          [32768, 245760, -2147221506],
                          parseInt(localStorage.getItem("@Oee:role"), 10)
                        )
                          ? deleteColector(post.id)
                          : handleAlertSetValues(
                              "error",
                              "Sem Permissão",
                              "Você não possui Permissão suficiente para remover um coletor!"
                            );
                        //responseDelete
                      }}
                    />
                  </p>
                </div>
              ))}
          </DataTableCollector>
        </DisplayGridStyle>
      </BoxPrincipalDivCollectors>
    </MarginSpaceStyle>
  );
}
