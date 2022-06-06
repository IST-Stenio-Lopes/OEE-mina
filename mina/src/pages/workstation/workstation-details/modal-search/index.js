import moment from "moment";
import { useEffect, useState } from "react";

import DateInput from "../../../../components/inputs/date";
import DateAndTimeInput from "../../../../components/inputs/date-time";
import ReactSelect from "../../../../components/inputs/react-select";
import Modal from "../../../../components/modal";
import { AlertActions, useAlert } from "../../../../contexts/alert/alert";
import { DisplayFlexStyle, MarginSpaceStyle } from "../../../../styles/style";
import { CancelButton, SaveButton } from "../../workstation-register/style";
import {
  CloseButtonAddOrder as CloseButtonSearchOee,
  ContainerModalOrder as ContainerModalSearch,
} from "../modal-order/style";
import { ReactSelectSearchOee } from "./style";

export default function ModalSearchOee({
  close,
  array,
  setDate,
  setShift,
  date,
  shift,
  send,
}) {
  const [dateBegin, setDateBegin] = useState();
  const [newArrayList, setNewArrayList] = useState();
  const { dispatch, stateAlert } = useAlert();
  // const [a]

  // 0:{hour_begin: '10:00', hour_end: '13:15', id: 0}
  // 1: {hour_begin: '14:00', hour_end: '16:00', id: 1}

  // array={[
  //   { value: "Boa", label: "Boa" },
  //   { value: "Retrabalho", label: "Retrabalho" },
  //   { value: "Refugo", label: "Refugo" },
  // ]}

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

  function changeObjectArrayToList(array) {
    let newArray = [];
    array.map((post) => {
      newArray.push({
        value: { hour_begin: post.hour_begin, hour_end: post.hour_end },
        label: post.hour_begin + " AS " + post.hour_end,
      });
    });
    return newArray;
  }

  function sandObjectToFather() {
    if (date) {
      //alert(shift);
      // setDate(dateBegin);
      // setShift(newArrayList);
      send();
      close();
    } else {
      handleAlertSetValues("error", "Erro", "Preencha o dia desejado!");
    }
  }

  // useEffect(() => {
  //console.log(dateBegin);
  // }, [dateBegin]);

  //console.log(array[1]);
  return (
    <Modal>
      <ContainerModalSearch>
        <DisplayFlexStyle>
          <h1>Pesquisar OEE em um periodo especifico</h1>

          <a>
            <CloseButtonSearchOee
              onClick={() => {
                close();
              }}
            >
              X
            </CloseButtonSearchOee>
          </a>
        </DisplayFlexStyle>

        <DisplayFlexStyle top={7}>
          {/* <DateAndTimeInput
            title="Data e Hora do Inicio da Ordem"
            setInputValue={setDateBegin} //setDateBegin
          /> */}
          <DateInput
            title="Selecione o dia desejado"
            // setInputValue={setDateBegin}
            setInputValue={setDate}
          />
          <MarginSpaceStyle left={5}>
            <ReactSelect
              array={changeObjectArrayToList(array)}
              placeholder={"Selecione um periodo"}
              // onChange={(v) => setNewArrayList(v.value)}
              onChange={(v) => setShift(v.value)}
            />
          </MarginSpaceStyle>
        </DisplayFlexStyle>
        <MarginSpaceStyle left={window.screen.width <= 1600 ? 6 : 26} top={25}>
          <DisplayFlexStyle>
            <CancelButton
              onClick={() => {
                // handleClear();
                close();
              }}
            >
              Cancelar
            </CancelButton>
            <MarginSpaceStyle left={10}>
              <SaveButton
                onClick={() => {
                  sandObjectToFather();
                  //send();
                  //console.log(stateStop);
                }}
              >
                Salvar
              </SaveButton>
            </MarginSpaceStyle>
          </DisplayFlexStyle>
        </MarginSpaceStyle>
      </ContainerModalSearch>
    </Modal>
  );
}
