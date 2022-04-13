import api from "./api";




export async function postOrder(machineId : string, obj: any){
    

    try {
        const response = await api.post(`/order/dashboard/${machineId}`, obj);
        return response.status; 

    } catch (error: any) {
        return error.response.data.message;
    }


}