import { response } from 'express';
import api from "./api";




export async function postOrder(machineId : string, obj: any){
    

    try {
        const response = await api.post(`/order/dashboard/${machineId}`, obj);

        return response; 

    } catch (error: any) {
        return error.response.data.message;
    }


}


export async function changeOrderStatus(id:string, status: string) {
    try {
      const response : any = await api.patch(`/order/dashboard/${id}`, {status: `${status}`});//[ Aguardando, Executando, Finalizada, Desativada ]
      //return response.data;

      return await response.status;
  } catch (error: any) {
      return error.response.data.message ? error.response.data.message : error.message;
  }
  }

export async function SendOrderToMachine(machineId:string, orderId: string) {
    try {
       const response: any = await api.patch(`/machine/dashboard/order/${machineId}`, {order_id: orderId}); 
       //console.log(response);
       return await response;
    } catch (error: any) {
        return error.response.data.message ? error.response.data.message : error.message;
    }
}