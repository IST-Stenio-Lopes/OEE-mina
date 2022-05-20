import SelectSearch from "react-select-search";
import styled, { css } from 'styled-components';

export const SelectSearchModifield = styled(SelectSearch)`
    .is-selected{
        border: none;
    }

    border: 0;
    z-index: 2;
    position: absolute;
    background-color: white;
    max-height: 500px;
    overflow: auto; /*Faz com que seja exibida a barra de scroll*/
    width: 18%;
    @media(max-width: 1500px) {
                width: 16%;
        }
    input{
        border: none;
        border-bottom: 1px solid gray;
        width: 100%;
        padding-bottom: 5%;
        
        
        ${(props) => props.status === 'Produzindo' && css`
            border-bottom: 2px solid #2BC079;
        `}

        ${(props) => props.status === 'Desativada ' && css`
            border-bottom: 2px solid #C66B00;
        `}

        ${(props) => props.status === 'Parada' && css`
            border-bottom: 2px solid #C02B2B;
        `}

    }
    
    > div:focus{
        //border: 20px solid red;
        border: 0;
        //background-color: red;
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

export const DateMachineStoped = styled.p`
    margin-left: 3%;
    font-size: 22px;
    
    ${(props) => props.description === 'Desativada ' && css`
        color: #C66B00;
    `}

    ${(props) => props.description === 'Parada' && css`
        color: #C02B2B;
    `}
    p{
        margin-left: -4%;
        font-size: 13px;
    }
    @media(max-width: 1500px) {
        font-size: 15px;

        p{
            font-size: 9px;
        }
    }
`

export const ButtonSetMachineDetailsBlue = styled.button`
    font-size: 8px;
    border: none;
    background-color: #0C4394;
    padding: 2%;
    z-index: 1;
    color: white;
    border-radius: 5px;


`

export const  ButtonMachineDetailsSimulate = styled.button`
    border: 1px solid #C1C2C3;
    color: #C1C2C3;
    background-color: white;
    padding: 0.4vw;
    width: 8vw;
    text-align: center;
    border-radius: 5px;
    z-index: 1;

    :hover{
        background-color: #0C4394;
        color: white;
    }
`

export const OeeGoalBarChart = styled.p`
    font-size: 10px;
    color: #C1C2C3;
`
export const OeelBarChart = styled.p`
    font-size: 12px;
    text-align: center;
`

export const SelectedMachineTopTextStatus = styled.p`
    font-size: 9px;
    font-weight: bolder;
    ${(props) => props.status === 'Produzindo' && css`
    color: #2BC079;
        `}

        ${(props) => props.status === 'Desativada ' && css`
        color: #C66B00;
        `}

        ${(props) => props.status === 'Parada' && css`
        color: #C02B2B;
        `}

`