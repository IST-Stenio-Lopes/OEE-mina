import React, { Component, useCallback, useEffect, useState } from "react";
import MaterialIcon from "react-google-material-icons";
import { useNavigate } from "react-router-dom";

import Inventory from "../../../assets/machine-begin/inventory_2.svg";
import Vpn from "../../../assets/machine-begin/vpn_key.svg";
import { SocketActions, useSocket } from "../../../contexts/socket/socket";
import { useWorkstation, WorkstationActions } from "../../../contexts/workstation/workstation";
import Data from "../../../mock-data.json";
import { listWorkstationsBegin } from "../../../services/workstation";
import { postWorkstation } from "../../../services/workstation";
import { MarginSpaceStyle } from "../../../styles/style";
import { getStateIcon, oeeValue } from "../../../utils/utilities";
import { formatWord } from "../../../utils/utilities";
import { getStateMachine } from "../../../utils/utilities";
import Workstation from "../../workstation/workstation-details";
import ApexChart from "../percentBar";
//import { DateStatusControll, GraphicOeeHorizontalLineChart, LinhaL, MachineName, NameTop, StatusColor } from './style';
import {
  LinhaL,
  NameTop,
  StatusColor,
  DateStatusControll,
  MachineName,
  GraphicOeeHorizontalLineChart,
} from "./style";

import "../show-large/style.css";

//import { getWorkstationsDetailed } from "../../../services/workstation";

