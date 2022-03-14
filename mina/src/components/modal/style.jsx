import styled from 'styled-components';
import { css } from "styled-components";



export const ModalContainer = styled.div`
    position: fixed;

	font-family: Arial, Helvetica, sans-serif;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background: rgba(0,0,0,0.8);
	z-index: 999;
	opacity:1;
	-webkit-transition: opacity 400ms ease-in;
	-moz-transition: opacity 400ms ease-in;
	transition: opacity 400ms ease-in;
	pointer-events: auto; //se colocar nono, não dá pra clicar em nada
    
    /* :target {
        opacity: 1;
        pointer-events: auto;
    } */
    
    /* >div {
	width: 50vh;
    height: 42vh;
	position: relative;
	margin: 10% auto;
	padding: 5px 20px 13px 20px;
	border-radius: 10px;
	background: #fff;

    z-index: 5;

    @media (max-width: 1500px) {
        height: 45vh;
    }
    } */


`