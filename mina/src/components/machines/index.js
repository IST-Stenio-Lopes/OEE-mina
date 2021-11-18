import React, { useState } from "react";
import Top from '../top';
import ShowLarge from "./show-large";
import ShowMedium from "./show-medium";
import ShowSmall from "./show-small";

function showMachine(valueSlider){
    if(valueSlider === 1){
        return <ShowLarge/>
    }else if(valueSlider === 2){
        return <ShowMedium/>
    }else if(valueSlider === 3){
        return <ShowSmall/>
    }
}


export default function Machines(){
    const [size, setSize] = useState(1);
    function test (value){
        setSize(value);
        console.log(`teste ${value}`);
    }
    
    return(
        <div>
            <Top handleSizeChange = {test}/>
            <div id="machines-content">


            </div>
            {
                showMachine(size)
            }
        </div>
    );
}

