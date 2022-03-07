import React, { useState } from "react";
import ApexChart from "./line-chart";
import "../workstation/style.css";
import { ApexChart as ApexChart2 } from "./bar-chart";
import SelectSearch from "react-select-search";
import Data from "../../mock-data.json";
import { useSelect } from "react-select-search";
import {
  AlignCenterStyle,
  DisplayFlexStyle,
  MarginSpaceStyle,
} from "../../styles/style";
import pause from "../../assets/pause.svg";
import play from "../../assets/play.svg";
import add from "../../assets/add-work.svg";
import stop from "../../assets/stop.svg";

export default function Workstation() {
  const [selectedMachine, setSelectedMachine] = useState(Data[0]); //caso eu inicie com um valor vazio (useState();) então deve ser aplicado um operador ternario (")selectedMachine ? selectedMachine.production : '') para que ele não incicie com undefined
  function handleChangeMachine(value) {
    var machine = Data.find((x) => x.id === value);
    setSelectedMachine(machine);
    //console.log(machine)
  }
  const options = Data.map((post) => {
    return {
      name: post.name,
      value: post.id,
    };
  });

  return (
    <div>
      <div className=".container-fluid">
        <div class="row align-items-start">
          <div class="col-md-5 alinhamento">
            <div class="col-md-9">
              <div id="cont1">
                <div class="col-md-7">
                  <SelectSearch
                    className="container"
                    multiple={false}
                    closeOnSelect={true}
                    onChange={handleChangeMachine}
                    options={options}
                    value="3"
                    name="machines"
                    search={true}
                  />
                </div>
                <div class="col-md-5">
                  <p>D | H | M | S </p>
                </div>
              </div>
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
            <div class="col-md-2">
              <ApexChart2 />
            </div>
          </div>
          <div class="col-md-6">
            <ApexChart
              production_per_hour={selectedMachine.production_per_hour}
            />

            <DisplayFlexStyle>
              <MarginSpaceStyle top={2}>
                <AlignCenterStyle>
                  <img src={pause} />
                  <img src={play} />
                  <img src={add} />
                  <img
                    src={stop}
                    onClick={() => {
                      alert("aaa");
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
