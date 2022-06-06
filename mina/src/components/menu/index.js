import React, { useEffect, useState } from "react";
import MaterialIcon from "react-google-material-icons";

import MenuDrop from "../../assets/menu/menu.svg";
import Person from "../../assets/menu/person_outline.svg";
import { useAuth } from "../../contexts/auth/auth";
import { SocketActions, useSocket } from "../../contexts/socket/socket";
import Drop from "./drop";

import "../menu/style.css";

export default function Menu() {
  // var dropValue = true;
  // function dropChange(){

  //     if(dropValue == false){
  //         document.getElementById("add-dropdown").innerHTML=(<Drop/>);
  //         dropValue = true;
  //     }else if(dropValue == true){
  //         document.getElementById("add-dropdown").innerHTML="";
  //         dropValue = false;
  //     }

  // }

  const { stateSocket, dispatch } = useSocket();

  const handleSocketdisconnect = () => {
    stateSocket.ioSocket.close();
  };

  const [dropValue, setDropValue] = useState(false);
  const { user, signOut } = useAuth();

  /*setDropValue(){
        dropValue = !dropValue;
    }*/

  // dropChange(dropValue? false : true);
  // {

  //     if(dropValue === true){
  //         document.getElementById("add-dropdown").innerHTML("a");
  //     }else{
  //         document.getElementById("add-dropdown").innerHTML("");
  //     }
  // }

  // (dropValue? document.getElementById("add-dropdown").innerHTML(<Drop/>) : document.getElementById("add-dropdown").innerHTML());

  // Gerenciar disconexão pelo servidor ( No menu pois o mesmo só é instanciado uma vez (acho) )
  useEffect(() => {
    // Server disconnect data
    stateSocket.ioSocket.on("disconnect", () => {
      // Deslogar
      signOut();
    });
  }, []);

  return (
    /*
        function changeAside() {
            if(aside === false){
                aside = true;
            }else if(aside === true){
                aside = false;
            }
        }

        function showAside(){
            if(aside){
                return <div>olá</div>;
            }else{
                return null;
            }
        }*/

    /* function drop(){
            var div = document.getElementById("dropdown-content");
            if(aside == false){
                div.style.display= "block";
                aside = true;
            }else{
                div.style.display= "none";
                aside = false;
            }
        }*/

    <div id="menu-index">
      {dropValue && (
        <div id="add-dropdown">
          <Drop onCloseMenu={() => setDropValue(!dropValue)} />
        </div>
      )}
      <nav>
        <div className="dropdown" style={{ alignItems: "flex-start" }}>
          <button
            className="dropbtn"
            /*onClick={changeAside}*/ onClick={() => setDropValue(!dropValue)}
            style={{
              textDecoration: "none",
              border: "none",
              background: "none",
              color: "#fff",
            }}
          >
            <img src={MenuDrop} />
            {/* <MaterialIcon id="dropdawn" icon="menu" size={20} /> */}
          </button>
        </div>

        <div
          style={{ color: "#FFF", right: "0px", marginRight: "10%" }}
          className="flex"
        >
          {/*  <img src={Person} width={30} /> */}
          {/* <MaterialIcon icon="person" size={30} float={"right"} /> */}
          <div>
            {user ? (
              <button
                onClick={() => {
                  handleSocketdisconnect();
                  signOut();
                }}
              >
                SAIR
              </button>
            ) : (
              <p></p>
            )}
          </div>
        </div>

        {/* <span class="material-icons-outlined">
                    search
                    </span> */}
      </nav>
    </div>
  );
}
