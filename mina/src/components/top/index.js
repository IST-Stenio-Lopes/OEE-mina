import React from "react";
import { useNavigate } from "react-router-dom";

import { DisplayFlexStyle, MarginSpaceStyle } from "../../styles/style";
import Add from "./add";
import Search from "./search";
import Size from "./size";
import { ButtonAdd } from "./style";
import { AlertActions, useAlert } from "../../contexts/alert/alert";
import "../top/style.css";
import { HasPermission } from "../../utils/utilities";

export default function Top({ handleSizeChange }) {
  const { dispatch } = useAlert();
  let navigate = useNavigate();

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

  return (
    /*         <div id="top">
            <div id="top-1">
                <Search />
            </div>
            <div id="top-2">
                <Size handleChange={handleSizeChange}/>
            </div>
            <div id="top-3">
                <MarginSpaceStyle top={3}>
                    <ButtonAdd>+ ADICIONAR</ButtonAdd>
                </MarginSpaceStyle>
                
            </div>
        </div> */
    <DisplayFlexStyle top={3} left={7}>
      <MarginSpaceStyle width={49}>
        <Search />
      </MarginSpaceStyle>

      <MarginSpaceStyle width={12} left={3.5} top={-0.6}>
        <Size handleChange={handleSizeChange} />
      </MarginSpaceStyle>
      {/* navigate("/workstation/register") */}
      <MarginSpaceStyle left={2} top={-1}>
        <ButtonAdd
          onClick={() => {
            HasPermission(
              [2048, 15360, 536887168, 1073758094, -2147221506],
              parseInt(localStorage.getItem("@Oee:role"), 10)
            )
              ? navigate("/workstation/register")
              : handleAlertSetValues(
                  "error",
                  "Sem Permissão",
                  "Você não possui Permissão suficiente para Adicionar uma nova maquina!"
                );
          }}
        >
          + ADICIONAR
        </ButtonAdd>
      </MarginSpaceStyle>
    </DisplayFlexStyle>
  );
}
