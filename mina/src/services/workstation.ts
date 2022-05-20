import axios from "axios";
import { response } from 'express';
import React, { useCallback } from "react";

import { AlertActions, useAlert } from "../contexts/alert/alert";
import { Workstation } from './../contexts/workstation/workstation';
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
    //console.log(response);
} catch (error: any) {
    
    
    //console.error(error);
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
    shifts: [{hour_begin: string , hour_end: string}];
    status?: string;
  }

  interface PatchStopObjectI{
    status: string,
    status_code: string,
    description: string
}



  export async function changeWorkstation(id:string, machine: ICreateMachineDTO) {
      try {
        const response = api.put(`/machine/dashboard/${id}`, machine);
        return (await response).status; 
      } catch (error: any) {
        return error.response.data.message;
      }
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
            const response = api.post("/machine/dashboard", machine);
            //console.log("chegou!" + (await response).status);
            return (await response).status; 
            
        } catch (error: any) {
          //console.log("chegou no erro!")
          //console.log(error.response.data.message);
           return error.response.data.message;
        }
    }

    export async function listWorkstationsBegin(){
      try {
          const response : any = await api.get("/machine/dashboard/list", {params: {itens_per_page: 500, page: 0}});
          return response.data;
      } catch (error: any) {
          return error.response.data.message ? error.response.data.message : error.message;
      }
  }

    export async function deleteWorkstation(id:string) {
      try {
        const response : any = await api.delete(`/machine/dashboard/${id}`, {params: {itens_per_page: 500, page: 0}});
        //return response.data;
        return (await response).status;
    } catch (error: any) {
        return error.response.data.message ? error.response.data.message : error.message;
    }
    }


    export async function StopMachine(id:string, obj: PatchStopObjectI) {
      try {
        const response : any = await api.patch(`/machine/dashboard/suppression/${id}`, obj);
        //return response.data;
        return (await response).status;
    } catch (error: any) {
        return error.response.data.message ? error.response.data.message : error.message;
    }
    }

    export async function StartMachine(id:string) {
      try {
        const response : any = await api.patch(`/machine/dashboard/suppression/release/${id}`, {status: "Produzindo"});
        //return response.data;
        return response;
    } catch (error: any) {
        return error.response.data.message ? error.response.data.message : error.message;
    }
    }

    export async function getSpecifcWorkstation(machineId: string) {
        try {
          const response : any = await api.get(`/machine/dashboard/specific/${machineId}`);
          return (await response).data;
        } catch (error: any) {
          return error.response.data.message ? error.response.data.message : error.message;
        }
    }

  



