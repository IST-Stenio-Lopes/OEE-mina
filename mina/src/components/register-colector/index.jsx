import React, { useState } from "react";

import { DisplayFlexStyle, MarginSpaceStyle } from "../../styles/style";
import NormalInput from "../inputs/normal";
import { BoxPrincipalDivRegisterColector, CancelButtonColector, CloseButtonRegisterColector, FieldNameRegisterColector, SaveButtonColector } from "./style";

import '../register-colector/style.css';

export default function RegisterColector(){

    const [identification, setIdentification] = useState('');
    const [macColector, setMacColector] = useState('');
    const [errorInputIdentification, setErrorInputIdentification] = useState(false);
    const [errorInputMacColector, setErrorInputMacColector] = useState(false);


    return(
        <div>
         
            <DisplayFlexStyle top={8} left={window.screen.width> 1600? 45: 40}>
                <h3>Cadastrar novo coletor</h3>
                <MarginSpaceStyle left={window.screen.width> 1600? 12: 5} top={1}>
                   <CloseButtonRegisterColector>x</CloseButtonRegisterColector> 
                </MarginSpaceStyle>
                
            </DisplayFlexStyle>
            <BoxPrincipalDivRegisterColector>

                <MarginSpaceStyle>
                    <FieldNameRegisterColector>Identificação do coletor</FieldNameRegisterColector>
                    <NormalInput
                        size={window.screen.width> 1600? 55 : 45}
                        title=""
                        dValue={identification}
                        setValueInput={setIdentification}
                        error={errorInputIdentification}
                        msgErro="O campo de identificação deve ser preenchido!"
                        onChange={setIdentification}
                    />
                </MarginSpaceStyle>

                <MarginSpaceStyle top={3}>
                    <FieldNameRegisterColector>MAC coletor</FieldNameRegisterColector>
                    <NormalInput
                        size={window.screen.width> 1600? 27 : 27}
                        title=""
                        dValue={macColector}
                        setValueInput={setMacColector}
                        error={errorInputMacColector}
                        msgErro="O campo do MAC deve ser preenchido!"
                        onChange={setMacColector}
                    />
                </MarginSpaceStyle>

                <MarginSpaceStyle top={window.screen.width> 1600? 18 : 24}>
                    <DisplayFlexStyle left={window.screen.width> 1600? 23 : 5}>
                       <CancelButtonColector>CANCELAR</CancelButtonColector>
                    <MarginSpaceStyle left={8}>
                        <SaveButtonColector onClick={() => console.log(identification)}>SALVAR</SaveButtonColector>
                    </MarginSpaceStyle> 
                    </DisplayFlexStyle>
                    
                </MarginSpaceStyle>
            </BoxPrincipalDivRegisterColector>
        </div>
    );
}
