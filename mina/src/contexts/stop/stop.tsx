import { createContext, ReactNode, useCallback, useContext, useReducer, useState } from 'react';


export type Stop = {
    id?: string;
    machine_id?: string; //O id da maquina relacionada a parada
    reason_code: string; //código do motivo da parada
    estimated_date: string; //Data estimada que a parada irá tomar
    equipament?: string; //O equipamento da maquina que vai parar
    initial_date?: Date; //A data inicial da parada, fornecida pelo back quando aceitar a requisição
}

type Action = {
    type: StopActions;
    payload: any;
}
type ContextType = {
    stateStop: Stop;
    dispatch: (action: Action) => void;
}

type StopProviderProps = {
    children: ReactNode;
}

const initialData: Stop = { //dados iniciais
    machine_id: '',
    reason_code: '',
    estimated_date: '',
    initial_date: new Date()
}

// Context
const StopContext = createContext<ContextType | undefined>(undefined);

//Reducer
export enum StopActions {
    setId,
    setMachine_id,
    setReason_code,
    setEstimated_date,
    setEquipament,
    setInitial_date,

    reset
}

const stopReducer = (stop: Stop, action: Action) => { //Ela recebe uma state (os dados), e recebe uma action (que ação eu quero executar com esses dados)
    switch (action.type) { //um switch pra ver qual ação eu vou querer realizar, o type fala o tipo de ação, exemplo: trocar o nome do usuário que está no contexto, um setName.
        case StopActions.setId:
            return { ...stop, id: action.payload };
        case StopActions.setMachine_id:
            return { ...stop, machine_id: action.payload };
        case StopActions.setReason_code:
            return { ...stop, reason_code: action.payload };
        case StopActions.setEstimated_date:
            return { ...stop, estimated_date: action.payload };
        case StopActions.setEquipament:
            return { ...stop, equipament: action.payload };
        case StopActions.setInitial_date:
            return { ...stop, initial_date: action.payload };

        case StopActions.reset:
            return initialData
        default:
            return stop;
    }
}

//Provider
export const StopProvider = ({ children }: StopProviderProps) => {

    const [stateStop, dispatch] = useReducer(stopReducer, initialData); //state tem os dados, e dispatch tem uma função que usa para executar as ações //segundo parametro são dados iniciais
    const value = { stateStop, dispatch };


    return (
        <StopContext.Provider value={value}> {/* value é um objeto com 2 itens q precise*/}
            {children}
        </StopContext.Provider>
    );
}

// Context Hook
export const useStop = () => {
    const context = useContext(StopContext);

    if (context === undefined) {
        throw new Error('useStop precisa ser usado dentro do StopProvider');
    }
    return context;
}
