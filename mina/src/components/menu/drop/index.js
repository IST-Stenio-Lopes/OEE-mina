import React from "react";
import MaterialIcon from "react-google-material-icons";
import { useNavigate } from "react-router-dom";

import Begin from "../../../assets/lateral-menu/home.svg";
import Colectors from "../../../assets/lateral-menu/settings_remote.svg";
import Configurations from "../../../assets/lateral-menu/settings.svg";
import Workstations from "../../../assets/lateral-menu/view_agenda.svg";
import {
  useWorkstation,
  WorkstationActions,
} from "../../../contexts/workstation/workstation";
import { MarginSpaceStyle } from "../../../styles/style";

import "../drop/style.css";

export default function Drop({ onCloseMenu }) {
  const { stateWorkstation, dispatch } = useWorkstation();
  const navigate = useNavigate();

  const handleWorkstationClear = () => {
    dispatch({
      type: WorkstationActions.reset,
    });
  };

  return (
    <div id="drop">
      <a
        onClick={() => {
          navigate("/machines");
          handleWorkstationClear();
          onCloseMenu();
        }}
      >
        <div id="icon">
          {/* <MaterialIcon id="dropdawn" icon="home" size={20} /> */}
          <MarginSpaceStyle top={-10}>
            <img src={Begin} width={25} />
          </MarginSpaceStyle>
        </div>
        <p>INÍCIO</p>
      </a>
      <a
        onClick={() => {
          navigate("/workstation");
          handleWorkstationClear();
          onCloseMenu();
        }}
      >
        <div id="icon">
          <MarginSpaceStyle top={-10}>
            <img src={Workstations} />
          </MarginSpaceStyle>
        </div>{" "}
        <p>ESTAÇÕES</p>
      </a>
      <a
        onClick={() => {
          navigate("/collector");
          handleWorkstationClear();
          onCloseMenu();
        }}
      >
        <div id="icon">
          <MarginSpaceStyle top={-10}>
            <img src={Colectors} />
          </MarginSpaceStyle>
        </div>{" "}
        <p>COLETORES</p>
      </a>
      <a
        onClick={() => {
          navigate("/");
          handleWorkstationClear();
          onCloseMenu();
        }}
      >
        <div id="icon">
          <MarginSpaceStyle top={-10}>
            <img src={Configurations} />
          </MarginSpaceStyle>
        </div>{" "}
        <p>CONFIGURAÇÕES</p>
      </a>
    </div>
  );
}
