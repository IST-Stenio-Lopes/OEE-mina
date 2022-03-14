import styled, {css} from 'styled-components';
import SelectSearch from "react-select-search";


export const SelectSearchModifield = styled(SelectSearch)`

    position: absolute;
    background-color: white;
    max-height: 500px;
    overflow: auto; /*Faz com que seja exibida a barra de scroll*/
    width: 18%;

    input{
        border: none;
        border-bottom: 1px solid gray;
        width: 100%;

        ${(props) => props.status === 'funcionando' && css`
        border-bottom: 2px solid #2BC079;
        `}

        ${(props) => props.status === 'manutencao' && css`
        border-bottom: 2px solid #C66B00;
        `}

        ${(props) => props.status === 'pausa' && css`
        border-bottom: 2px solid #C02B2B;
        `}
    }

    input:focus{
        border: none;
    }

    ul{
        list-style: none;
        text-decoration: none;
        
    }

    ul li *{
        text-decoration: none;
        border: none;
        background-color: unset;
        border-bottom: 1px solid gray;
        padding-top: 10px;
        font-size: 12px;
        text-align: start;
    }
 
`

export const DateMachineStoped = styled.div`

    ${(props) => props.description === 'manutencao' && css`
        background-color: #C66B00;
    `}

    ${(props) => props.description === 'pausa' && css`
        color: #C02B2B;
    `}
`

