import moment from "moment";
import React, { useEffect, useState } from "react";
import MaterialIcon from "react-google-material-icons";
import { useLocation } from "react-router-dom";
import SelectSearch from "react-select-search";
import { useSelect } from "react-select-search";

import add from "../../../assets/add-work.svg";
import DownBlack from "../../../assets/down-black.svg";
import pause from "../../../assets/pause.svg";
import play from "../../../assets/play.svg";
import stop from "../../../assets/stop.svg";
import { AlertActions, useAlert } from "../../../contexts/alert/alert";
import { useAuth } from "../../../contexts/auth/auth";
import Data from "../../../mock-data.json";
import {
  AlignCenterStyle,
  DisplayFlexStyle,
  DisplayGridStyle,
  MarginSpaceStyle,
} from "../../../styles/style";
import Modal from "../../../components/modal";
//import { ApexChart as ApexChart2 } from "./bar-chart";
import GraphicBar from "./bar-chart";
import ApexChart from "./line-chart";
import ModalStopWorkstation from "./modal-stop";
import {
  ButtonMachineDetailsSimulate,
  ButtonSetMachineDetailsBlue,
  DateMachineStoped,
  OeeGoalBarChart,
  OeelBarChart,
  SelectedMachineTopTextStatus,
  SelectSearchModifield,
} from "./style";
import TimeMachine from "./time-machine";

import "./style.css";
import { HasPermission } from "../../../utils/utilities";

