import Stack from "@mui/material/Stack";
import React from 'react';
import styled,{ css } from 'styled-components';

export const BoxStackStyled = styled.div`
    opacity: 0;
    transition: opacity 100ms;
    ${(props) => props.visible === true && css`
        opacity: 1;
    `}
`

export const StackStyled = styled(Stack)`
    background-color: aliceblue;
    position: absolute;
    top: 55px;
    z-index: 1000;
    //transform: rotate(180deg);

`
