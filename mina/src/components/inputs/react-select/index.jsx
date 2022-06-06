import React, { Component, useEffect, useRef, useState } from 'react';
import { ActionMeta } from 'react-select';

//import AsyncSelect from 'react-select/async';
import { SelectContainer } from './style';

/* export interface ColourOption {
    readonly value: string;
    readonly label: string;
    readonly color: string;
    readonly isFixed?: boolean;
    readonly isDisabled?: boolean;
} */

/*export const colourOptions : readonly ColourOption[]  = [
    { value: 'ocean', label: 'Oceaaaaan', color: '#00B8D9', isFixed: true },
    { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
    { value: 'purple', label: 'Purple', color: '#5243AA' },
    { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
    { value: 'orange', label: 'Orange', color: '#FF8B00' },
    { value: 'yellow', label: 'Yellow', color: '#FFC400' },
    { value: 'green', label: 'Green', color: '#36B37E' },
    { value: 'forest', label: 'Forest', color: '#00875A' },
    { value: 'slate', label: 'Slate', color: '#253858' },
    { value: 'silver', label: 'Silver', color: '#666666' },
];*/

/* const filterColors = (inputValue : string ) => {
    return colourOptions.filter((i) =>
        i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
}; */



/* const promiseOptions = (inputValue : string ) =>
    new Promise <ColourOption[]> ((resolve) => {
        setTimeout(() => {
            resolve(filterColors(inputValue));
        }, 1000);
    }); */

const options =[
    {value: '1 teste ', label: "1"},
    {value: '2 serio ', label: "2"},
    {value: '3 doidao ', label: "3"},
    {value: 'asd cpoisffa ', label: "outra cousa"},
    {value: 'qualqer fd ', label: "outra cousa"},
    {value: 'as cpoisa ', label: "outra cousa"},
]

export default function ReactSelect({array, selectRefProp, onChange, placeholder}) {

    const[value, setValue] = useState('');
    const selectRef = useRef(null);

 
    const filterArray = (inputValue) => {
        return array.filter((i) =>
            i.label.toLowerCase().includes(inputValue.toLowerCase())
        );
    }; 


    const promiseOptions = (inputValue/* : string */) =>
        new Promise/* <ColourOption[]> */((resolve) => {
            setTimeout(() => {
                resolve(filterArray(inputValue));
            }, 1000);
        });

 

        return (
                <SelectContainer  
                    options={array}
                    placeholder={placeholder} 
                    ref={selectRefProp}
                    onChange={onChange}
                />
        );

}