import styled, { css } from 'styled-components';

export const BoxPrincipalDivRegisterColector = styled.div`

    width: 70vh;
    height: 50vh;
    border: 1px solid rgba(0, 0, 0, 0.1);
    margin-left: 35%;
    border-radius: 5px;
    margin-top: 3%;
    padding: 2%;

    @media(max-width: 1600px) {
        width: 70vh;
        height: 65vh;
    }
`

export const CloseButtonRegisterColector = styled.button `
    text-decoration: none;
    border: none;
    background-color: white;
    color: #0C4394;
    font-weight: bold;
`

export const FieldNameRegisterColector = styled.p`
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    color: rgba(46, 47, 48, 1);
    white-space: nowrap;

    ${(props) => css`
        padding-right: ${props.pRight}%;
    `}
    

`
export const CancelButtonColector = styled.button`
    border: none;
    padding-top: 1%;
    padding-bottom: 1%;
    padding-left: 60px;
    padding-right: 60px;
    background-color: white;
    color: #C7C7C7;
    border-radius: 4px;
    :hover{
        color: #2E2F30;
    }
    @media(max-width: 1600px) {
        padding-left: 40px;
        padding-right: 40px;
    }
`
export const SaveButtonColector = styled.button`
    border: 1px solid #C7C7C7;
    padding-top: 2%;
    padding-bottom: 2%;
    padding-left: 70px;
    padding-right: 70px;
    background-color: white;
    color: #C7C7C7;
    border-radius: 4px;

    :hover{
        border-color: #0C4394;
        color: #0C4394;
    }

    @media(max-width: 1600px) {
        padding-left: 50px;
        padding-right: 50px;
    }
`