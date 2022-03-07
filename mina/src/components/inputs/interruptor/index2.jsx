import * as React from 'react';
import { styled } from '@mui/system';
import SwitchUnstyled, { switchUnstyledClasses } from '@mui/base/SwitchUnstyled';




const blue = {
    500: '#007FFF',
  };
  
  const grey = {
    400: '#BFC7CF',
    500: '#AAB4BE',
    600: '#6F7E8C',
  };
  
  const Root = styled('span')(
    ({ theme }) => `
    font-size: 0;
    position: relative;
    display: inline-block;
    width: 40px;
    height: 20px;
    margin: 0px;
    cursor: pointer;
  
    &.${switchUnstyledClasses.disabled} {
      opacity: 0.4;
      cursor: not-allowed;
    }
  
    & .${switchUnstyledClasses.track} {
      background: ${theme.palette.mode === 'dark' ? '#fff' : '#fff'};  //fundo botão habilitado / fundo botão desabilitado
      border-radius: 10px;
      display: block;
      height: 100%;
      width: 100%;
      position: absolute;
      border: 2px solid #C7C7C7; //borda do botão habilitado
    }
  
    & .${switchUnstyledClasses.thumb} {
      display: block;
      width: 14px;
      height: 14px;
      top: 3px;
      left: 3px;
      border-radius: 16px;
      background-color: #C7C7C7;  //bolinha do botão desabilitado
      position: relative;
      transition: all 200ms ease;
    }
  
    &.${switchUnstyledClasses.focusVisible} .${switchUnstyledClasses.thumb} {
      background-color: ${grey[500]};
      box-shadow: 0 0 1px 8px rgba(0, 0, 0, 0.25);
    }
  
    &.${switchUnstyledClasses.checked} {
      .${switchUnstyledClasses.thumb} {
        left: 22px;
        top: 3px;
        background-color: #0C4394; //bolinha do botão habilitado
      }
  
      .${switchUnstyledClasses.track} {
        background: #fff;
        border: 2px solid #0C4394; //borda botão habilitado
      }
    }
  
    & .${switchUnstyledClasses.input} {
      cursor: inherit;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      opacity: 0;
      z-index: 5;
      margin: 0;
    }
    `,
  );


export default function Interruptor2(props) {
    
  
    return (
        <div>
        <SwitchUnstyled component={Root}  defaultChecked={props.state} onChange={() => {props.changeState()}} />
        </div>
    );
  }