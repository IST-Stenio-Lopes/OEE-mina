import ShowLarge from "./show-large";
import ShowMedium from "./show-medium";
import ShowSmall from "./show-small";
import React, { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Top from "../../components/top";
import { SocketActions, useSocket } from "../../contexts/socket/socket";
import { listWorkstationsBegin } from "../../services/workstation";

import "./style.css";

export default function Machines() {
  const [size, setSize] = useState(1);
  const { stateSocket, dispatch } = useSocket();
  const [dataWorkstations, setDataWorkstations] = useState();
  const [workingMachinesIds, setWorkingMachinesIds] = useState();
  const [dataSocket, setDataSocket] = useState();

  function showMachine(valueSlider) {
    if (valueSlider === 1) {
      return (
        <ShowLarge
          description=""
          machine={dataWorkstations}
          socket={dataSocket}
        />
      );
    } else if (valueSlider === 2) {
      return (
        <ShowMedium
          description=""
          machine={dataWorkstations}
          socket={dataSocket}
        />
      );
    } else if (valueSlider === 3) {
      return (
        <ShowSmall
          description=""
          machine={dataWorkstations}
          socket={dataSocket}
        />
      );
    }
  }

  function test(value) {
    setSize(value);
    //console.log(`teste ${value}`);
  }

  const getListWorkstations = useCallback(async () => {
    const res = await listWorkstationsBegin();
    setDataWorkstations(res);
    listAllMachineOn(res);
  }, []);

  // useEffect(() => {
  //   listAllMachineOn();
  // }, [dataWorkstations]);

  useEffect(() => {
    getListWorkstations();

    // const time = setInterval(() => {
    //   getListWorkstations();
    // }, 60000);

    return () => {
      clearInterval(time);
    };
  }, []);

  const handleSocketSetMachineList = (ToF) => {
    dispatch({
      type: SocketActions.setMachine_list,
      payload: ToF,
    });
  };

  function listAllMachineOn(res) {
    if (res.object_list.length <= 0) {
      return;
    }
    var idsMachinesOn = [];
    var disponibilityValue = 0;
    var oeeCount = 0;
    var qualityValue = 0;
    var performanceValue = 0;

    res &&
      res.object_list.map((post) => {
        if (post.status === "Produzindo") {
          idsMachinesOn.push(post.id);

          post.arrayOfData.map((element) => {
            disponibilityValue += element.disponibility_value;
            oeeCount += element.oee_value;
            qualityValue += element.quality_value;
            performanceValue += element.performance_value;
          });

          disponibilityValue = disponibilityValue / post.arrayOfData.length;
          oeeCount = oeeCount / post.arrayOfData.length;
          qualityValue = qualityValue / post.arrayOfData.length;
          performanceValue = performanceValue / post.arrayOfData.length;

          /*           Object.entries(post["arrayOfData"])(([key, value]) => {
            //console.log(key);
          }); */

          /* // post.forEach(([key, value]) => {
          //   oee_sum += value.oee_value;

          //   console.dir(key);
          //console.log("3 -" + value.machine_data[currentDate]);

          //   Object.entries(value.arrayOfData[key]).forEach(([key2, value2]) => {
          //console.log("4");
          //   });
          //console.log("5");
          // }); */
        }
      });

    setWorkingMachinesIds(idsMachinesOn);

    stateSocket.ioSocket.emit("set_socket_data", {
      inMachineList: true,
      inMachineDetails: false,
      machine_list: idsMachinesOn,
      locationUrl: "List Machines In",
    });
  }

  useEffect(() => {
    // Dashboard data event
    stateSocket.ioSocket.on("machine_oee_list_data", (arg) => {
      try {
        /* //console.log("Dado recebido:");*/
        var array = [];
        Object.entries(arg).map(([key, value]) => {
          array.push(value);
        });
        setDataSocket(array);
        //getListWorkstations();
        //console.log(array);
      } catch (e) {
        //console.dir(`Error : ${e}`);
      }

      // Print response from dashboard
      //console.log("Dado recebido:");
      //console.dir(arg);
    });
  }, [workingMachinesIds]);

  return (
    <div className="principal-index">
      <Top handleSizeChange={test} />

      <div id="machines-content"></div>
      {showMachine(size)}
    </div>
  );
}
