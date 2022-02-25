import { createContext, ReactNode, useCallback, useContext, useReducer, useState } from 'react';

export type Colector = {
    id?: string;
    identification: string;
    type: string;
    last_atualization?: Date;
    channel_colector?: {
        active: boolean;
        code: string;
        type: string;
        work_center: string;
        cumulative: boolean;
    }
    active?: boolean;
}


type Action = {
    type: ColectorActions;
    payload: any;
}
type ContextType = {
    stateColector: Colector;
    dispatch: (action: Action) => void;
}

type ColectorProviderProps = {
    children: ReactNode;
}

const initialData: Colector = { //dados iniciais
    identification: '',
    type: ''
}


// Context
const ColectorContext = createContext<ContextType | undefined>(undefined);

//Reducer
export enum ColectorActions {
    setId,
    setIdentification,

    reset
}

const colectorReducer = (colector: Colector, action: Action) => { //Ela recebe uma state (os dados), e recebe uma action (que ação eu quero executar com esses dados)
    switch (action.type) {
        case ColectorActions.setId:
            return { ...colector, id: action.payload };
        case ColectorActions.setIdentification:
            return { ...colector, identification: action.payload };


        case ColectorActions.reset:
            return initialData
        default:
            return colector;
    }
}

//Provider
export const ColectorProvider = ({ children }: ColectorProviderProps) => {

    const [stateColector, dispatch] = useReducer(colectorReducer, initialData);
    const value = { stateColector, dispatch };


    return (
        <ColectorContext.Provider value={value}> {/* value é um objeto com 2 itens q precise*/}
            {children}
        </ColectorContext.Provider>
    );
}

// Context Hook
export const useColector = () => {
    const context = useContext(ColectorContext);

    if (context === undefined) {
        throw new Error('useColector precisa ser usado dentro do ColectorProvider');
    }
    return context;
}