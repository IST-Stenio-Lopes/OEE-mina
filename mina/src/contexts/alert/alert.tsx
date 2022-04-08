import React, { createContext, ReactNode, useCallback, useContext, useEffect, useReducer, useState } from 'react';

/* import { handleAlertSetVisibilityFalse } from './alert-functions/alertFunctions'; */

export type AlertI = {
    id?: string,
    type: "error" | "warning" | "info" | "success",
    visibility: boolean,
    title: string,
    msg: string

}

type Action = {
    type: AlertActions;
    payload: any;
}
type ContextType = {
    stateAlert: AlertI;
    dispatch: (action: Action) => void;
}

type AlertProviderProps = {
    children: ReactNode;
}

const initialData: AlertI = { //dados iniciais
    type: "error",
    visibility: false,
    title: "Teste",
    msg: "testando o app"
}


// Context
//const AlertContext = createContext<ContextType>({} as ContextType);
const AlertContext = createContext<ContextType | undefined>(undefined);

//Reducer
export enum AlertActions {
    setId,
    setType,
    setVisibility,
    setTitle,
    setMsg,

    reset
}

const alertReducer = (alert: AlertI, action: Action) => { //Ela recebe uma state (os dados), e recebe uma action (que ação eu quero executar com esses dados)
    switch (action.type) { //um switch pra ver qual ação eu vou querer realizar, o type fala o tipo de ação, exemplo: trocar o nome do usuário que está no contexto, um setName.
        case AlertActions.setId:
            return { ...alert, id: action.payload };
        case AlertActions.setType:
            return { ...alert, type: action.payload };
        case AlertActions.setVisibility:
            return { ...alert, visibility: action.payload };
        case AlertActions.setTitle:
            return { ...alert, title: action.payload };
        case AlertActions.setMsg:
            return { ...alert, msg: action.payload };

        case AlertActions.reset:
            return initialData;
        default:
            return alert;
    }
}

//Provider
export const AlertProvider = ({ children }: AlertProviderProps) => {

    const [stateAlert, dispatch] = useReducer(alertReducer, initialData); //state tem os dados, e dispatch tem uma função que usa para executar as ações //segundo parametro são dados iniciais
    const value = { stateAlert, dispatch };


    /* const handleSetVisibilityFalse = () => {
        dispatch({
            type: AlertActions.reset,
            payload: false
        });
    }; */

    /* handleAlertSetVisibilityFalse; */

    const handleAlertSetVisibilityFalse = () => {
        dispatch({
            type: AlertActions.setVisibility,
            payload: false
        });
    };

    //faz com que a visibilidade do modal dure apenas 5 segundos
    useEffect(() => {
        let time: any
        if (stateAlert.visibility === true) {
            time = setInterval(
                handleAlertSetVisibilityFalse, 5000
            );

        } else {
            clearInterval(time);

        }
        return () => clearInterval(time); //Colocando o return dentro de useEffect, chama quando ele é desfeito. então ele vai limpar
    }, [stateAlert.visibility])





    return (
        <AlertContext.Provider value={value}> {/* value é um objeto com 2 itens q precise*/}
            {children}
        </AlertContext.Provider>
    );
}

// Context Hook
export const useAlert = () => {
    const context = useContext(AlertContext);

    if (context === undefined) {
        throw new Error('useAlert precisa ser usado dentro do AlertProvider');
    }
    return context;
}