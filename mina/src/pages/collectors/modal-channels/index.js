import React, { useCallback, useEffect, useState } from "react";

import Remove from "../../../assets/delete.svg";
import Warning from "../../../assets/warning.svg";
import Interruptor2 from "../../../components/inputs/interruptor/index2";
import NormalInput from "../../../components/inputs/normal";
import ReactSelect from "../../../components/inputs/react-select";
import Modal from "../../../components/modal";
import { AlertActions, useAlert } from "../../../contexts/alert/alert";
import {
  deleteChannel,
  listChannels,
  postChannel,
} from "../../../services/channels";
import { listWorkstationsBegin } from "../../../services/workstation";
import {
  DisplayFlexStyle,
  DisplayGridStyle,
  MarginSpaceStyle,
} from "../../../styles/style";
import { HasPermission } from "../../../utils/utilities";
import { SaveButton } from "../../workstation/workstation-register/style";
import {
  BoxTitleAndSubtitleCollectorChannel,
  CloseButtonCollectorChannel,
  ContainerRegisterChannel,
  ContainerTableChannel,
  FieldNameRegisterCollectorChannel,
  PrincipalContainerModalCollectorChannel,
  TableFieldCollectorChannel,
  TableValuesCollectorChannel,
} from "./style";

export default function CollectorChannels({ post, setShowModal }) {
  const [dataWorkstations, setDataWorkstations] = useState();
  const [listWorkstations, setListWorkstations] = useState();
  const [dataChannels, setDataChannels] = useState();
  const { dispatch } = useAlert();

  const [active, setActive] = useState(false);
  const [channel, setChannel] = useState();
  const [type, setType] = useState();
  const [machineId, setMachineId] = useState();
  const [cumulative, setCumulative] = useState(false);

  const [changePage, setChangePage] = useState(false);

  const getListWorkstations = useCallback(async () => {
    const res = await listWorkstationsBegin();
    setDataWorkstations(res);
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

  useEffect(() => {
    getListWorkstations();
    getListChannels();
  }, [changePage]);

  useEffect(() => {
    dataWorkstations &&
      setListWorkstations(
        dataWorkstations.object_list.map((post) => ({
          value: post.id,
          label: post.name,
        }))
      );
  }, [dataWorkstations]);

  const getListChannels = useCallback(async () => {
    const res = await listChannels(post.id);
    setDataChannels(res);
  }, []);

  async function sendObjectCollectorAddChannel() {
    const newChannel = {
      machine_id: machineId,
      active: active,
      channel: parseInt(channel, 10),
      type: type,
      cumulative: cumulative,
    };
    const obj = { ...post, channels: [...post.channels, newChannel] };

    var requisition = await postChannel(post.id, obj);

    if (requisition && requisition === 201) {
      handleAlertSetValues("success", "Certo", "Canal cadastrado com sucesso!");
      setInterval(() => {
        window.location.reload();
      }, 1000);
      //console.log("chegou no if");
    } else {
      handleAlertSetValues("error", "Erro!", requisition);
      //console.log("chegou no else");
    }
  }

  /*   const deleteChannel = useCallback(async (channel) => {
    const obj = {
      ...post,
      channels: [...post.channels.splice(channel.indexOf(), 1)],
    };

    var requisition = await deleteChannel(post.id, obj);

    //const res = await DeleteCollector(id);
    //setResponseDelete(res);
    res === 201
      ? handleAlertSetValues("success", "ok", "Coletor removido com sucesso!")
      : handleAlertSetValues("error", "", res);
    setInterval(() => {
      window.location.reload();
    }, 1500);
  }, []); */

  async function sendObjectCollectorRemoveCollector(channel) {
    const channelsUpdated = [...post.channels];

    const obj = {
      ...post,
      channels: [
        ...channelsUpdated.filter((ch) => ch.channel !== channel.channel),
      ],
    };

    var requisition = await deleteChannel(post.id, obj);

    if (requisition && requisition === 201) {
      handleAlertSetValues("success", "Certo", "Canal Removido com sucesso!");
      setInterval(() => {
        window.location.reload();
      }, 1000);
      //console.log("chegou no if");
    } else {
      handleAlertSetValues("error", "Erro!", requisition);
      //console.log("chegou no else");
    }
  }

  return (
    <Modal>
      <PrincipalContainerModalCollectorChannel>
        <MarginSpaceStyle left={90}>
          <CloseButtonCollectorChannel
            onClick={() => {
              //handleClose();
              setShowModal(false);
            }}
          >
            X
          </CloseButtonCollectorChannel>
        </MarginSpaceStyle>
        <BoxTitleAndSubtitleCollectorChannel>
          <h5>Canais do Coletor: {post.name}</h5>
          <p>Cada Coletor possui um Conjunto de Canais Relacionados</p>
        </BoxTitleAndSubtitleCollectorChannel>

        <ContainerRegisterChannel>
          <p className="title">Cadastro de Canais</p>
          <DisplayFlexStyle top={4}>
            {!HasPermission(
              [2048, 15360, 536887168, 1073758094, -2147221506],
              parseInt(localStorage.getItem("@Oee:role"), 10)
            ) ? (
              <div>
                <img src={Warning} width={55} />
                Você não possui nivel de acesso suficiente para Cadastrar um
                coletor!
              </div>
            ) : (
              <div>
                <DisplayFlexStyle>
                  <DisplayGridStyle>
                    Ativo:
                    <Interruptor2
                      changeState={() => setActive(!active)}
                      state={active}
                    />
                  </DisplayGridStyle>

                  <DisplayGridStyle left={window.screen.width < 1600 ? 5 : 10}>
                    <FieldNameRegisterCollectorChannel>
                      Número/Código do Canal:
                    </FieldNameRegisterCollectorChannel>
                    <NormalInput
                      size={window.screen.width > 1600 ? 20 : 25}
                      setValueInput={setChannel}
                      onChange={setChannel}
                    />
                  </DisplayGridStyle>

                  <DisplayGridStyle left={window.screen.width < 1600 ? 5 : 10}>
                    <FieldNameRegisterCollectorChannel>
                      Tipo do Canal
                    </FieldNameRegisterCollectorChannel>
                    <ReactSelect
                      array={[
                        { value: "Boa", label: "Boa" },
                        { value: "Retrabalho", label: "Retrabalho" },
                        { value: "Refugo", label: "Refugo" },
                      ]}
                      onChange={(v) => setType(v.value)}
                    />
                  </DisplayGridStyle>

                  <DisplayGridStyle
                    left={window.screen.width < 1600 ? 5 : 10}
                    pright={window.screen.width < 1600 ? 5 : 10}
                  >
                    <FieldNameRegisterCollectorChannel>
                      Centro de Trabalho
                    </FieldNameRegisterCollectorChannel>
                    <ReactSelect
                      /* array={[
                        { value: "a", label: "Prensa Manegotto" },
                        {
                          value: "b",
                          label: "Assimilated demand drive archive",
                        },
                      ]} */
                      array={listWorkstations}
                      onChange={(v) => setMachineId(v.value)}
                    />
                  </DisplayGridStyle>

                  <DisplayGridStyle>
                    Acumulativo:
                    <Interruptor2
                      changeState={() => setCumulative(!active)}
                      state={cumulative}
                    />
                  </DisplayGridStyle>
                </DisplayFlexStyle>
                <MarginSpaceStyle
                  top={5}
                  left={window.screen.width < 1600 ? 80 : 60}
                >
                  <SaveButton onClick={() => sendObjectCollectorAddChannel()}>
                    Salvar
                  </SaveButton>
                </MarginSpaceStyle>
              </div>
            )}
          </DisplayFlexStyle>

          <ContainerTableChannel>
            <TableFieldCollectorChannel>
              <p>Ativo</p>
              <p>Número/Código</p>
              <p>Tipo</p>
              <p>Contagem Acumulativa</p>
              <p>Remover</p>
            </TableFieldCollectorChannel>
            <TableValuesCollectorChannel>
              {dataChannels &&
                dataChannels.map((channel) => (
                  <div key={channel.id}>
                    <p>{channel.active ? "sim " : " não"}</p>
                    <p>{channel.channel}</p>
                    <p>{channel.type}</p>
                    <p>{channel.cumulative ? "sim " : " não"}</p>
                    <p>
                      <img
                        src={Remove}
                        onClick={() => {
                          HasPermission(
                            [-2147221506],
                            parseInt(localStorage.getItem("@Oee:role"), 10)
                          )
                            ? sendObjectCollectorRemoveCollector(channel)
                            : handleAlertSetValues(
                                "error",
                                "Sem Permissão",
                                "Você não possui Permissão suficiente para remover um canal!"
                              );
                          //responseDelete
                        }}
                      />
                    </p>
                  </div>
                ))}
            </TableValuesCollectorChannel>
          </ContainerTableChannel>
        </ContainerRegisterChannel>
      </PrincipalContainerModalCollectorChannel>
    </Modal>
  );
}
