import moment from "moment";
import React, { useCallback, useEffect, useState } from "react";
import MaterialIcon from "react-google-material-icons";
import { useLocation } from "react-router-dom";
import SelectSearch from "react-select-search";
import { useSelect } from "react-select-search";

import add from "../../../assets/add-work.svg";
import DownBlack from "../../../assets/down-black.svg";
import pause from "../../../assets/pause.svg";
import play from "../../../assets/play.svg";
import search from "../../../assets/search-graphic.svg";
import stop from "../../../assets/stop.svg";
import Modal from "../../../components/modal";
import { AlertActions, useAlert } from "../../../contexts/alert/alert";
import { useAuth } from "../../../contexts/auth/auth";
import { SocketActions, useSocket } from "../../../contexts/socket/socket";
import Data from "../../../mock-data.json";
import { changeOrderStatus } from "../../../services/order";
import {
  getSpecifcWorkstation,
  listWorkstationsBegin,
  StartMachine,
} from "../../../services/workstation";
import {
  AlignCenterStyle,
  DisplayFlexStyle,
  DisplayGridStyle,
  MarginSpaceStyle,
} from "../../../styles/style";
import { HasPermission } from "../../../utils/utilities";
import * as Radial from "../../begin/percentBar";
//import { ApexChart as ApexChart2 } from "./bar-chart";
import GraphicBar from "./bar-chart";
import ApexChart from "./line-chart";
import ModalAddOrder from "./modal-order";
import ModalSearchOee from "./modal-search";
import ModalStopWorkstation from "./modal-stop";
import RadialGraphic from "./radial-bar";
import {
  ButtonMachineDetailsSimulate,
  ButtonSetMachineDetailsBlue,
  DateMachineStoped,
  OeeGoalBarChart,
  OeelBarChart,
  SelectedMachineTopTextStatus,
  SelectSearchModifield,
  ShowHourAndMinute,
} from "./style";
import TimeMachine from "./time-machine";

import "./style.css";

