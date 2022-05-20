import api from "./api";

interface ICreateChannelDTO {
    user_id?: string;
    company_id?: string;
    uid: string;
    name: string;
    type: string;
    active?: boolean;
  }


export async function postChannel(id: string, collector : ICreateChannelDTO){

    try {
        const response = await api.put(`/collector/dashboard/${id}`, collector);
        return response.status; 

    } catch (error: any) {
        return error.response.data.message;
    }

}

export async function listChannels(collectorId:string) {
    try {
        const response = await api.get(`/collector/dashboard/specific/${collectorId}`);
        return response.data.channels; 

    } catch (error: any) {
        return error.response.data.message;
    }
}

export async function deleteChannel(id: string, collector : ICreateChannelDTO){

    try {
        const response = await api.put(`/collector/dashboard/${id}`, collector);
        return response.status; 

    } catch (error: any) {
        return error.response.data.message;
    }

}