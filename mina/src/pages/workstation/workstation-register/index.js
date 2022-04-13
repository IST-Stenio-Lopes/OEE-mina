import React, { useState, useEffect } from "react";
import { AlertActions, useAlert } from "../../../contexts/alert/alert";
import Interruptor2 from "../../../components/inputs/interruptor/index2";
import {
  BoxDivPrincipalRegisterWorkstation,
  CancelButton,
  CloseButtonRegisterWorkstation,
  FieldNameRegisterWorkstation,
  ReduceSizeFieldTextWorkstation,
  SaveButton,
} from "./style";
import { useNavigate } from "react-router-dom";
import "./style.css";
import {
  DisplayFlexStyle,
  DisplayGridStyle,
  MarginSpaceStyle,
} from "../../../styles/style";
import NormalInput from "../../../components/inputs/normal";
import {
  adjustSizeWithResolution,
  HasPermission,
} from "../../../utils/utilities";
//import { MachineActions, useMachine } from "../../../contexts/machine/machine";
import { postWorkstation } from "../../../services/workstation";

export default function Register({ o }) {
  let navigate = useNavigate();
  /*   const { stateMachine, dispatch } = useMachine(); */
  const { dispatch } = useAlert();

  const [workstationName, setWorkstationName] = useState("");
  //const [shift, setShift] = useState("");
  const [oeeTarget, setOeeTarget] = useState();
  const [productionPerHour, setProductionPerHour] = useState();
  //const [freeTime, setFreeTime] = useState("");
  const [discountScrap, setDiscountScrap] = useState(false);
  const [discountRework, setDiscountRework] = useState(false);

  const [errorInputWorkstationName, setErrorInputWorkstationName] =
    useState(false);
  //const [errorInputShift, setErrorInputShift] = useState(false);
  const [errorInputOeeTarget, setErrorInputOeeTarget] = useState(false);
  const [errorInputProductionPerHour, setErrorInputProductionPerHour] =
    useState(false);
  //const [errorInputFreeTime, setErrorInputFreeTime] = useState(false);

  /*  description: '',
  production_per_hour: 0,
  oee: 0,
  cach_in_word: false,
  discount_scrap: false */

  /* id?: string;
    name: string;
    shift: string; //Turno que ela irá produzir
    produced_product?: { //Produto que está sendo produzido pela maquina
        code: string;  //O código do produto
        description: string; //A descrição do produto
    }
    production_per_hour: number; //quantas unidades são/foram produzidas no periodo de uma hora
    oee: number;
    approved: number;
    status: string;
    condition?: { //Caso o status seja 'parado' ou  'manutenção' a condição passa a existir
        contTime: Date; // Tanto no status 'parado' quanto 'manutenção' vai existir o contador, que mostra quanto tempo ele está com esse status
        codeCondition?: string; //O código da condição vai ser dado para o status 'parado' como uma justificativa do "por quê a maquina está parada. Ex: "A02 - Man. Preventiva"
    }
    cach_in_word: boolean; //descontar retrabalho
    discount_scrap: boolean; //descontar refugo */

  useEffect(() => {
    HasPermission(
      [1024, 15360, 536887168, 1073758094, -2147221506],
      parseInt(localStorage.getItem("@Oee:role"), 10)
    ) === false && navigate("/machines");
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

  useEffect(() => {
    o?.name && setWorkstationName(o?.name);
    //o?.shift && setShift(o?.shift);
    o?.oee && setOeeTarget(o?.oee);
    o?.production_per_hour && setProductionPerHour(o?.production_per_hour);
    o?.discount_scrap && setDiscountScrap(o?.discount_scrap);
    o?.discount_rework && setDiscountRework(o?.discount_rework);
  }, [o]);
  /* 
  const setData = () => {
    dispatch({
      type: MachineActions.setName,
      payload: workstationName,
    });
    dispatch({
      type: MachineActions.setOee,
      payload: oeeTarget,
    });
    dispatch({
      type: MachineActions.setProduction_per_hour,
      payload: productionPerHour,
    });
    dispatch({
      type: MachineActions.setDiscount_scrap,
      payload: discountScrap,
    });
    dispatch({
      type: MachineActions.setDiscount_rework,
      payload: discountRework,
    });
  }; */

  async function SendObjectMachine() {
    setErrorInputWorkstationName(false);
    //setErrorInputShift(false);
    setErrorInputOeeTarget(false);
    setErrorInputProductionPerHour(false);

    if (workstationName === "") {
      setErrorInputWorkstationName(true);
      console.log(parseInt(oeeTarget, 10));
    } /* else if (shift === "") {
      setErrorInputShift(true);
    } */ else if (
      oeeTarget === undefined ||
      oeeTarget <= 0 ||
      parseInt(oeeTarget, 10) / 1 !== parseInt(oeeTarget, 10)
    ) {
      setErrorInputOeeTarget(true);
    } else if (
      productionPerHour === undefined ||
      productionPerHour <= 0 ||
      parseInt(productionPerHour, 10) / 1 !== parseInt(productionPerHour, 10)
    ) {
      setErrorInputProductionPerHour(true);
    } else {
      //setShowSave(true);
      var post = await postWorkstation({
        name: workstationName,
        oee: oeeTarget,
        production_per_hour: productionPerHour,
        discount_rework: discountRework,
        discount_scrap: discountScrap,
      });
      if (post && post === 201) {
        console.log("cadastrou!");
        handleAlertSetValues(
          "success",
          "Certo",
          "Maquina Cadastrada com Sucesso!"
        );
      } else {
        console.log("Não cadastrou!");
        handleAlertSetValues("error", "Erro!", post);
      }
    }
  }

  return (
    <BoxDivPrincipalRegisterWorkstation size={window.screen.width}>
      <DisplayFlexStyle>
        <h1>CADASTRAR NOVA ESTAÇÃO DE TRABALHO</h1>
        <a href="/machines">
          <CloseButtonRegisterWorkstation>x</CloseButtonRegisterWorkstation>
        </a>
      </DisplayFlexStyle>

      <DisplayGridStyle>
        <FieldNameRegisterWorkstation>
          Nome estação de trabalho
        </FieldNameRegisterWorkstation>

        <ReduceSizeFieldTextWorkstation>
          <NormalInput
            size={55}
            title=""
            dValue={o?.name ? o?.name : workstationName}
            setValueInput={setWorkstationName}
            error={errorInputWorkstationName}
            msgErro="Campo não pode estar vazio!"
            onChange={setWorkstationName}
          />
        </ReduceSizeFieldTextWorkstation>
        {console.log(window.screen.width)}
      </DisplayGridStyle>
      <DisplayFlexStyle top={3}>
        <MarginSpaceStyle>
          {/* <DisplayGridStyle>
            <FieldNameRegisterWorkstation>Turnos</FieldNameRegisterWorkstation>
            <NormalInput
              size={16}
              title=""
              dValue={o?.shift ? o?.shift : shift}
              setValueInput={setShift}
              error={errorInputShift}
              msgErro="Campo não pode estar vazio!"
              onChange={setShift}
            />
          </DisplayGridStyle> */}
        </MarginSpaceStyle>

        <MarginSpaceStyle right={9}>
          <DisplayGridStyle>
            <FieldNameRegisterWorkstation>
              Meta OEE%
            </FieldNameRegisterWorkstation>
            <NormalInput
              size={25}
              title=""
              dValue={o?.oee ? o?.oee : oeeTarget}
              setValueInput={setOeeTarget}
              error={errorInputOeeTarget}
              msgErro="Preencha o campo com um valor!"
              onChange={setOeeTarget}
            />
          </DisplayGridStyle>
        </MarginSpaceStyle>

        <MarginSpaceStyle right={6}>
          <DisplayGridStyle>
            <FieldNameRegisterWorkstation>
              Taxa produção/h
            </FieldNameRegisterWorkstation>
            <NormalInput
              size={25}
              title=""
              dValue={
                o?.production_per_hour
                  ? o?.production_per_hour
                  : productionPerHour
              }
              setValueInput={setProductionPerHour}
              error={errorInputProductionPerHour}
              msgErro="Preencha o campo com um valor!"
              onChange={setProductionPerHour}
            />
          </DisplayGridStyle>
        </MarginSpaceStyle>
      </DisplayFlexStyle>
      <MarginSpaceStyle top={5}>
        <DisplayFlexStyle>
          <FieldNameRegisterWorkstation>
            Descontar refugos da produção
          </FieldNameRegisterWorkstation>
          <MarginSpaceStyle left={adjustSizeWithResolution(58)}>
            <Interruptor2
              state={discountScrap}
              changeState={() => setDiscountScrap(!discountScrap)}
            />
          </MarginSpaceStyle>
        </DisplayFlexStyle>
      </MarginSpaceStyle>
      <MarginSpaceStyle top={5}>
        <DisplayFlexStyle>
          <FieldNameRegisterWorkstation
            pRight={window.screen.width <= 1600 ? 12 : 10}
          >
            Descontar Retrabalho
          </FieldNameRegisterWorkstation>
          <MarginSpaceStyle left={adjustSizeWithResolution(58)}>
            <Interruptor2
              state={discountRework}
              changeState={() => setDiscountRework(!discountRework)}
            />
          </MarginSpaceStyle>
        </DisplayFlexStyle>
      </MarginSpaceStyle>

      <MarginSpaceStyle top={window.screen.width <= 1600 ? 5 : 10}>
        <MarginSpaceStyle left={window.screen.width <= 1600 ? 6 : 26}>
          <DisplayFlexStyle>
            <CancelButton onClick={() => navigate("/machines")}>
              Cancelar
            </CancelButton>
            <MarginSpaceStyle left={10}>
              <SaveButton onClick={() => SendObjectMachine()}>
                Salvar
              </SaveButton>
            </MarginSpaceStyle>
          </DisplayFlexStyle>
        </MarginSpaceStyle>
      </MarginSpaceStyle>
    </BoxDivPrincipalRegisterWorkstation>
  );
}
