import React, { useEffect, useState } from "react";
import Modal from "../../../components/modal";
import {
  DisplayFlexStyle,
  DisplayGridStyle,
  MarginSpaceStyle,
} from "../../../styles/style";
import { HasPermission } from "../../../utils/utilities";
import {
  BoxTitleAndSubtitleCollectorChannel,
  CloseButtonCollectorChannel,
  ContainerRegisterChannel,
  FieldNameRegisterCollectorChannel,
  PrincipalContainerModalCollectorChannel,
  TableFieldCollectorChannel,
  TableValuesCollectorChannel,
} from "./style";
import Warning from "../../../assets/warning.svg";
import Interruptor2 from "../../../components/inputs/interruptor/index2";
import NormalInput from "../../../components/inputs/normal";
import ReactSelect from "../../../components/inputs/react-select";
import { SaveButton } from "../../workstation/workstation-register/style";

export default function CollectorChannels({ post, setShowModal }) {
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
          <h5>Canais do Coletor: {post.identification}</h5>
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
                    <Interruptor2 />
                  </DisplayGridStyle>

                  <DisplayGridStyle left={window.screen.width < 1600 ? 5 : 10}>
                    <FieldNameRegisterCollectorChannel>
                      Número/Código do Canal:
                    </FieldNameRegisterCollectorChannel>
                    <NormalInput size={window.screen.width > 1600 ? 20 : 25} />
                  </DisplayGridStyle>

                  <DisplayGridStyle left={window.screen.width < 1600 ? 5 : 10}>
                    <FieldNameRegisterCollectorChannel>
                      Tipo do Canal
                    </FieldNameRegisterCollectorChannel>
                    <ReactSelect
                      array={[
                        { value: "a", label: "Não sei" },
                        { value: "b", label: "Não sei também" },
                      ]}
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
                      array={[
                        { value: "a", label: "Prensa Manegotto" },
                        {
                          value: "b",
                          label: "Assimilated demand drive archive",
                        },
                      ]}
                    />
                  </DisplayGridStyle>

                  <DisplayGridStyle>
                    Acumulativo:
                    <Interruptor2 />
                  </DisplayGridStyle>
                </DisplayFlexStyle>
                <MarginSpaceStyle
                  top={5}
                  left={window.screen.width < 1600 ? 80 : 60}
                >
                  <SaveButton>Salvar</SaveButton>
                </MarginSpaceStyle>
              </div>
            )}
          </DisplayFlexStyle>

          <TableFieldCollectorChannel>
            <p>Ativo</p>
            <p>Número/Código</p>
            <p>Tipo</p>
            <p>Contagem Acumulativa</p>
          </TableFieldCollectorChannel>
          <TableValuesCollectorChannel>
            {post.channels.map((post) => (
              <div>
                <p>{post.active ? "sim " : " não"}</p>
                <p>{post.channel}</p>
                <p>{post.type}</p>
                <p>{post.acumulative ? "sim " : " não"}</p>
              </div>
            ))}
          </TableValuesCollectorChannel>
        </ContainerRegisterChannel>
      </PrincipalContainerModalCollectorChannel>
    </Modal>
  );
}
