import React from "react";
import styled, {css} from 'styled-components';


export const BoxPrincipalDivCollectors = styled.div`
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    margin-top: 3%;
    padding: 2%;
    margin-top: 10%;
    margin-left: 5%;
    margin-right: 5%;

    h1{
        font-size: 18px;
        font-weight: bolder;
        align-self: center;
    }
`

export const ButtonAddCollector = styled.button`
    border: none;
    padding: 5px 20px;
    border-radius: 4px;
    background-color: #052554;
    color: #FFF;
    align-self: center;
`
export const DescriptionTableCollector = styled.div`
    margin-top: 2%;
    font-weight: bolder;
    font-size: 12px;
    text-align: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 15px;
    border-bottom: 2px solid rgba(0, 0, 0, 0.1);


    p{
        width: 150px;
    }
`

export const DataTableCollector = styled.div`
    
    div{
       display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;
    border-bottom: 2px solid #e5e5e5;
    font-size: 12px;
    text-align: center; 

        div{
            border: none;
        }
    }
    

    p{
        width: 150px;
    }
`
