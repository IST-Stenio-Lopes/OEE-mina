import { createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useReducer, useState } from 'react';
import socketCliente, { Manager } from "socket.io-client";

import { socketServer } from '../../services/api';

type ObjectSocketToSend = {
    inMachineList: boolean;
    inMachineDetails: boolean;
    machine_list: string[];
    locationUrl: string;
    ioSocket: any;
    user: any;
}

export enum SocketActions {
    setInMachineList,
    setInMachineDetails,
    setMachine_list,
    setLocationUrl,
    setIoSocket,
    setUser,
}

type Action = {
    type: SocketActions;
    payload: any;
}
type ContextType = {
    stateSocket: ObjectSocketToSend;
    dispatch: (action: Action) => void;
}
type SocketProviderProps = {
    children: ReactNode;
}



// Context
const SocketContext = createContext<ContextType | undefined>(undefined);

const socketReducer = (socket: ObjectSocketToSend, action: Action) => { //Ela recebe uma state (os dados), e recebe uma action (que ação eu quero executar com esses dados)
    switch (action.type) { //um switch pra ver qual ação eu vou querer realizar, o type fala o tipo de ação, exemplo: trocar o nome do usuário que está no contexto, um setName.
        case SocketActions.setInMachineDetails:
            return { ...socket, machineDetails: action.payload };
        case SocketActions.setInMachineList:
            return { ...socket, inMachineList: action.payload };
        case SocketActions.setMachine_list:
            return { ...socket, machine_list: action.payload };
        case SocketActions.setLocationUrl:
            return { ...socket, locationUrl: action.payload };
        case SocketActions.setIoSocket:
            return { ...socket, ioSocket: action.payload };
        case SocketActions.setUser:
            return { ...socket, user: action.payload };


    }
}

//Provider
export const SocketProvider = ({ children }: SocketProviderProps) => {

    const ioSocket = socketCliente(socketServer, {
        path: "/dashboard/",
        auth: {
            //company_id: MachineAuth,
            user_id: undefined,
            //user_id: localStorage.getItem("@Oee:user_id"),
            //company_id: localStorage.getItem("@Oee:company_id"),
        },
        reconnectionDelay: 5000,
        reconnection: false,
        autoConnect: false,
    });

    const initialData: ObjectSocketToSend = { //dados iniciais
        inMachineList: false,
        inMachineDetails: false,
        machine_list: [],
        locationUrl: '',
        ioSocket,
        user: null,
    }

    const [stateSocket, dispatch] = useReducer(socketReducer, initialData); //state tem os dados, e dispatch tem uma função que usa para executar as ações //segundo parametro são dados iniciais
    const value = { stateSocket, dispatch };

    const path = useMemo(() => stateSocket.locationUrl, [stateSocket])


    const handleSocketSetInMachineList = (b: boolean) => {
        dispatch({
            type: SocketActions.setInMachineList,
            payload: b,
        })
    }

    const handleSocketSetInMachineDetails = (b: boolean) => {
        dispatch({
            type: SocketActions.setInMachineDetails,
            payload: b
        })
    }

    useEffect(() => {
        if (stateSocket.user) {

            stateSocket.ioSocket.auth.user_id = stateSocket.user.user_id;
            stateSocket.ioSocket.connect();

            if (path === "/machines") {
                handleSocketSetInMachineList(true);
                handleSocketSetInMachineDetails(false);
            } else if (path === '/workstation/details') {
                handleSocketSetInMachineDetails(true);
                handleSocketSetInMachineList(false);
            } else {
                handleSocketSetInMachineDetails(false);
                handleSocketSetInMachineList(false);
            }
        }
        else {
            return () => {
                stateSocket.ioSocket.close();
            }
        }

    }, [stateSocket.user])



    return (
        <SocketContext.Provider value={value}> {/* value é um objeto com 2 itens q precise*/}
            {children}
        </SocketContext.Provider>
    );
}

// Context Hook
export const useSocket = () => {
    const context = useContext(SocketContext);

    if (context === undefined) {
        throw new Error('useSocket precisa ser usado dentro do OrderProvider');
    }
    return context;
}