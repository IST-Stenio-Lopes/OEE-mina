import api from "./api";

interface ICreateCollectorDTO {
    user_id?: string;
    company_id?: string;
    uid: string;
    name: string;
    type: string;
    active?: boolean;
  }

export async function postCollector(collector : ICreateCollectorDTO){
    

    try {
        const response = await api.post("/collector/dashboard", collector);
        return response.status; 

    } catch (error: any) {
        return error.response.data.message;
    }


}

export async function listCollectors(){
    try {
        const response : any = await api.get("/collector/dashboard/list", {params: {itens_per_page: 500, page: 0, active: "Todos"}});
        return response.data;
    } catch (error: any) {
        return error.response.data.message ? error.response.data.message : error.message;

    }
}

export async function DeleteCollector(id: string){
    try {
        const response : any = await api.delete("/collector/dashboard/" + id.toString());
        return response.status;
    } catch (error : any) {
        return error.response.data.message;
        
    }
}

export async function ChangeCollectorStatus(id: string, status: boolean) {
    try {
        const response : any = await api.patch("/collector/dashboard/" + id.toString(), {active: status});
        return response.status;
    } catch (error : any) {
        return error.response.data.message;
        
    }
}