export default function ShowLarge({ description, machine, socket }) {
  //<Container background='#00FF00'/>

  const [dataWorkstations, setDataWorkstations] = useState();
  const { dispatch } = useWorkstation();
  const { dispatch: dispatchSocket } = useSocket();
  const [localSocket, setLocalSocket] = useState();
  // const [arrayLocalSocket, setArrayLocalSocket] = useState();
  const[currentMachine, setCurrentMachine] = useState();

  useEffect(() => {
    setDataWorkstations(machine);
  }, [machine]);

  useEffect(() => {
    setLocalSocket(socket);
  }, [socket]);
  /* 
  useEffect(() => {
    getWorkstationsDetailed();
  }, []); */
  /*   const Data = getWorkstationsDetailed(); */
  /* const getListWorkstations = useCallback(async () => {
    const res = await listWorkstationsBegin();

    setDataWorkstations(res);
  }, []); */

  /*   useEffect(() => {


    
    getListWorkstations();
  }, []); */
  /* useEffect(() => {

    var array =[];
    if(localSocket) {

      Object.entries(localSocket).map(([key, value]) => {
        //console.log(value);
        array.push(value);
      });

      setArrayLocalSocket(array);
      //console.log(arrayLocalSocket);

    } 
    //console.log(localSocket);
  }, [localSocket])*/
/*   useEffect(() =>{
    localSocket.find((machineSocket) => {
      
    })
  }, [])
   */


/*   Object.entries(socket).forEach(([key, value]) => {
    oee_sum += value.oee_value;
  }); */




  const getOeeFromSocket = useCallback((data) => {
    //console.log(data &&  data[0].oee_value);
    return (
      <>

      {data && data.length >= 1 ? 
          <>
            <ApexChart oee={data[0].oee_value} />
            <p id="oee">OEE = {data[0].oee_value}</p>
          </> 
          :
          <>
            <ApexChart oee={0} />
            <p id="oee">OEE = {0}</p>
          </> 
        }
      </>
    )}, []);

  const getDisponibilityFromSocket = useCallback((data) => {
    //console.log(data &&  data[0].oee_value);
    return (
      <>

      {data && data.length >= 1 ? 
          <b>
            {data[0].disponibility_value}%
          </b> 
          :
          <b>
            -
          </b> 
        }
      </>
    )}, []);


/*     function getMachineDataToRender(arrayOfData){

      var disponibilityValue = 0;
      var oeeCount = 0;
      var qualityValue = 0;
      var performanceValue = 0;

          arrayOfData.map((element) => {
            console.log(element);
            disponibilityValue += element.disponibility_value;
            oeeCount += element.oee_value;
            qualityValue += element.quality_value;
            performanceValue += element.performance_value;
          });

          disponibilityValue = disponibilityValue / post.arrayOfData.length;
          oeeCount = oeeCount / post.arrayOfData.length;
          qualityValue = qualityValue / post.arrayOfData.length;
          performanceValue = performanceValue / post.arrayOfData.length;    
          return ({disponibility: disponibilityValue, eficiency: performanceValue, quality: qualityValue})
      } */

      function getMachineDisponibility(arrayOfData){
        var disponibilityValue = 0;

          arrayOfData.map((element) => {
          disponibilityValue += element.disponibility_value;
        });

        disponibilityValue = disponibilityValue / arrayOfData.length;
        return (<b>{disponibilityValue + '%'}</b>)
      }

      function getMachineQuality(arrayOfData){
        var qualityValue = 0;

          arrayOfData.map((element) => {
            qualityValue += element.quality_value;
        });

        qualityValue = qualityValue / arrayOfData.length;
        return (<b>{qualityValue + '%'}</b>)
      }

      function getMachineEficience(arrayOfData){
        var performanceValue = 0;

          arrayOfData.map((element) => {
            performanceValue += element.performance_value;
        });

        performanceValue = performanceValue / arrayOfData.length; 
        return (<b>{performanceValue + '%'}</b>)
      }

      function getMachineOee(arrayOfData){
        var oeeCount = 0;

          arrayOfData.map((element) => {
            oeeCount += element.oee_value;
        });

        oeeCount = oeeCount / arrayOfData.length;
        return oeeCount;
      }

    

      const getEfficiencyFromSocket = useCallback((data) => {
        //console.log(data &&  data[0].oee_value);
        return (
          <>
    
          {data && data.length >= 1 ? 
              <b>
                {
                
                data[0].performance_value}%
              </b> 
              :
              <b>
               -
              </b> 
            }
          </>
        )}, []);

        const getQualityFromSocket = useCallback((data) => {
          //console.log(data &&  data[0].oee_value);
          return (
            <>
      
            {data && data.length >= 1 ? 
                <b>
                  {data[0].quality_value}%
                </b> 
                :
                <b>
                 -
                </b> 
              }
            </>
          )}, []);

          const getOnlyOeeFromSocket = useCallback((data) => {
            //console.log(data &&  data[0].oee_value);
            return (
             data && data.length >= 1 ? 
                  data[0].oee_value
                :
              0
  
            )}, []);




  const handleSocketSetMachineList = (ToF) => {
    dispatch({
      type: SocketActions.setMachine_list,
      payload: ToF,
    });
  };

  const navigate = useNavigate();

  return (
    <div id="showLarger-expand">
      {dataWorkstations &&
        dataWorkstations.object_list.map(
          (post) => (
            (description = post.description),
            
            (
              <div
                key={post.id}
                id="principal"
                onClick={() => {
                  /* handleWorkstationId(post.id); */
                  {
                    navigate("/workstation/details" , {
                      state: { id: post.id },
                    } );

                    handleSocketSetMachineList(post.id);
                  }
                }}
              >
                
                
                <div id="conteudo1">
                  <div id="superior" className="row">
                    <div className="col-6">
                      <NameTop description={post.status}>
                        {getStateMachine(post.status)}
                      </NameTop>
                    </div>
                    <div className="col-6 row">
                      <div className="col-9">
                        <div id="horas">
                          <DateStatusControll description={post.status}>
                            {/* to modifield */}
                          </DateStatusControll>
                        </div>
                      </div>
                      <div className="col-3">
                        <StatusColor description={post.status}>
                          <img src={getStateIcon(post.status)} />
                        </StatusColor>
                      </div>
                    </div>
                  </div>
                  <div id="inferior">
                    <MachineName>{formatWord(post.name)}</MachineName>
                  </div>

                  <LinhaL description={post.status} />
                </div>
                <div id="icons">
                  <div id="icon">
                    <a>
                      <MarginSpaceStyle top={-30}>
                        <img src={Vpn} width={20} />
                      </MarginSpaceStyle>
                    </a>
           
                    <p>{post.order_code? post.order_code : '-'}</p>
                  </div>
                  <div id="icon2">
                    <a>
                      <MarginSpaceStyle top={-30}>
                        <img src={Inventory} width={20} />
                      </MarginSpaceStyle>
                    </a>
                    <p>{post.order_product? post.order_product : '-'}</p>
                  </div>
                </div>
                
                <div id="conteudo2">
                  <div className="informacoes">
                      DISPONIBILIDADE
                    {/* {
                      getOeeFromSocket(localSocket?.filter((sk) => sk[0].machine_id === post.id)[0])
                    } */}
                    {/* {getDisponibilityFromSocket(localSocket?.filter((sk) => sk[0].machine_id === post.id)[0])} */}
                    { post.status === "Produzindo" ? getMachineDisponibility(post.arrayOfData) : <b>-</b>}
                    {/* {post.status === "Produzindo" && console.log(post.arrayOfData)} */}
            


                  </div>
                  <div className="informacoes">
                  {/*   <div className="segundo">
                      <p id="aprovados">{post.approved}</p>
                      APROVADAS
                    </div> */}
                    EFICIÊNCIA

                    {/* {getEfficiencyFromSocket(localSocket?.filter((sk) => sk[0].machine_id === post.id)[0])} */}

                    { post.status === "Produzindo" ? getMachineEficience(post.arrayOfData) : <b>-</b>}


                  </div>
                  <div className="informacoes">
                    QUALIDADE
                    {/* {getQualityFromSocket(localSocket?.filter((sk) => sk[0].machine_id === post.id)[0])} */}
                    {/* {getOnlyOeeFromSocket(localSocket?.filter((sk) => sk[0].machine_id === post.id)[0]).value} */}
                    { post.status === "Produzindo" ? getMachineQuality(post.arrayOfData) : <b>-</b>}
                  </div>

                </div>
                <div id="graphicBar">
                  <div id="firstDivGraphicBar">
                    <GraphicOeeHorizontalLineChart /* value={getOnlyOeeFromSocket(localSocket?.filter((sk) => sk[0].machine_id === post.id)[0])} */
                      value={post.status === "Produzindo" ? getMachineOee(post.arrayOfData) : 0}
                    >
                    </GraphicOeeHorizontalLineChart>
                    <p id="percent">
                    {/* {getOnlyOeeFromSocket(localSocket?.filter((sk) => sk[0].machine_id === post.id)[0])}% */}
                    { post.status === "Produzindo" ? getMachineOee(post.arrayOfData)+'%' : <b>0%</b>}
                    </p>
                  </div>
                  
                </div>

              </div>
              
            )
          )
        )}

      <br />
    </div>

    /*<div id="principal">

            <div id="conteudo1">
                <div id="texto">
                    <h5>A02 - Man. Mecânica</h5>
                    <h1>{props.name}</h1>
                </div>
                <p id="linha"></p>

                <div id="horas">

                </div>
            </div>
            <div id="icons">
                <div id="icon"><a><MaterialIcon icon="vpn_key" size={20} /></a><p>0000</p></div>
                <div id="icon2"><a><MaterialIcon icon="inventory2" size={20} /></a><p>0000</p></div>
            </div>

            <div id="conteudo2">
                <div className="informacoes">
                    <ApexChart />
                    <p id="oee">OEE = {oeeValue(25)}</p>
                </div>
                <div className="informacoes">

                    <div className="segundo">
                        <p id="aprovados">3.487</p>
                        APROVADAS
                    </div>
                </div>
                <div className="informacoes">
                    3
                </div>
            </div>
        </div>*/
  );
}
