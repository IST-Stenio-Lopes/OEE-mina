import React from "react";
import Data from "../../../mock-data.json";
import "../size/style.css";
import MaterialIcon from 'react-google-material-icons';
import Slider from '@material-ui/core/Slider';


export default function Size(){
    return(
        <div id="size">
            <p id="size-icon1"><MaterialIcon icon="landscape" size={20} /></p>
                <Slider min={0} step={1} max={2} defaultValue={0} aria-label="Default"  valueLabelDisplay="auto"  />
            <p id="size-icon2"><MaterialIcon icon="landscape" size={16} /></p>
        </div>
    );
}