export default function WorkstationDetails(props) {
  const { user } = useAuth();
  const { stateAlert, dispatch } = useAlert();

  const [dataWorkstations, setDataWorkstations] = useState();

  const location = useLocation();
  const [changeTimeNow, setChangeTimeNow] = useState();
  const [timeNow, setTimeNow] = useState();

  /* const [selectedMachine, setSelectedMachine] = useState(
    location.state.id ? Data[location.state.id - 1] : Data[0]
  ); */ //caso eu inicie com um valor vazio (useState();) então deve ser aplicado um operador ternario (")selectedMachine ? selectedMachine.production : '') para que ele não incicie com undefined
  const [showModalStop, setShowModalStop] = useState(false);
  const [showModalOrder, setShowModalOrder] = useState(false);
  const [showModalSearch, setShowModalSearch] = useState(false);
  const [selectedMachine, setSelectedMachine] = useState(location.state.id);
  const { stateSocket, dispatch: dispatchSocket } = useSocket();
  const [dataSocket, setDataSocket] = useState();
  const [dataDateHoursSocket, setDataDateHoursSocket] = useState([]);
  const [dataDateApprovedSocket, setDataDateApprovedSocket] = useState([]);
  const [dataDateReworkSocket, setDataDateReworkSocket] = useState([]);
  const [dataDateScrapSocket, setDataDateScrapkSocket] = useState([]);
  const [oeeSocketReceived, setOeeSocketReceived] = useState(0);
  const [shiftCountSocket, setShiftCountSocket] = useState(0);
  //const [aprovedSocketReceived, setAprovedSocketReceived] = useState(0);

  const [date, setDate] = useState();

  const [machineHadChange, setMachineHadChange] = useState(false);
  const [shiftFound, setShiftFound] = useState(false);

  const [searchDateTimeSocket, setSearchDateTimeSocket] = useState();
  const [searcSelectShiftSocket, setSearchSelectShiftSocket] = useState();

  const handleSocketSetInMachineList = (b) => {
    dispatchSocket({
      type: SocketActions.setInMachineList,
      payload: b,
    });
  };

  /*   useEffect(() => {
    //console.log(dataDateHoursSocket);
  }, [dataDateHoursSocket]); */

  const handleSocketSetInMachineDetails = (c) => {
    dispatchSocket({
      type: SocketActions.setInMachineDetails,
      payload: c,
    });
  };
  const handleSocketSetMachineList = (v) => {
    dispatch({
      type: SocketActions.setMachine_list,
      payload: v,
    });
  };

  /* {
    props.id && setSelectedMachine(Data[location.state]);
  } */
  const getListWorkstations = useCallback(async () => {
    // const res = await listWorkstationsBegin();
    // res && setDataWorkstations(res.object_list);
    const res = await getSpecifcWorkstation(location.state.id);
    setSelectedMachine(res);
    //res && setDataWorkstations(res.object_list);
  }, []);

  useEffect(() => {
    getListWorkstations();
  }, []);

  setInterval(() => {
    //let data = new Date();
    //let hour = new Date().getHours().toString();
    //let minutes = new Date().getMinutes().toString();
    // setDate(moment(data).utcOffset("+12").format("hh:mm"));
    setDate(
      new Intl.DateTimeFormat("pt-BR", { timeStyle: "short" }).format(
        Date.now()
      )
    );
  }, 1000);

  /*   useEffect(() => {
    dataWorkstations && handleChangeMachine(location.state.id);
  }, [dataWorkstations]); */

  /*   useEffect(() => {
    Object.entries(dataWorkstations.machine_data).
  }, [dataSocket])  */

  useEffect(() => {
    //console.log(stateSocket);
    handleSocketSetInMachineDetails(true);
    handleSocketSetInMachineList(false);
    handleSocketSetMachineList(location.state.id);

    //console.log(stateSocket);
    /*    setInterval(() => {
      //console.log("entrou no intervalo");
      handleSocketSetInMachineDetails(true);
    }, 2000); */
  }, []);

  // useEffect(() => {
  //console.log("entrou no primeiro useeffect parte 1");
  //   // Create variable to handle date begin and date end of request
  //   if (selectedMachine && selectedMachine.shifts) {
  //     const collector_date_begin = new Date();
  //     const collector_date_end = new Date();
  //     let shift_begin = new Date();
  //     let shift_end = new Date();

  //     // Check if exists in the array
  //     for (let i = 0; i < selectedMachine.shifts.length && !shiftFound; i++) {
  //       // Reset
  //       shift_begin = new Date();
  //       shift_end = new Date();

  //       // Current hour index
  //       let [bHour, bMinute] = selectedMachine.shifts[i].hour_begin
  //         .toString()
  //         .split(":");
  //       let [eHour, eMinute] = selectedMachine.shifts[i].hour_end
  //         .toString()
  //         .split(":");

  //       bHour = Number.parseInt(bHour, 10);
  //       eHour = Number.parseInt(eHour, 10);

  //       bMinute = Number.parseInt(bMinute, 10);
  //       eMinute = Number.parseInt(eMinute, 10);

  //       shift_begin.setHours(bHour, bMinute, 0, 0);

  //       if (bHour > eHour) {
  //         shift_end.setDate(collector_date_begin.getDate() + 1);
  //       }

  //       shift_end.setHours(eHour, eMinute, 0, 0);

  //       if (
  //         collector_date_begin.getTime() >= shift_begin.getTime() &&
  //         collector_date_begin.getTime() <= shift_end.getTime()
  //       ) {
  //         setShiftFound(true);
  //         //console.log(selectedMachine.shifts[i]);

  //         collector_date_begin.setHours(bHour, bMinute);

  //         if (bHour > eHour) {
  //           collector_date_end.setDate(collector_date_begin.getDate() + 1);
  //         }

  //         collector_date_end.setHours(eHour, eMinute);

  //         //console.log(shift_begin.toISOString());
  //         //console.log(shift_end.toISOString());

  //         stateSocket.ioSocket.emit("set_socket_data", {
  //           inMachineList: false,
  //           inMachineDetails: true,
  //           machine_list: [location.state.id],
  //           machine_begin: shift_begin,
  //           machine_end: shift_end,
  //           locationUrl: "Machines Details",
  //         });
  //       }
  //     }
  //   }
  // }, [selectedMachine]);

  // const [searchDateTimeSocket, setSearchDateTimeSocket] = useState();
  // const [searcSelectShiftSocket, setSearchSelectShiftSocket] = useState();

  function updateSocketSearchInformations() {
    //console.log("entrou no segundo useeffect parte 1");
    if (searcSelectShiftSocket && searchDateTimeSocket) {
      //console.log("entrou no if");
      let shift_begin = new Date(searchDateTimeSocket);
      let shift_end = new Date(searchDateTimeSocket);

      let [bHour, bMinute] = searcSelectShiftSocket.hour_begin.split(":");
      let [eHour, eMinute] = searcSelectShiftSocket.hour_end.split(":");

      bHour = Number.parseInt(bHour, 10);
      eHour = Number.parseInt(eHour, 10);

      bMinute = Number.parseInt(bMinute, 10);
      eMinute = Number.parseInt(eMinute, 10);

      shift_begin.setHours(bHour, bMinute, 0, 0);

      if (bHour >= eHour) {
        shift_end.setDate(shift_begin.getDate() + 1);
      }

      shift_end.setHours(eHour, eMinute, 0, 0);

      stateSocket.ioSocket.emit("search_socket_data", {
        inMachineList: false,
        inMachineDetails: true,
        machine_list: [location.state.id],
        machine_begin: shift_begin,
        machine_end: shift_end,
        locationUrl: "Machines Details",
      });
      //console.log("entrou no segundo useeffect parte 2");
    }
    //console.log("entrou no segundo useeffect parte 1");
    // if (searchDateTimeSocket) {
    //   //console.log("entrou no if");
    //   const shift_begin = new Date(searchDateTimeSocket);
    //   const shift_end = new Date(searchDateTimeSocket);

    //   if (searcSelectShiftSocket) {
    //     const [bHour, bMinute] = searcSelectShiftSocket.hour_begin.split(":");
    //     const [eHour, eMinute] = searcSelectShiftSocket.hour_end.split(":");

    //     shift_begin.setHours(bHour, bMinute, 0, 0);
    //     shift_end.setHours(eHour, eMinute, 0, 0);
    //   } else {
    //     shift_begin.setHours(0, 0, 0, 0);
    //     shift_end.setHours(23, 59, 59, 0);
    //   }

    //   stateSocket.ioSocket.emit("search_socket_data", {
    //     inMachineList: false,
    //     inMachineDetails: true,
    //     machine_list: [location.state.id],
    //     machine_begin: shift_begin,
    //     machine_end: shift_end,
    //     locationUrl: "Machines Details",
    //   });
    //   //console.log("entrou no segundo useeffect parte 2");
    // }
  }

  useEffect(() => {
    //console.log("entrou 0");
    stateSocket.ioSocket.on("machine_oee_data", (arg) => {
      console.log(arg);
      try {
        var array = Object.entries(arg).map(([key, value]) => value);
        //console.log("1");
        let oee_sum = 0;
        let aproved = 0;
        let rework = 0;
        let scrap = 0;
        let shift_count_sum = 0;

        setDataSocket(array);
        //console.log(array);

        var arrayhours = [];
        var arrayapproved = [];
        var arrayrework = [];
        var arrayscrap = [];
        //console.log("2");
        Object.entries(array).forEach(([key, value]) => {
          //console.log("3");
          //console.dir(value);
          const currentDate = value["date"];
          oee_sum += value.oee_value;
          shift_count_sum += value.shift_count;
          // console.dir(value);
          //console.log("3 -" + value.machine_data[currentDate]);
          //console.log("4");
          if (value.machine_data && value.machine_data[currentDate]) {
            //console.log("5");
            //console.log(value.machine_data[currentDate]);
            Object.entries(value.machine_data[currentDate]).forEach(
              ([key2, value2]) => {
                //console.log("6");
                const [hora, minuto] = key2.split(":");

                let date = moment(currentDate + " " + key2).format(
                  "DD/MM/YYYY - HH:mm"
                );

                arrayhours.push(`${date}`);
                arrayapproved.push(value2.approved);
                arrayrework.push(value2.rework);
                arrayscrap.push(value2.scrap);
              }
            );
          }

          //console.log("5");
        });

        setOeeSocketReceived(oee_sum / array.length);
        setShiftCountSocket(shift_count_sum / array.length);
        //console.log(arrayscrap);
        setDataDateHoursSocket(arrayhours);
        setDataDateApprovedSocket(arrayapproved);
        setDataDateReworkSocket(arrayrework);
        setDataDateScrapkSocket(arrayscrap);
        setShiftFound(true);
      } catch (e) {
        console.dir(`Error : ${e}`);
      }

      // Print response from dashboard
      //console.log("Dado recebido:");
      //console.dir(arg);
    });

    return () => stateSocket.ioSocket.removeAllListeners("machine_oee_data");
  }, []);

  function getFinalAprovedFromSocket() {
    let soma = 0;
    dataDateApprovedSocket.forEach((item) => {
      soma += Number.parseInt(item, 10);
    });
    return soma;
  }

  function getFinalRejectedFromSocket() {
    {
      //console.log(dataSocket);
    }
    let rework = 0;
    let scrap = 0;
    dataDateReworkSocket.forEach((item) => {
      rework += Number.parseInt(item, 10);
    });
    dataDateScrapSocket.forEach((item) => {
      scrap += Number.parseInt(item, 10);
    });

    return rework + scrap;
  }
  /* 
  useEffect(() => {

  }[dataSocket]) */

  async function StartMachineObject(id) {
    var start = await StartMachine(id);
    if (start && start.status === 201) {
      handleAlertSetValues("success", "Certo", "Maquina Iniciada com Sucesso!");
      setMachineHadChange(!machineHadChange);
    } else {
      handleAlertSetValues("error", "Erro!", start.data.message);
    }
  }

  // useEffect(() => {
  //console.log(dataDateHoursSocket);
  // }, [dataDateApprovedSocket]);

  /*   function handleChangeMachine(value) {
    const machine =
      dataWorkstations && dataWorkstations.find((x) => x.id === value);
    //console.log(machine);
    setSelectedMachine(machine);
    //      setOeeMachine(selectedMachine.oee);
    // setOeeGoalMachine(selectedMachine.oee_goal);
    //console.log(dataWorkstations);
  } */
  /*   const [oeeMachine, setOeeMachine] = useState(selectedMachine? selectedMachine.oee : 50);
  const [oeeGoalMachine, setOeeGoalMachine] = useState(selectedMachine? selectedMachine.oee_goal : Data[0].oee_goal); */

  /* const options = Data.map((post) => {
    return {
      name: post.name,
      value: post.id,
    };
  }); */
  const options =
    dataWorkstations &&
    dataWorkstations.map((post) => {
      return {
        name: post.name,
        value: post.id,
      };
    });

  //useEffect(() => {}, [selectedMachine.oee]);

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

  async function handleChangeOrderStatus(order_id, newStatus) {
    //console.log("1");
    var change = await changeOrderStatus(order_id, newStatus);
    //console.log("2");
    //console.log(change);
    if (change && change === 201) {
      //console.log("cadastrou!");
      //console.log("3");
      handleAlertSetValues("success", "Certo", "Ordem Iniciada com Sucesso!");
      setMachineHadChange(!machineHadChange);
      //console.log("4");
    } else {
      //console.log("Não cadastrou!");
      //console.log("5");
      handleAlertSetValues("error", "Erro!", change);
    }
  }

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
      {showModalStop && (
        <ModalStopWorkstation
          close={() => setShowModalStop(false)}
          machineId={selectedMachine.id}
          machineHadChange={() => setMachineHadChange(!machineHadChange)}
        ></ModalStopWorkstation>
      )}

      {showModalOrder && (
        <ModalAddOrder
          machineId={selectedMachine.id}
          close={() => setShowModalOrder(false)}
          machineHadChange={() => setMachineHadChange(!machineHadChange)}
        ></ModalAddOrder>
      )}

      {showModalSearch && (
        <ModalSearchOee
          setDate={setSearchDateTimeSocket}
          setShift={setSearchSelectShiftSocket}
          date={searchDateTimeSocket}
          shift={searcSelectShiftSocket}
          array={selectedMachine.shifts}
          close={() => {
            setShowModalSearch(false);
            setSearchDateTimeSocket();
            setSearchSelectShiftSocket();
          }}
          send={updateSocketSearchInformations}
        ></ModalSearchOee>
      )}

      {/*   {//console.log("olá")}
      {//console.log(selectedMachine)} */}

      <div className="container-fluid">
        <div className="row align-items-start">
          <div className="col-md-5 alinhamento">
            <div className="col-md-9">
              <div id="cont1">
                <div className="col-md-7">
                  <MarginSpaceStyle left={9}>
                    <SelectedMachineTopTextStatus
                      status={selectedMachine.status}
                    >
                      {selectedMachine.status === "Produzindo"
                        ? "Produzindo"
                        : selectedMachine.status === "Desativada "
                        ? "Desativada"
                        : "Parada"}
                    </SelectedMachineTopTextStatus>
                  </MarginSpaceStyle>{" "}
                  <SelectSearchModifield
                    status={selectedMachine.status}
                    className="container"
                    multiple={false}
                    closeOnSelect={true}
                    // onChange={handleChangeMachine}
                    options={options || []}
                    //value={selectedMachine.id}
                    name="machines"
                    search={true}
                    disabled={true} //temporario
                    placeholder={selectedMachine.name} //temporario
                  >
                    <img src={DownBlack} />
                  </SelectSearchModifield>
                </div>
                <ShowHourAndMinute>{date && date}</ShowHourAndMinute>

                {/*                 <div className="col-md-5 data">
                  <DateMachineStoped
                    description={selectedMachine.description}
                  />
                  {selectedMachine.description !== "Produzindo" && (
                    <TimeMachine />
                  )}

                </div> */}
              </div>
              <DisplayFlexStyle left={20}>
                <MarginSpaceStyle right={5}>
                  <MaterialIcon icon="vpn_key" size={20} />
                  <p>
                    {selectedMachine.order ? selectedMachine.order.code : "-"}
                  </p>
                </MarginSpaceStyle>

                <MarginSpaceStyle>
                  <MaterialIcon icon="inventory2" size={20} />
                  <p>
                    {selectedMachine.order
                      ? selectedMachine.order.product
                      : "-"}
                  </p>
                </MarginSpaceStyle>

                {/*                 <MarginSpaceStyle left={5}>
                  <ButtonMachineDetailsSimulate
                    onClick={() => {
                      handleChangeOrderStatus(
                        selectedMachine.order.id,
                        "Executando"
                      );
                    }}
                  >
                    INICIAR
                  </ButtonMachineDetailsSimulate>
                </MarginSpaceStyle>
                <MarginSpaceStyle left={5}>
                  <ButtonMachineDetailsSimulate
                    onClick={() => {
                      handleChangeOrderStatus(
                        selectedMachine.order.id,
                        "Finalizada"
                      );
                    }}
                  >
                    FINALIZAR
                  </ButtonMachineDetailsSimulate>
                </MarginSpaceStyle> */}

                {/*  <MarginSpaceStyle left={4}>
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
                </MarginSpaceStyle> */}
              </DisplayFlexStyle>
              <div className="border">
                <div className="informations">
                  <p className="text-start">Turno</p>
                  <p className="text-start fs-5 ">
                    {shiftFound && dataSocket
                      ? dataSocket[0].machine_shift
                      : "Fora do turno de trabalho!"}
                    {/* {//console.log(dataSocket && dataSocket[0].machine_shift)} */}
                  </p>
                </div>
                <div className="informations">
                  <p className="text-start">PRODUÇÃO</p>
                  <p className="text-start fs-4 fw-bold">
                    {shiftFound
                      ? dataDateApprovedSocket &&
                        getFinalAprovedFromSocket() +
                          getFinalRejectedFromSocket()
                      : 0}
                    {" de "} {shiftCountSocket}
                  </p>
                </div>
                <div className="informations">
                  <p className="text-start">APROVADAS POR TURNO</p>
                  <p className="text-start fs-4 fw-bold">
                    {shiftFound && dataDateApprovedSocket
                      ? getFinalAprovedFromSocket()
                      : 0}
                  </p>
                </div>
                <div className="informations">
                  <p className="text-start">REJEITADAS POR TURNO</p>
                  <p className="text-start fs-4 fw-bold">
                    {shiftFound
                      ? dataDateApprovedSocket && getFinalRejectedFromSocket()
                      : 0}
                  </p>
                </div>
              </div>
            </div>
            {/*             <MarginSpaceStyle pleft={8} right={5} top={-3}>
              <DisplayGridStyle>
                <GraphicBar
                  //oeeGoal={selectedMachine.oee_goal} 
                  oeeGoal={selectedMachine.oee}
                  oee={Math.round(oeeSocketReceived * 100) / 100}
                />

                <MarginSpaceStyle top={-40}>
             
                  <OeelBarChart>
                    OEE = {Math.round(oeeSocketReceived * 100) / 100}%
                  </OeelBarChart>
                </MarginSpaceStyle>
                <MarginSpaceStyle top={-20}>
                  <OeeGoalBarChart>
                    META OEE = {selectedMachine.oee}%
                  </OeeGoalBarChart>
                </MarginSpaceStyle>
              </DisplayGridStyle>
            </MarginSpaceStyle> */}

            {/* <Radial oee={50} /> */}
          </div>
          <div className="col-md-6">
            {/* {dataDateHoursSocket.length > 0 && (
              <ApexChart
                //production_per_hour={[selectedMachine.production_per_hour, 20]}
                //production_per_hour={Data[0].production_per_hour}
                hours={dataDateHoursSocket}
                approved_per_hour={dataDateApprovedSocket}
                rework_per_hour={dataDateReworkSocket}
                scrap_per_hour={dataDateScrapSocket}
                time_list
              />
            )} */}
            <RadialGraphic oee={Math.round(oeeSocketReceived)} />

            <DisplayFlexStyle>
              <MarginSpaceStyle top={2}>
                <AlignCenterStyle>
                  {/* <img
                    src={pause}
                    onClick={() => {
                      console.dir("");
                    }}
                  /> */}
                  <img
                    src={play}
                    onClick={() => {
                      //alert(stateAlert.visibility);
                      StartMachineObject(selectedMachine.id);
                    }}
                  />
                  {/* <img
                    src={add}
                    onClick={() => {
                      HasPermission(
                        [2048, 15360, 536887168, 1073758094, -2147221506],
                        parseInt(localStorage.getItem("@Oee:role"), 10)
                      )
                        ? //   handleAlertSetValues(
                          //     "success",
                          //     "Com Permissão",
                          //     "Parabéns!"
                          //   )
                          setShowModalOrder(true)
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
                      setShowModalStop(true);
                    }}
                  /> */}

                  <img src={search} onClick={() => setShowModalSearch(true)} />
                </AlignCenterStyle>
              </MarginSpaceStyle>
            </DisplayFlexStyle>
          </div>
        </div>
      </div>
    </div>
  );
}
