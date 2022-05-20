import React, { useEffect, useState } from "react";
import NormalInput from "../../../../components/inputs/normal";
import { AlignCenterStyle, DisplayFlexStyle, DisplayGridStyle } from "../../../../styles/style";
import { FieldNameRegisterWorkstation } from "../style";




export default function FormShifts({onChangeValue, index, shift}){
    const [myShift, setMyshift] = useState(shift);


    useEffect(() => {
        setMyshift(shift);
    }, [shift])
    // cshiftonsole.log("===============");

    return(
        <DisplayFlexStyle top={2}>
            <DisplayGridStyle right={10}>
                <FieldNameRegisterWorkstation>
                    Hora Inicial
                </FieldNameRegisterWorkstation>
                <NormalInput
                    size={22}
                    title=""
                    mask='time'
                    pValue={myShift.hour_begin}
                    
                    //setValueInput={}
                    //error={}
                    placeholder={"ex: 15:35"}
                    //msgErro="Preencha o campo com um valor!"
                    // onChange={(e) => onChange(index, e)}
                    setValueInput={(value) => onChangeValue(index, 'hour_begin', value)}
                />
            </DisplayGridStyle>

            <DisplayGridStyle>
                <FieldNameRegisterWorkstation>
                    Hora Final
                </FieldNameRegisterWorkstation>
                <NormalInput
                    size={22}
                    mask='time'
                    title=""
                    pValue={myShift.hour_end}
                    //setValueInput={}
                    //error={}
                    placeholder={"ex: 18:35"}
                    //msgErro="Preencha o campo com um valor!"
                    //onChange={setProductionPerHour}
                    setValueInput={(value) => onChangeValue(index, 'hour_end',  value)}
                />
            </DisplayGridStyle>

            
        </DisplayFlexStyle>
    );

//on machine the variable name is shift and it'll be a list
    //hour_begin hour_end
}


