import { response } from 'express';
import { Workstation } from './../contexts/workstation/workstation';
import axios from "axios";
import React, { useCallback } from "react";
import { useAlert, AlertActions } from "../contexts/alert/alert";
import api from "./api";

//  /machine/dashboard   para adicionar maquina
//  Listagem detalhada na tela inicial /dashboard/list/detailed
// Listagem simples /






/*
export async function getWorkstationsDetailed(){

const { dispatch } = useAlert();

 const handleAlertSetValues = (type: string, title: string, msg: string) => {
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

try {
    const response = await api.get('/dashboard/list/detailed');
    console.log(response);
} catch (error: any) {
    
    
    console.error(error);
    handleAlertSetValues(
        "error",
        "Deu águia!",
        error.response.data.message
    ) 
}
}
 */

interface ICreateMachineDTO {
    user_id?: string;
    company_id?: string;
    name: string;
    production_per_hour: number;
    oee: number;
    discount_rework: boolean;
    discount_scrap: boolean;
    status?: string;
  }


 
    export async function postWorkstation(machine : ICreateMachineDTO){
    
        //const { dispatch } = useAlert();
         /* const handleAlertSetValues = (type: string, title: string, msg: string) => {
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
          };  */
          
        try {
            const response = api.post("http://192.168.1.191:5555/machine/dashboard ", machine);
            //console.log("chegou!" + (await response).status);
            return (await response).status;
            
        } catch (error: any) {
          //console.log("chegou no erro!")
          //console.log(error.response.data.message);
           return error.response.data.message;
        }
    } 



