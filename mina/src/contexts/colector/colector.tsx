import { createContext, ReactNode, useCallback, useContext, useReducer, useState } from 'react';

export type Collector = {
    id?: string;
    identification: string; //Nome do coletor
    type: string; //Ex: Wise  qnd for cadastrar deve aparecer um select input para escolher qual o tipo
    last_atualization?: Date;

    channel_collector?: {
        active: boolean;
        channel: string;
        type: string;
        work_center: string;
        cumulative: boolean;
    }
    active?: boolean;
    company_id: string
}


type Action = {
    type: CollectorActions;
    payload: any;
}
type ContextType = {
    stateCollector: Collector;
    dispatch: (action: Action) => void;
}

type CollectorProviderProps = {
    children: ReactNode;
}

const initialData: Collector = { //dados iniciais
    identification: '',
    type: '',
    company_id: ''
}


// Context
const CollectorContext = createContext<ContextType | undefined>(undefined);

//Reducer
export enum CollectorActions {
    setId,
    setIdentification,

    reset
}

const collectorReducer = (collector: Collector, action: Action) => { //Ela recebe uma state (os dados), e recebe uma action (que ação eu quero executar com esses dados)
    switch (action.type) {
        case CollectorActions.setId:
            return { ...collector, id: action.payload };
        case CollectorActions.setIdentification:
            return { ...collector, identification: action.payload };


        case CollectorActions.reset:
            return initialData
        default:
            return collector;
    }
}

//Provider
export const CollectorProvider = ({ children }: CollectorProviderProps) => {

    const [stateCollector, dispatch] = useReducer(collectorReducer, initialData);
    const value = { stateCollector, dispatch };


    return (
        <CollectorContext.Provider value={value}> {/* value é um objeto com 2 itens q precise*/}
            {children}
        </CollectorContext.Provider>
    );
}

// Context Hook
export const useCollector = () => {
    const context = useContext(CollectorContext);

    if (context === undefined) {
        throw new Error('useCollector precisa ser usado dentro do ColectorProvider');
    }
    return context;
}