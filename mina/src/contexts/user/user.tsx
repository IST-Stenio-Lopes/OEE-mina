import jwtDecode from 'jwt-decode';
import React from "react";
import { createContext, ReactNode, useCallback, useContext, useReducer, useState } from 'react';

import api from '../../services/api';

/*
export type User = {
    id?: string;
    name: string,
    email: string
}

// define o tipo dos estados de autenticação
interface AuthState {
    token: string | null;
    user: User | null;
    refresh_token: string | null;
}
// define o tipo das credenciais do signin
interface SingInCredentials {
    email: string;
    password: string;
}

// define o tipo dos dados do contexto de autenticação
interface AuthContextData {
    user: User;
    signIn(crenditials: SingInCredentials): Promise<void>;
    signOut(): void;
    updateUser(user: User): void;
}

interface DecodedProps {
    [key: string]: string | Number;
    exp: number;
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
    email: ''
}

const initialDateAuthState: AuthState ={
    token: localStorage.getItem('@Fca:token'),
    user:  localStorage.getItem('@Fca:user') ? JSON.parse(localStorage.getItem('@Fca:user') as string) : null,
    refresh_token: localStorage.getItem('@Fca:refresh_token'),
}

// Context
const UserContext = createContext<ContextType | undefined>(undefined);

//Reducer
export enum UserActions {
    setId,
    setName,
    setEmail,

    reset
}


const userReducer = (user: User, action: Action) => { //Ela recebe uma state (os dados), e recebe uma action (que ação eu quero executar com esses dados)
    switch (action.type) { //um switch pra ver qual ação eu vou querer realizar, o type fala o tipo de ação, exemplo: trocar o nome do usuário que está no contexto, um setName.
        case UserActions.setId:
            return { ...user, id: action.payload };
        case UserActions.setName:
            return { ...user, machine_id: action.payload };
        case UserActions.setEmail:
            return { ...user, reason_code: action.payload };
        case UserActions.reset:
            return initialData
        default:
            return user;
    }
}

//Provider
export const UserProvider = ({ children }: UserProviderProps) => {
    () => {
    if(initialDateAuthState.refresh_token && initialDateAuthState.token && initialDateAuthState.user){
        const decoded: DecodedProps = jwtDecode(initialDateAuthState.token);
        const expirationTime = (decoded.exp * 1000);

            if(Date.now() >= expirationTime){
                return { } as AuthState;
            }else{
                api.defaults.headers.common.authorization = `Bearer ${initialDateAuthState.token}`;
            }

        return( initialDateAuthState.token, initialDateAuthState.user, initialDateAuthState.refresh_token);
      
    } return { } as AuthState;}
   


    const [stateUser, dispatch] = useReducer(userReducer, initialData); //state tem os dados, e dispatch tem uma função que usa para executar as ações //segundo parametro são dados iniciais
    const value = { stateUser, dispatch };


    return (
        <UserContext.Provider value={value}>
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
  */