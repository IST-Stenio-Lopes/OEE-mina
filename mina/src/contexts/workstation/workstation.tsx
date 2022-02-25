import { createContext, ReactNode, useCallback, useContext, useReducer, useState } from 'react';

export type Workstation = {
    id?: string;
    name: string;
    description: string;
    production_per_hour: number;
    oee: number;
    cach_in_word: boolean,
    discount_scrap: boolean,



}


type Action = {
    type: WorkstationActions;
    payload: any;
}
type ContextType = {
    stateWorkstation: Workstation;
    dispatch: (action: Action) => void;
}

type WorkstationProviderProps = {
    children: ReactNode;
}

const initialData: Workstation = { //dados iniciais
    name: '',
    description: '',
    production_per_hour: 0,
    oee: 0,
    cach_in_word: false,
    discount_scrap: false

}


// Context
const WorkstationContext = createContext<ContextType | undefined>(undefined);

//Reducer
export enum WorkstationActions {
    setId,
    setName,
    setDescription,
    setProduction_per_hour,
    setOee,
    setCach_in_word,
    setDiscount_scrap,


    reset
}

const workstationReducer = (workstation: Workstation, action: Action) => { //Ela recebe uma state (os dados), e recebe uma action (que ação eu quero executar com esses dados)
    switch (action.type) {
        case WorkstationActions.setId:
            return { ...workstation, id: action.payload };
        case WorkstationActions.setId:
            return { ...workstation, id: action.payload };
        case WorkstationActions.setProduction_per_hour:
            return { ...workstation, production_per_hour: action.payload };
        case WorkstationActions.setOee:
            return { ...workstation, oee: action.payload };
        case WorkstationActions.setCach_in_word:
            return { ...workstation, cach_in_word: action.payload };
        case WorkstationActions.setDiscount_scrap:
            return { ...workstation, discount_scrap: action.payload };


        case WorkstationActions.reset:
            return initialData
        default:
            return workstation;
    }
}

//Provider
export const WorkstationProvider = ({ children }: WorkstationProviderProps) => {

    const [stateWorkstation, dispatch] = useReducer(workstationReducer, initialData);
    const value = { stateWorkstation, dispatch };


    return (
        <WorkstationContext.Provider value={value}> {/* value é um objeto com 2 itens q precise*/}
            {children}
        </WorkstationContext.Provider>
    );
}

// Context Hook
export const useWorkstation = () => {
    const context = useContext(WorkstationContext);

    if (context === undefined) {
        throw new Error('useWorkstation precisa ser usado dentro do WorkstationProvider');
    }
    return context;
}