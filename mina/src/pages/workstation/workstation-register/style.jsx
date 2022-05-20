import styled, {css} from "styled-components";

export const BoxDivPrincipalRegisterWorkstation = styled.div`
    width: 70vh;
    height: auto;
    border: 1px solid rgba(0, 0, 0, 0.1);
    margin-left: 35%;
    margin-top: 7%;
    padding: 2%;


    h1{
        font-size: 18px;
        font-weight: bolder;
        text-align: center;
        width: 100%;
    }
    

/*     ${(props) => props.size <= 1600 && css`
        height: 57vh auto;
    `}
    @media(max-width: 1500px) {
        margin-left: 35%;
        width: 80vh;
        height: 70vh;

        h1{
            font-size: 14px;
            margin-bottom: 5%;
        }
    } */
`

export const ShiftAreaExpand = styled.div`

`
export const MakeSpanToButton = styled.span`
    cursor: pointer;
` 

export const CloseButtonRegisterWorkstation = styled.button `
    text-decoration: none;
    border: none;
    background-color: white;
    color: #0C4394;
    font-weight: bold;
`

export const FieldNameRegisterWorkstation = styled.p`
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

export const ReduceSizeFieldTextWorkstation = styled.div`
  height: 50px;
`

export const CancelButton = styled.button`
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
`
export const SaveButton = styled.button`
    border: none;
    padding-top: 1%;
    padding-bottom: 1%;
    padding-left: 70px;
    padding-right: 70px;
    background-color: #0C4394;
    color: white;
    border-radius: 4px;


`