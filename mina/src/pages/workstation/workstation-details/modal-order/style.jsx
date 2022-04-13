import styled, {css} from 'styled-components';


export const ContainerModalOrder = styled.div`
    width: 70vh;
    height: 42vh;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    background-color: white;
    margin-left: 35%;
    margin-top: 13%;
    padding: 2%;

    h1{
        font-size: 18px;
        font-weight: bolder;
        text-align: center;
        width: 100%;
    }
    
    ${(props) => props.size <= 1600 && css`
        height: 57vh;
    `}
    @media(max-width: 1500px) {
        margin-left: 35%;
        width: 80vh;
        height: 60vh;

        h1{
            font-size: 14px;
            margin-bottom: 5%;
        }
    }
`

export const CloseButtonAddOrder = styled.button `
    text-decoration: none;
    border: none;
    background-color: white;
    color: #0C4394;
    font-weight: bold;
`

export const FieldNameAddOrder = styled.p`
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    color: rgba(46, 47, 48, 1);
    white-space: nowrap;

 /*    ${(props) => css`
        padding-right: ${props.pRight}%;
    `} */
    

`