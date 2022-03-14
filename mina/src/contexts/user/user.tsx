import { createContext, ReactNode, useCallback, useContext, useReducer, useState } from 'react';


export type User = {
    id?: string;
    name: string,
    password: string
}

type Action = {
    type: UserActions;
    payload: any;
}
type ContextType = {
    stateUser: User;
    dispatch: (action: Action) => void;
}

type UserProviderProps = {
    children: ReactNode;
}

const initialData: User = { //dados iniciais
    name: '',
    password: ''
}

// Context
const UserContext = createContext<ContextType | undefined>(undefined);

//Reducer
export enum UserActions {
    setId,
    setName,
    setPassword,

    reset
}

const userReducer = (user: User, action: Action) => { //Ela recebe uma state (os dados), e recebe uma action (que ação eu quero executar com esses dados)
    switch (action.type) { //um switch pra ver qual ação eu vou querer realizar, o type fala o tipo de ação, exemplo: trocar o nome do usuário que está no contexto, um setName.
        case UserActions.setId:
            return { ...user, id: action.payload };
        case UserActions.setName:
            return { ...user, machine_id: action.payload };
        case UserActions.setPassword:
            return { ...user, reason_code: action.payload };
        case UserActions.reset:
            return initialData
        default:
            return user;
    }
}

//Provider
export const UserProvider = ({ children }: UserProviderProps) => {

    const [stateUser, dispatch] = useReducer(userReducer, initialData); //state tem os dados, e dispatch tem uma função que usa para executar as ações //segundo parametro são dados iniciais
    const value = { stateUser, dispatch };


    return (
        <UserContext.Provider value={value}> {/* value é um objeto com 2 itens q precise*/}
            {children}
        </UserContext.Provider>
    );
}

// Context Hook
export const useUser = () => {
    const context = useContext(UserContext);

    if (context === undefined) {
        throw new Error('useUser precisa ser usado dentro do UserProvider');
    }
    return context;
}
