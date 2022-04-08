import React from "react";
import MaterialIcon from "react-google-material-icons";
import Begin from "../../../assets/lateral-menu/home.svg";
import Workstations from "../../../assets/lateral-menu/view_agenda.svg";
import Colectors from "../../../assets/lateral-menu/settings_remote.svg";
import Configurations from "../../../assets/lateral-menu/settings.svg";

import {
  useWorkstation,
  WorkstationActions,
} from "../../../contexts/workstation/workstation";
import { MarginSpaceStyle } from "../../../styles/style";

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
      <a href="/machines" onClick={() => handleWorkstationClear()}>
        <p id="icon">
          {/* <MaterialIcon id="dropdawn" icon="home" size={20} /> */}
          <MarginSpaceStyle top={-10}>
            <img src={Begin} width={25} />
          </MarginSpaceStyle>
        </p>
        <p>INÍCIO</p>
      </a>
      <a href="/workstation" onClick={() => handleWorkstationClear()}>
        <p id="icon">
          <MarginSpaceStyle top={-10}>
            <img src={Workstations} />
          </MarginSpaceStyle>
        </p>{" "}
        <p>ESTAÇÕES</p>
      </a>
      <a href="/collector" onClick={() => handleWorkstationClear()}>
        <p id="icon">
          <MarginSpaceStyle top={-10}>
            <img src={Colectors} />
          </MarginSpaceStyle>
        </p>{" "}
        <p>COLETORES</p>
      </a>
      <a href="/" onClick={() => handleWorkstationClear()}>
        <p id="icon">
          <MarginSpaceStyle top={-10}>
            <img src={Configurations} />
          </MarginSpaceStyle>
        </p>{" "}
        <p>CONFIGURAÇÕES</p>
      </a>
    </div>
  );
}
