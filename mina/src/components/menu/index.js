import React, { useState } from "react";
import "../menu/style.css";
import MaterialIcon from "react-google-material-icons";
import Drop from "./drop";
import MenuDrop from "../../assets/menu/menu.svg";
import Person from "../../assets/menu/person_outline.svg";

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
  const [dropValue, setDropValue] = useState(false);

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
          <Drop />
        </div>
      )}
      <nav>
        <div className="dropdown" style={{ alignItems: "flex-start" }}>
          <button
            className="dropbtn"
            onClick={dropValue}
            /*onClick={changeAside}*/ onClick={() => setDropValue(!dropValue)}
            style={{
              textDecoration: "none",
              border: "none",
              background: "none",
              color: "#fff",
            }}
          >
            <img src={MenuDrop}/>
            {/* <MaterialIcon id="dropdawn" icon="menu" size={20} /> */}
          </button>
        </div>
        <div style={{ color: "#FFF", right: "0px", marginRight: "10%" }}>
            <img src={Person} width={30}/>
          {/* <MaterialIcon icon="person" size={30} float={"right"} /> */}
        </div>

        {/* <span class="material-icons-outlined">
                    search
                    </span> */}
      </nav>
    </div>
  );
}
