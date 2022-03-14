import React from "react";
import MaterialIcon from "react-google-material-icons";

import {
  useWorkstation,
  WorkstationActions,
} from "../../../contexts/workstation/workstation";

import "../drop/style.css";

export default function Drop() {
  const { stateWorkstation, dispatch } = useWorkstation();

  const handleWorkstationClear = () => {
    dispatch({
      type: WorkstationActions.reset,
    });
  };

  return (
    <div id="drop">
      <a href="/" onClick={() => handleWorkstationClear()}>
        <p id="icon">
          <MaterialIcon id="dropdawn" icon="home" size={20} />
        </p>
        <p>INÍCIO</p>
      </a>
      <a href="/workstation" onClick={() => handleWorkstationClear()}>
        <p id="icon">
          <MaterialIcon id="dropdawn" icon="view_agenda" size={20} />
        </p>{" "}
        <p>ESTAÇÕES</p>
      </a>
      <a href="/registercolector" onClick={() => handleWorkstationClear()}>
        <p id="icon">
          <MaterialIcon id="dropdawn" icon="settings_remote" size={20} />
        </p>{" "}
        <p>COLETORES</p>
      </a>
      <a href="/" onClick={() => handleWorkstationClear()}>
        <p id="icon">
          <MaterialIcon id="dropdawn" icon="settings" size={20} />
        </p>{" "}
        <p>CONFIGURAÇÕES</p>
      </a>
    </div>
  );
}
