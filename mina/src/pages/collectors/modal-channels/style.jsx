import styled, {css} from 'styled-components'

export const PrincipalContainerModalCollectorChannel = styled.div`
    background-color: white;
    margin-top: 10%;
    margin-left: 16%;
    width: 65vw;
    height: 65vh;
    padding: 1.2%;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 4px;

    @media(max-width: 1600px) {
        height: 85vh;
    }
`

export const BoxTitleAndSubtitleCollectorChannel = styled.div`
    border-bottom: 1px solid #C1C2C3;
    p{
        font-size: 12px;
        color: #888A8C;
    }    
`

export const ContainerRegisterChannel = styled.div`
    margin-top: 2%;
    font-family: Montserrat;

     .title {

        font-size: 14px;
        color: #888A8C;
        font-weight: bolder;
    }
`
export const FieldNameRegisterCollectorChannel = styled.p`
    font-family: Montserrat;
    color: rgba(46, 47, 48, 1);
    white-space: nowrap;

    ${(props) => css`
        
    `}
`
export const TableFieldCollectorChannel = styled.div`
    margin-top: 2%;
    display: flex;
    align-items: center;
    border-bottom: 1px solid gray;
    width: 100%;
    text-align: center;
    justify-content: space-between;
    p{

        width: 230px;
        text-align: center;
    }
`

export const TableValuesCollectorChannel = styled.div`
    margin-top: 1%;
    display: grid;
    overflow: auto;
    width: 100%;
    align-items: center;
    div{
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    p{

        width: 230px;
        text-align: center;
    }
`
export const CloseButtonCollectorChannel = styled.button `
    text-decoration: none;
    border: none;
    background-color: white;
    color: #0C4394;
    font-weight: bold;
`