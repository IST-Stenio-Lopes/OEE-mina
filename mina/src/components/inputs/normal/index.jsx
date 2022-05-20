import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import { NormalInputI } from "../utilities";
import {time, numberMask} from './masks';

export default function NormalInput(props) {

    function handKeyUp(e){
        switch (props.mask) {
          case 'cep':
            cep(e);
            break;
          case 'tel':
            tel(e);
            break;
          case 'cell-phone':
            cellPhone(e);
            break;
          case 'cpf':
            cpf(e);
            break;
          case 'date':
            date(e);
            break;
          case 'time':
            time(e);
            break;
          case 'numeric':
            numberMask(e);
            break;
          case 'currency':
            currencyMask(e);
            break;
          case 'cpfOrCnpj':
            cpfOrCnpj(e);
            break;
          case 'meters':
            metersMask(e);
            break;
          default:
            break;
        }
      }

  const useStyles = makeStyles(() =>
        createStyles({
            textField: {
                width: adjustSizeWithResolution(props.size).toString() + 'ch'
            },
        }),
    );
    const classes = useStyles();

    function adjustSizeWithResolution(value){
        if(window.screen.width >= 1920){
            return value;
        }
        if (window.screen.width <= 1600 & window.screen.width > 1366){
            return value * 0.85;
        }
        if (window.screen.width <= 1366){
            return value * 0.8;
        }
        else{
            return value
        }
        
    }


    return (
        <TextField
            id="standard-basic"
            placeholder={props.placeholder}
            onChange={(e) => {
                //console.log(e.target.value)
                handKeyUp(e);
                props.setValueInput && props.setValueInput(e.target.value); 
                // props.onChangeValue(e.target.value);
            }}
            className={classes.textField}
            label={props.title}
            value={props.pValue}
            error={props.error}
            helperText={props.error ? props.msgErro : ''}
            defaultValue={props.dValue} 
            size={"small"}
            />
            
            
    );
}
