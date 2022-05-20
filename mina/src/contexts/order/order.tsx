import { createContext, ReactNode, useCallback, useContext, useReducer, useState } from 'react';

export type Order = {
    id?: string;
    begin: Date;
    end: Date;
    order_code: string;
    automatic_code: boolean;
    work_center_exclusive: boolean;
    planned_quantity: number;
    product: string;
}

type Action = {
    type: OrderActions;
    payload: any;
}
type ContextType = {
    stateOrder: Order;
    dispatch: (action: Action) => void;
}

type OrderProviderProps = {
    children: ReactNode;
}

const initialData: Order = { //dados iniciais
    begin: new Date(),
    end: new Date(),
    order_code: '',
    automatic_code: false,
    work_center_exclusive: false,
    planned_quantity: 0,
    product: ''
}


// Context
const OrderContext = createContext<ContextType | undefined>(undefined);

//Reducer
export enum OrderActions {
    setId,
    setBegin,
    setEnd,
    setOrder_code,
    setAutomatic_code,
    setWork_center_exclusive,
    setPlanned_quantity,
    setProduct,

    reset
}

const orderReducer = (order: Order, action: Action) => { //Ela recebe uma state (os dados), e recebe uma action (que ação eu quero executar com esses dados)
    switch (action.type) { //um switch pra ver qual ação eu vou querer realizar, o type fala o tipo de ação, exemplo: trocar o nome do usuário que está no contexto, um setName.
        case OrderActions.setId:
            return { ...order, id: action.payload };
        case OrderActions.setBegin:
            return { ...order, name: action.payload };
        case OrderActions.setEnd:
            return { ...order, name: action.payload };
        case OrderActions.setOrder_code:
            return { ...order, name: action.payload };
        case OrderActions.setAutomatic_code:
            return { ...order, name: action.payload };
        case OrderActions.setWork_center_exclusive:
            return { ...order, name: action.payload };
        case OrderActions.setPlanned_quantity:
            return { ...order, name: action.payload };
        case OrderActions.setProduct:
            return { ...order, name: action.payload };

        case OrderActions.reset:
            return initialData
        default:
            return order;
    }
}

//Provider
export const OrderProvider = ({ children }: OrderProviderProps) => {

    const [stateOrder, dispatch] = useReducer(orderReducer, initialData); //state tem os dados, e dispatch tem uma função que usa para executar as ações //segundo parametro são dados iniciais
    const value = { stateOrder, dispatch };


    return (
        <OrderContext.Provider value={value}> {/* value é um objeto com 2 itens q precise*/}
            {children}
        </OrderContext.Provider>
    );
}

// Context Hook
export const useOrder = () => {
    const context = useContext(OrderContext);

    if (context === undefined) {
        throw new Error('useOrder precisa ser usado dentro do OrderProvider');
    }
    return context;
}