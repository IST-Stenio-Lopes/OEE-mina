import React, { useEffect } from "react";
import socketCliente, { Manager } from "socket.io-client";

import Menu from "./components/menu";
import AppProvider from "./contexts";
import { useAuth } from "./contexts/auth/auth";
import Routees from "./routes/routes";

const SocketServer = "http://192.168.1.191:5556"; //Porta exclusiva para o socket, o backend no geral tá na porta 5555

const MachineAuth = "682fcad2-2c33-4788-aafa-7751a3915f30";

import { useAlert } from "./contexts/alert/alert";

function App() {
  /*   const { stateAlert, dispatch } = useAlert(); */

  useEffect(() => {
    const socket = socketCliente(SocketServer, {
      path: "/dashboard/",
      auth: {
        company_id: MachineAuth,
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
        //console.dir("Dado recebido:");
        //console.dir(arg);
      });
    });
    // Try to connect
    socket.connect();
  }, []);

  /*  useEffect(() => {
    console.log("tentando conectar");
  }, [socket.connect()]); */

  /*   const manager = new Manager(SocketServer, {
    autoConnect: false,
  });
  const socket = manager.socket("/");

  manager.open((err) => {
    if (err) {
      console.log("Tá pegando fogo, bicho!");
    } else {
      console.log("Não tá pegando fogo, Bicho!");
    }
  });
 */
  return (
    <AppProvider>
      <Menu />
      <Routees />
    </AppProvider>
  );
}

export default App;
