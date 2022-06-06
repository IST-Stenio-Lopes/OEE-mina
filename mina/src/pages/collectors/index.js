import moment from "moment";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import False from "../../assets/close.svg";
import Remove from "../../assets/delete.svg";
import Edit from "../../assets/edit.svg";
import Check from "../../assets/machine-begin/check.svg";
import Visibility from "../../assets/visibility.svg";
import Interruptor2 from "../../components/inputs/interruptor/index2";
import { AlertActions, useAlert } from "../../contexts/alert/alert";
import {
  ChangeCollectorStatus,
  DeleteCollector,
  listCollectors,
} from "../../services/collector";
import {
  DisplayFlexStyle,
  DisplayGridStyle,
  MarginSpaceStyle,
} from "../../styles/style";
import { HasPermission } from "../../utils/utilities";
import CollectorsData from "./mock-collectors.json";
import CollectorChannels from "./modal-channels";
import {
  BoxPrincipalDivCollectors,
  ButtonAddCollector,
  DataTableCollector,
  DescriptionTableCollector,
} from "./style";

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
    setInterval(() => {
      window.location.reload();
    }, 1500);
  }, []);

  const changeStatusCollector = useCallback(async (id, status) => {
    const res = await ChangeCollectorStatus(id, status);
    res === 201
      ? handleAlertSetValues("success", "ok", "Coletor atualizado com sucesso!")
      : handleAlertSetValues("error", "", res);
    /*     setInterval(() => {
      window.location.reload();
 }, 1500); */
  });

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
                <div key={post.id}>
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
                        //console.log(showModal);
                      }}
                    />
                  </p>
                  <div id="adjustSize">
                    <MarginSpaceStyle left={5}>
                      {HasPermission(
                        [32768, 245760, -2147221506],
                        parseInt(localStorage.getItem("@Oee:role"), 10)
                      ) ? (
                        <Interruptor2
                          state={post.active}
                          click={() =>
                            changeStatusCollector(post.id, !post.active)
                          }
                        />
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
                  </div>
                  <p>
                    <img
                      src={Edit}
                      onClick={() => {
                        HasPermission(
                          [32768, 245760, -2147221506],
                          parseInt(localStorage.getItem("@Oee:role"), 10)
                        )
                          ? navigate("/registercolector", {
                              state: { object: post, nameToSend: "Alterar" },
                            })
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
