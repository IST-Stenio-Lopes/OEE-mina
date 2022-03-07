import { createContext, ReactNode, useCallback, useContext, useReducer, useState } from 'react';

export type Machine = {
    id?: string;
    name: string;
    shift: string; //Turno que ela irá produzir
    produced_product?: { //Produto que está sendo produzido pela maquina
        code: string;  //O código do produto
        description: string; //A descrição do produto
    }
    production_per_hour: number; //quantas unidades são/foram produzidas no periodo de uma hora
    oee: number;
    approved: number;
    status: string;
    condition?: { //Caso o status seja 'parado' ou  'manutenção' a condição passa a existir
        contTime: Date; // Tanto no status 'parado' quanto 'manutenção' vai existir o contador, que mostra quanto tempo ele está com esse status
        codeCondition?: string; //O código da condição vai ser dado para o status 'parado' como uma justificativa do "por quê a maquina está parada. Ex: "A02 - Man. Preventiva"
    }
    discount_rework: boolean; //descontar retrabalho
    discount_scrap: boolean; //descontar refugo

}


//Dados necessários na listagem de maquinas nas estações de trabalho
interface MachineForWorksTationList {
    name: string;
    description: string;
    production_per_hour: number;
    oee: number; 
    discount_rework: boolean;
    discount_scrap: boolean;
}
//Dados necessários na especificação da maquina na estação de trabalho
interface MachineForWorksTation{
    name: string;
    status: string;
    approved: number;
    description: string;
    production_per_hour: number;
    oee: number; 
    discount_rework: boolean;
    discount_scrap: boolean;
}


//exibição inicial
/**
 * status (Funcionando, parado ou manutenção, e se tiver parado, qnt tempo ela tá parada em formato 'Dia | Hora | Minuto | Segundo')
 * nome
 * codigo do produto q esta sendo produzido
 * descrição do que está sendo produzido
 * OEE
 * qnt produtos aprovados
 */

type Action = {
    type: MachineActions;
    payload: any;
}
type ContextType = {
    stateMachine: Machine;
    dispatch: (action: Action) => void;
}

type MachineProviderProps = {
    children: ReactNode;
}

const initialData: Machine = { //dados iniciais
    name: '',
    shift: '',
    production_per_hour: 0,
    oee: 0,
    approved: 0,
    status: 'inativo',
    discount_rework: false,
    discount_scrap: false
}


// Context
const MachineContext = createContext<ContextType | undefined>(undefined);

//Reducer
export enum MachineActions {
    setId,
    setName,
    setShift,
    setProduced_product,
    setProduction_per_hour,
    setOee,
    setApproved,
    setStatus,
    setCondition,
    setDiscount_rework,
    setDiscount_scrap,

    reset
}

const machineReducer = (machine: Machine, action: Action) => { //Ela recebe uma state (os dados), e recebe uma action (que ação eu quero executar com esses dados)
    switch (action.type) { //um switch pra ver qual ação eu vou querer realizar, o type fala o tipo de ação, exemplo: trocar o nome do usuário que está no contexto, um setName.
        case MachineActions.setId:
            return { ...machine, id: action.payload };
        case MachineActions.setName:
            return { ...machine, name: action.payload };
        case MachineActions.setShift:
            return { ...machine, shift: action.payload };
        case MachineActions.setProduced_product:
            return { ...machine, produced_product: action.payload };
        case MachineActions.setProduction_per_hour:
            return { ...machine, production_per_hour: action.payload };
        case MachineActions.setOee:
            return { ...machine, oee: action.payload };
        case MachineActions.setApproved:
            return { ...machine, approved: action.payload };
        case MachineActions.setStatus:
            return { ...machine, status: action.payload };
        case MachineActions.setCondition:
            return { ...machine, condition: action.payload };
        case MachineActions.setDiscount_rework:
            return { ...machine, cach_in_word: action.payload };
        case MachineActions.setDiscount_scrap:
            return { ...machine, discount_scrap: action.payload };

        case MachineActions.reset:
            return initialData
        default:
            return machine;
    }
}

//Provider
export const MachineProvider = ({ children }: MachineProviderProps) => {

    const [stateMachine, dispatch] = useReducer(machineReducer, initialData); //state tem os dados, e dispatch tem uma função que usa para executar as ações //segundo parametro são dados iniciais
    const value = { stateMachine, dispatch };


    return (
        <MachineContext.Provider value={value}> {/* value é um objeto com 2 itens q precise*/}
            {children}
        </MachineContext.Provider>
    );
}

// Context Hook
export const useMachine = () => {
    const context = useContext(MachineContext);

    if (context === undefined) {
        throw new Error('useMachine precisa ser usado dentro do MachineProvider');
    }
    return context;
}