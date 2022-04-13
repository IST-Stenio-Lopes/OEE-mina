import React, { useState, useRef, useEffect, useCallback } from "react";
import { CancelButton, SaveButton } from "../../workstation-register/style";
import {
  AlignCenterStyle,
  DisplayFlexStyle,
  DisplayGridStyle,
  MarginSpaceStyle,
} from "../../../../styles/style";
import NormalInput from "../../../../components/inputs/normal";
import ReactSelect from "../../../../components/inputs/react-select";
import WithPromises from "../../../../components/inputs/react-select";
import Select from "../../../../components/inputs/select";
import Modal from "../../../../components/modal";
import {
  CloseButtonStopWorkstation,
  ContainerModalStopWorkstation,
  FieldNameStopWorkstation,
} from "./style";
import { StopActions, useStop } from "../../../../contexts/stop/stop";
import { useWorkstation } from "../../../../contexts/workstation/workstation";

export default function ModalStopWorkstation(props) {
  const [firstOptionCategory, setFirstOptionCategory] = useState(0);
  const [secondOptionCategory, setSecondOptionCategory] = useState("");
  const [reason_code, setReason_code] = useState("");
  const [estimated_date, setEstimated_date] = useState("");
  const [oEquipament, setOEquipament] = useState("");

  const { stateStop, dispatch } = useStop();

  const FirstSelectOptions = [
    { value: "A", label: "Manutenção" },
    { value: "B", label: "Falta de Ferramentas/Dispositivos" },
    { value: "C", label: "Setup Programado" },
    { value: "D", label: "Regulagens e Ajustes" },
    { value: "E", label: "Falta de Pessoas" },
    { value: "F", label: "Qualidade de Matéria Prima" },
    { value: "X", label: "Programa em Dia" },
  ];
  const SelectOptionsA = [
    { value: "A01", label: "Man.Mecânica" },
    { value: "A02", label: "Man. Preventiva" },
    { value: "A03", label: "Limp. Máquina" },
  ];
  const SelectOptionsB = [{ value: "B01", label: "Falta de ferramenta" }];
  const SelectOptionsC = [{ value: "C01", label: "Setup Programado" }];
  const SelectOptionsD = [
    { value: "D01", label: "Ajustes/Regul. de Máq." },
    { value: "D02", label: "Ajustes Ferram." },
    { value: "D03", label: "Troca de Ferram. - desgaste" },
    { value: "D04", label: "Troca de Ferram. - Quebra" },
    { value: "D05", label: "Trancamentos Diversos" },
  ];
  const SelectOptionsE = [
    { value: "E01", label: "Reunião" },
    { value: "E02", label: "Reunião Geral" },
    { value: "E03", label: "Falta de Operador" },
    { value: "E04", label: "Falta de Operador Programado" },
    { value: "E05", label: "Falta Operador Qualificado" },
  ];
  const SelectOptionsF = [
    { value: "F01", label: "Falha de Mat. Prima" },
    { value: "F02", label: "Desvio Qualid. Mat. Prima" },
    { value: "F03", label: "Desvio Qualid. Prod." },
  ];
  const SelectOptionsX = [
    { value: "X01", label: "Refeição" },
    { value: "X02", label: "Falta de Energia" },
    { value: "X03", label: "Sem programa" },
    { value: "X04", label: "Protótipos/Testes" },
  ];
  const selectRef = useRef(null);

  /* useEffect(() => {}, []); */

  function ReturnSelect() {
    if (firstOptionCategory === "A") {
      return SelectOptionsA;
    } else if (firstOptionCategory === "B") {
      return SelectOptionsB;
    } else if (firstOptionCategory === "C") {
      return SelectOptionsC;
    } else if (firstOptionCategory === "D") {
      return SelectOptionsD;
    } else if (firstOptionCategory === "E") {
      return SelectOptionsE;
    } else if (firstOptionCategory === "F") {
      return SelectOptionsF;
    } else if (firstOptionCategory === "X") {
      return SelectOptionsX;
    }
  }

  const setReasonCode = (reason) => {
    dispatch({
      type: StopActions.setReason_code,
      payload: reason,
    });
  };

  const handleStopChange = (equipament, date, code) => {
    dispatch({
      type: StopActions.setEquipament,
      payload: equipament,
    });
    dispatch({
      type: StopActions.setEstimated_date,
      payload: date,
    });
    dispatch({
      type: StopActions.setReason_code,
      payload: code,
    });
  };

  const handleClear = () => {
    dispatch({
      type: StopActions.reset,
    });
  };

  function SendObjectStop() {
    if (secondOptionCategory === "") {
      alert("Deve ser preenchido o código do motivo");
    } else if (estimated_date === "") {
      alert("Deve ser preenchido o tempo estimado");
    } else {
      setReason_code(secondOptionCategory);
      handleStopChange(oEquipament, estimated_date, secondOptionCategory);
      alert("ok");
    }
  }

  const handleSelectChange = useCallback((selectValue) => {
    console.log(selectValue.value);
    setFirstOptionCategory(selectValue.value);
    ReturnSelect();
  }, []);

  const handleSelectChangeCode = useCallback((selectValue) => {
    setSecondOptionCategory(selectValue.value);
  }, []);

  return (
    <Modal>
      <h1>{stateStop.reason_code}</h1>
      <ContainerModalStopWorkstation>
        <DisplayFlexStyle>
          <h1>Apontar Parada</h1>
          <a>
            <CloseButtonStopWorkstation
              onClick={() => {
                props.close();
                stateStop.reset();
                handleClear();
              }}
            >
              x
            </CloseButtonStopWorkstation>
          </a>
        </DisplayFlexStyle>

        <DisplayGridStyle>
          <FieldNameStopWorkstation>Motivo da Parada</FieldNameStopWorkstation>
          <MarginSpaceStyle bottom={4} top={-2}>
            <ReactSelect
              selectRefProp={selectRef}
              array={FirstSelectOptions}
              onChange={handleSelectChange}
              placeholder={"Selecione o motivo"}
            />
          </MarginSpaceStyle>
          <FieldNameStopWorkstation>Código do Motivo</FieldNameStopWorkstation>
          <MarginSpaceStyle top={-2}>
            <ReactSelect
              /*  selectRef={selectRef} */
              array={ReturnSelect()}
              handleChange={(v) => setFirstOptionCategory(v)}
              onChange={handleSelectChangeCode}
              placeholder={"Selecione o código do motivo"}
            />
          </MarginSpaceStyle>
          <DisplayFlexStyle top={4}>
            <MarginSpaceStyle right={10}>
              <FieldNameStopWorkstation>Equipamento</FieldNameStopWorkstation>
              <NormalInput size={25} setValueInput={setOEquipament} />
            </MarginSpaceStyle>
            <MarginSpaceStyle>
              <FieldNameStopWorkstation>
                Tempo estimado de parada
              </FieldNameStopWorkstation>
              <NormalInput size={25} setValueInput={setEstimated_date} />
            </MarginSpaceStyle>
          </DisplayFlexStyle>

          <MarginSpaceStyle left={window.screen.width <= 1600 ? 6 : 26} top={6}>
            <DisplayFlexStyle>
              <CancelButton
                onClick={() => {
                  handleClear();
                  props.close();
                }}
              >
                Cancelar
              </CancelButton>
              <MarginSpaceStyle left={10}>
                <SaveButton
                  onClick={() => {
                    SendObjectStop();
                    console.log(stateStop);
                  }}
                >
                  Salvar
                </SaveButton>
              </MarginSpaceStyle>
            </DisplayFlexStyle>
          </MarginSpaceStyle>
        </DisplayGridStyle>
      </ContainerModalStopWorkstation>
    </Modal>
  );
}
