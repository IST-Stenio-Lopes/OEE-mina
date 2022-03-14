import styled from "styled-components";
import { css } from "styled-components";
import MaterialIcon from 'react-google-material-icons';

/*export const Container = styled.div`
    width: 1vh;
    height: 1vh;
    background-color: ${(props) => props.background && css`
        background-color: ${props.background};
    `};//background-color: green;
`
*/

export const StatusColor = styled.p`
    ${(props) => props.description === 'funcionando' && css`
        color: #2BC079;
    `}

    ${(props) => props.description === 'manutencao' && css`
        color: #C66B00;
    `}

    ${(props) => props.description === 'pausa' && css`
        color: #C02B2B;
    `}
`
export const DateStatusControll = styled.p`
    font-size: 12px;
    ${(props) => props.description === 'funcionando' && css`
        display:none;
    `}

    ${(props) => props.description === 'manutencao' && css`
        color: #C66B00;
    `}

    ${(props) => props.description === 'pausa' && css`
        color: #C02B2B;
    `}
`

export const NameTop = styled.h5`
    font-size: 10px;
    margin-left: -10px;
    ${(props) => props.description === 'funcionando' && css`
        color: #2BC079;
    `}

    ${(props) => props.description === 'manutencao' && css`
        color: #C66B00;
    `}

    ${(props) => props.description === 'pausa' && css`
        color: #C02B2B;
    `}
`


export const LinhaL = styled.p`
    width: 98%;
    text-align: center;
    padding: 0px;
    margin-top: -4%;
    margin-left: 7%;
    ${(props) => props.description === 'funcionando' && css`
        border-top: 2px solid #2BC079;
    `}

    ${(props) => props.description === 'manutencao' && css`
        border-top: 2px solid #C66B00;
    `}

    ${(props) => props.description === 'pausa' && css`
        border-top: 2px solid #C02B2B;
    `}
`


/*export const LineDiv = styled.p`
    width: 3vh;
    height: 1vh;
    //background-color: red;


                
    ${(props) => props.description === 'funcionando' && css`
        background-color: green; 
    `}

    ${(props) => props.description === 'manutencao' && css`
        background-color: red; 
    `}

    ${(props) => props.description === 'pausa' && css`
        background-color: purple; 
    `}

    ${(props) => {

        if (props.description === 'funcionando') {
            return css`
                background-color: green; 
            `
        } else if (props.description === 'manutencao') {
            return css`
                background-color: red; 
            `
        } else {
            return css`
                background-color: purple; 
            `
        }

    }} 
`*/
