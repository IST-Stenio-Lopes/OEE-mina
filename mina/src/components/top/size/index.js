import React, { useEffect, useState } from "react";
import Data from "../../../mock-data.json";
import "../size/style.css";
import MaterialIcon from 'react-google-material-icons';
import Slider from '@material-ui/core/Slider';

export default function Size({handleChange}){

    const [valueSlider, setValueSlider] = useState(0)


    function valuetext (event, newValue)  {
        if (typeof newValue === 'number') {
            setValueSlider(newValue);
            handleChange(newValue);
        }
      };
      

    useEffect(() =>{
        console.log(valueSlider)
    }, [valueSlider])


    return(
        <div id="size">
            <p id="size-icon1"><MaterialIcon icon="landscape" size={20} /></p>
                <Slider min={1} step={1} max={3} DefaultValue={valueSlider} onChange={valuetext} aria-label="Default"  valueLabelDisplay="auto"  />

            <p id="size-icon2"><MaterialIcon icon="landscape" size={16} /></p>

        </div>
    );
}