export default function WorkstationDetails(props) {
  const { user } = useAuth();
  const { stateAlert, dispatch } = useAlert();

  const location = useLocation();
  const [changeTimeNow, setChangeTimeNow] = useState();
  const [timeNow, setTimeNow] = useState();

  const [selectedMachine, setSelectedMachine] = useState(
    location.state.id ? Data[location.state.id - 1] : Data[0]
  ); //caso eu inicie com um valor vazio (useState();) então deve ser aplicado um operador ternario (")selectedMachine ? selectedMachine.production : '') para que ele não incicie com undefined
  const [showModal, setShowModal] = useState(false);

  /* {
    props.id && setSelectedMachine(Data[location.state]);
  } */
  function handleChangeMachine(value) {
    var machine = Data.find((x) => x.id === value);
    setSelectedMachine(machine);
    /*     setOeeMachine(selectedMachine.oee);
    setOeeGoalMachine(selectedMachine.oee_goal); */
    //console.log(machine)
  }
  /*   const [oeeMachine, setOeeMachine] = useState(selectedMachine? selectedMachine.oee : 50);
  const [oeeGoalMachine, setOeeGoalMachine] = useState(selectedMachine? selectedMachine.oee_goal : Data[0].oee_goal); */

  const options = Data.map((post) => {
    return {
      name: post.name,
      value: post.id,
    };
  });

  useEffect(() => {}, [selectedMachine.oee]);

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

  /*   useEffect(() => {
    setTimeNow(moment().format("DD | hh | mm | ss"));
  }, [changeTimeNow]);
 */
  //  setInterval(() => {
  //   setChangeTimeNow(moment().format("ss"));
  //   setTimeNow(moment().format("DD | hh | mm | ss"));
  // }, 3000);

  /*   useEffect(() => {
    setInterval(() => {
      setChangeTimeNow(moment().format("ss"));
      setTimeNow(moment().format("DD | hh | mm | ss"));
    }, 1000);
  }, []); */

  return (
    <div>
      {showModal && (
        <ModalStopWorkstation
          close={() => setShowModal(false)}
        ></ModalStopWorkstation>
      )}

      <div className="container-fluid">
        <div class="row align-items-start">
          <div class="col-md-5 alinhamento">
            <div class="col-md-9">
              <div id="cont1">
                <div class="col-md-7">
                  <MarginSpaceStyle left={9}>
                    <SelectedMachineTopTextStatus
                      status={selectedMachine.description}
                    >
                      {selectedMachine.description === "funcionando"
                        ? "funcionando"
                        : selectedMachine.description === "manutencao"
                        ? "0" + selectedMachine.id + "- manutenção"
                        : "0" + selectedMachine.id + "- parada"}
                    </SelectedMachineTopTextStatus>
                  </MarginSpaceStyle>
                  <SelectSearchModifield
                    status={selectedMachine.description}
                    className="container"
                    multiple={false}
                    closeOnSelect={true}
                    onChange={handleChangeMachine}
                    options={options}
                    value={selectedMachine.id}
                    name="machines"
                    search={true}
                  >
                    <img src={DownBlack} />
                  </SelectSearchModifield>
                </div>
                <div class="col-md-5 data">
                  <DateMachineStoped description={selectedMachine.description}>
                    {selectedMachine.description !== "funcionando" && (
                      /* moment().format("DD/MM/YY, h | mm | ss")} */
                      /*  moment().format("DD | h | mm | ss")} */

                      <TimeMachine />
                    )}
                  </DateMachineStoped>
                  {/* <p>D | H | M | S </p> */}
                </div>
              </div>
              <DisplayFlexStyle left={20}>
                <MarginSpaceStyle right={5}>
                  <MaterialIcon icon="vpn_key" size={20} />
                  <p>0000</p>
                </MarginSpaceStyle>

                <MarginSpaceStyle>
                  <MaterialIcon icon="inventory2" size={20} />
                  <p>0000</p>
                </MarginSpaceStyle>

                <MarginSpaceStyle left={4}>
                  <ButtonSetMachineDetailsBlue>
                    ALTERAR ORDEM
                  </ButtonSetMachineDetailsBlue>
                </MarginSpaceStyle>

                <MarginSpaceStyle left={4}>
                  <ButtonSetMachineDetailsBlue>
                    UNIDADE MEDIDAS
                  </ButtonSetMachineDetailsBlue>
                </MarginSpaceStyle>

                <MarginSpaceStyle left={6}>
                  <ButtonMachineDetailsSimulate>
                    SIMULAR
                  </ButtonMachineDetailsSimulate>
                </MarginSpaceStyle>
              </DisplayFlexStyle>
              <div className="border">
                <div className="informations">
                  <p class="text-start">PRODUÇÃO/ORDEM</p>
                  <p class="text-start fs-4 fw-bold">
                    {selectedMachine ? selectedMachine.production : ""}
                  </p>
                </div>
                <div className="informations">
                  <p class="text-start">APROVADAS POR TURNO</p>
                  <p class="text-start fs-4 fw-bold">2.740</p>
                </div>
                <div className="informations">
                  <p class="text-start">REJEITADAS POR TURNO</p>
                  <p class="text-start fs-4 fw-bold">747</p>
                </div>
              </div>
            </div>
            <MarginSpaceStyle pleft={8} right={5} top={-3}>
              <DisplayGridStyle>
                {useEffect(() => {
                  return <>1aaaaaaaaaaaaaaaaaaaaaaaaaaaa</>;
                }, [selectedMachine])}
                <GraphicBar
                  oeeGoal={selectedMachine.oee_goal}
                  oee={selectedMachine.oee}
                />

                <MarginSpaceStyle top={-40}>
                  <OeelBarChart>OEE = {selectedMachine.oee}%</OeelBarChart>
                </MarginSpaceStyle>
                <MarginSpaceStyle top={-20}>
                  <OeeGoalBarChart>
                    META OEE = {selectedMachine.oee_goal}%
                  </OeeGoalBarChart>
                </MarginSpaceStyle>
              </DisplayGridStyle>
            </MarginSpaceStyle>
          </div>
          <div class="col-md-6">
            <ApexChart
              production_per_hour={selectedMachine.production_per_hour}
            />

            <DisplayFlexStyle>
              <MarginSpaceStyle top={2}>
                <AlignCenterStyle>
                  <img
                    src={pause}
                    onClick={() => {
                      alert(parseInt(localStorage.getItem("@Oee:role"), 10));
                    }}
                  />
                  <img
                    src={play}
                    onClick={() => {
                      alert(stateAlert.visibility);
                    }}
                  />
                  <img
                    src={add}
                    onClick={() => {
                      HasPermission(
                        [2048, 15360, 536887168, 1073758094, -2147221506],
                        parseInt(localStorage.getItem("@Oee:role"), 10)
                      )
                        ? handleAlertSetValues(
                            "success",
                            "Com Permissão",
                            "Parabéns!"
                          )
                        : handleAlertSetValues(
                            "error",
                            "Sem Permissão",
                            "Você não possui Permissão suficiente para Adicionar uma nova maquina!"
                          );
                    }}
                  />
                  <img
                    src={stop}
                    onClick={() => {
                      setShowModal(true);
                    }}
                  />
                </AlignCenterStyle>
              </MarginSpaceStyle>
            </DisplayFlexStyle>
          </div>
        </div>
      </div>
    </div>
  );
}
