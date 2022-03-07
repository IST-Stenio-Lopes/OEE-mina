import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import { NormalInputI } from "../utilities";


export default function NormalInput(props) {



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
            onChange={(e) => props.setValueInput && props.setValueInput(e.target.value)}
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
