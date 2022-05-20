import Menu from "./components/menu";
import AppProvider from "./contexts";
import { useAuth } from "./contexts/auth/auth";
import { SocketProvider, useSocket } from "./contexts/socket/socket";
import Routees from "./routes/routes";
import React, { useEffect, useState } from "react";
import { Router, useLocation } from "react-router-dom";
import socketCliente, { Manager } from "socket.io-client";

//const SocketServer = "http://192.168.1.191:2034"; //Porta exclusiva para o socket, o backend no geral tá na porta 5555

//const MachineAuth = "682fcad2-2c33-4788-aafa-7751a3915f30";

function App() {
  //const [localUrl, setLocalUrl] = useState();
  // const { stateSocket } = useSocket();
  /*   const { stateAlert, dispatch } = useAlert(); */

  /* BACKUP 
  localStorage.getItem("@Oee:user") &&
    useEffect(() => {
      const socket = socketCliente(SocketServer, {
        path: "/dashboard/",
        auth: {
          //company_id: MachineAuth,
          user_id: localStorage.getItem("@Oee:user_id"),
          company_id: localStorage.getItem("@Oee:company_id"),
        },
        reconnectionDelay: 5000,
        autoConnect: false,
      });

      //console.log("Iniciou");

      socket.on("connect", () => {
        // Enviar requisição
        socket.emit("request_notification_data");

        // Dashboard data event
        socket.on("notification_data", (arg) => {
          // Print response from dashboard
          ////console.dir("Dado recebido:");
          ////console.dir(arg);
        });
      });

      // Try to connect
      socket.connect();
    }, []); */

  /*   useEffect(() => {
    //console.log("Iniciou");
    stateSocket.ioSocket.emit("set_socket_data", {
      inMachineList: stateSocket.inMachineList,
      inMachineDetails: stateSocket.inMachineDetails,
      machine_list: stateSocket.machine_list,
      locationUrl: stateSocket.locationUrl,
    });

    // Dashboard data event
    stateSocket.ioSocket.on("notification_data", (arg) => {
      // Print response from dashboard
      //console.dir("Dado recebido:");
      //console.dir(arg);
    });
    // Try to connect
    stateSocket.ioSocket.connect();
    //console.log("Entrou aqui");
  }, [stateSocket.locationUrl]);
 */
  /*  useEffect(() => {
    //console.log("tentando conectar");
  }, [socket.connect()]); */

  /*   const manager = new Manager(SocketServer, {
    autoConnect: false,
  });
  const socket = manager.socket("/");

  manager.open((err) => {
    if (err) {
      //console.log("Tá pegando fogo, bicho!");
    } else {
      //console.log("Não tá pegando fogo, Bicho!");
    }
  });
 */
  return (
    <AppProvider>
      <Routees />
    </AppProvider>
  );
}

export default App;
