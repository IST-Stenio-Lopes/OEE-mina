import React, { useCallback, useEffect, useState } from "react";
import { AlertActions, useAlert } from "../../../contexts/alert/alert";
import { DisplayFlexStyle, MarginSpaceStyle } from "../../../styles/style";
import NormalInput from "../../../components/inputs/normal";
import { BoxPrincipalDivRegisterColector, CancelButtonColector, CloseButtonRegisterColector, FieldNameRegisterColector, SaveButtonColector } from "./style";
import { useNavigate } from "react-router-dom";
import './style.css';
import { HasPermission } from "../../../utils/utilities";
import ReactSelect from "../../../components/inputs/react-select";
import { postCollector } from "../../../services/collector";

export default function RegisterColector(){

    const { dispatch } = useAlert();

    let navigate = useNavigate();

    const [identification, setIdentification] = useState('');
    const [macColector, setMacColector] = useState('');
    const [type, setType] = useState();
    const [errorInputIdentification, setErrorInputIdentification] = useState(false);
    const [errorInputMacColector, setErrorInputMacColector] = useState(false);


    useEffect( () => {
        !HasPermission( [32768, 245760, 2147745790, -2147221506], parseInt(localStorage.getItem("@Oee:role"), 10)) && navigate("/collector")
    }, []);

    const handleAlertSetValues = (type, title, msg) => {
        dispatch({
          type: AlertActions.setVisibility,
          payload: true,
        });
        dispatch({
          type: AlertActions.setType,
          payload: type,
        });
        dispatch({
          type: AlertActions.setTitle,
          payload: title,
        });
        dispatch({
          type: AlertActions.setMsg,
          payload: msg,
        });
      };



    const handleSelectChangeCode = useCallback((selectValue) => {
        setType(selectValue.value);
      }, []);


      async function sendCollector(){
        if(identification === ""){
            setErrorInputIdentification(true);
        }else if(macColector === ""){
            setErrorInputMacColector(true);
        }else if(type === ""){
            handleAlertSetValues("warning", "Campo não preenchido", "Deve ser preenchido o tipo do coletor!")
        }else{
            var post = await postCollector({
                name: identification,
                uid: macColector,
                type: type
            });
            if (post && post === 201) {
                handleAlertSetValues("success", "Certo", "Coletor Cadastrado com sucesso!");
                console.log("chegou no if");
              } else {
                handleAlertSetValues("error", "Erro!", post);
                console.log("chegou no else");
              }
        }
      }



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

                <MarginSpaceStyle top={3}>
                    <FieldNameRegisterColector>Tipo</FieldNameRegisterColector>
                    <ReactSelect
                        array={[{ value: "Wise4050", label: "WISE 4050" }]}
                        placeholder={"Selecione o tipo do Coletor"}
                        onChange={handleSelectChangeCode}
                    />
                </MarginSpaceStyle>

                <MarginSpaceStyle top={window.screen.width> 1600? 18 : 24}>
                    <DisplayFlexStyle left={window.screen.width> 1600? 23 : 5}>
                       <CancelButtonColector onClick={() => navigate("/collector")}>CANCELAR</CancelButtonColector>
                    <MarginSpaceStyle left={8}>
                        <SaveButtonColector onClick={() => sendCollector()}>SALVAR</SaveButtonColector>
                    </MarginSpaceStyle> 
                    </DisplayFlexStyle>
                    
                </MarginSpaceStyle>
            </BoxPrincipalDivRegisterColector>
        </div>
    );
}
