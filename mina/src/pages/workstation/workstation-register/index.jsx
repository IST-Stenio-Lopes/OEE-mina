import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Interruptor2 from "../../../components/inputs/interruptor/index2";
import NormalInput from "../../../components/inputs/normal";
import { AlertActions, useAlert } from "../../../contexts/alert/alert";
//import { changeWorkstation, postWorkstation } from "../../../contexts/machine/machine";
import { changeWorkstation, postWorkstation } from "../../../services/workstation";
import { DisplayFlexStyle, DisplayGridStyle, MarginSpaceStyle } from "../../../styles/style";
import { adjustSizeWithResolution, HasPermission } from "../../../utils/utilities";
import FormShifts from "./shifts";
import { BoxDivPrincipalRegisterWorkstation, CancelButton, CloseButtonRegisterWorkstation, FieldNameRegisterWorkstation, MakeSpanToButton, ReduceSizeFieldTextWorkstation, SaveButton, ShiftAreaExpand } from "./style";

import "./style.css";

export default function Register({ o, functionToSendToBack }) {
  let navigate = useNavigate();
  /*   const { stateMachine, dispatch } = useMachine(); */
  const { dispatch } = useAlert();
  const location = useLocation();

  const [workstationName, setWorkstationName] = useState("");
  //const [shift, setShift] = useState("");
  const [oeeTarget, setOeeTarget] = useState();
  const [productionPerHour, setProductionPerHour] = useState();
  //const [freeTime, setFreeTime] = useState("");
  const [discountScrap, setDiscountScrap] = useState(false);
  const [discountRework, setDiscountRework] = useState(false);
  const [shifts, setShifts] = useState([]);
  const [numberOfShifts, setNumberOfShifts] = useState();

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
    if (location.state) {

      /* o?.name && setWorkstationName(o?.name);
      //o?.shift && setShift(o?.shift);
      o?.oee && setOeeTarget(o?.oee);
      o?.production_per_hour && setProductionPerHour(o?.production_per_hour);
      o?.discount_scrap && setDiscountScrap(o?.discount_scrap);
      o?.discount_rework && setDiscountRework(o?.discount_rework);
    o?.shifts && setShifts(o?.shifts); */
    
    setWorkstationName(location.state.object.name),
    setShifts(location.state.object.shifts.map((item, index) => ({...item, id: index}))),
    setOeeTarget(location.state.object.oee),
    setProductionPerHour(location.state.object.production_per_hour),
    setDiscountScrap(location.state.object.discount_scrap),
    setDiscountRework(location.state.object.discount_rework)
    setNumberOfShifts(location.state.object.shifts.length - 1);

  }
  }, [location.state]);

  //console.log(location.state ? location.state.object : "não tá aqui");
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

  const updateShiftsHandler = (index, inputField, value) => {

    
    const updateShifts = [...shifts]
    //console.log('antes de atualizar', updateShifts)
    updateShifts[index][inputField] = value; 
    //console.log('depois de atualizar', updateShifts)
    setShifts(updateShifts)
  }

  function removeShiftFromList(shift){
    const newShiftArray = shifts.filter((item) => shift.id !== item.id)
    setShifts(newShiftArray);
    // if(shifts.length > 0){
    //   let newShiftArray = shifts;

    //   newShiftArray.splice(index, 1);
    //   setNumberOfShifts(prev => prev -1);
      
    
    // }else{
    //   handleAlertSetValues("error", "Erro", "Deve existir ao menos um turno")
    // }
    
  }
  
  // const renderShifts = useCallback(() => {
  //   return shifts.map((shift, index) => (
  //     <DisplayFlexStyle
  //             key={index}
  //           >
  //             <FormShifts 
  //               hour={{hour_begin: shift.hour_begin, hour_end: shift.hour_end}}
  //               index={index}
  //               onChangeValue={updateShiftsHandler}
  //             />

  //             <MarginSpaceStyle top={9} left={10}>
  //               <span className="material-icons button" onClick={() => {
  //                     removeShiftFromList(index)
  //                   // setNumberOfShifts(prev => prev-1); 
  //                     //setShifts([...shifts, {}])
  //                   }}
  //               >
  //                     remove_circle_outline
  //               </span> 
  //             </MarginSpaceStyle>
                
  //       </DisplayFlexStyle>
  //   ))
     

  // }, [shifts])

  // const renderFormShifts = useMemo(() => {
    
  //   const shiftsComponents = [];

  //console.log("111111111111111111111111");
  //   console.dir(shifts);
  //   for (let index = 0; index < numberOfShifts; index++) {
      

  //     shiftsComponents.push(
  //       <DisplayFlexStyle
  //         key={index}
  //       >
  //         <FormShifts 
  //           objectList={shifts}
  //           index={index}
  //           onChangeValue={updateShiftsHandler}
  //         />

  //         <MarginSpaceStyle top={9} left={10}>
  //           <span className="material-icons button" onClick={() => {
  //                 removeShiftFromList(index)
  //               // setNumberOfShifts(prev => prev-1); 
  //                 //setShifts([...shifts, {}])
  //               }}
  //           >
  //                 remove_circle_outline
  //           </span> 
  //         </MarginSpaceStyle>
                
  //       </DisplayFlexStyle>
        
  //     ); 
  //   }

  //   return shiftsComponents; 
  // }, [numberOfShifts, shifts]);

  async function SendObjectMachine() {
    setErrorInputWorkstationName(false);
    //setErrorInputShift(false);
    setErrorInputOeeTarget(false);
    setErrorInputProductionPerHour(false);

    if (workstationName === "") {
      setErrorInputWorkstationName(true);
      //console.log(parseInt(oeeTarget, 10));
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

      
      // var post = location.state.functionToSendToBack? await functionToSendToBack({
      //   name: workstationName,
      //   oee: oeeTarget,
      //   production_per_hour: productionPerHour,
      //   discount_rework: discountRework,
      //   discount_scrap: discountScrap,
      //   shifts: shifts
      // }) :
/* 
      //console.log("atualizou", {
        name: workstationName,
        oee: oeeTarget,
        production_per_hour: productionPerHour,
        discount_rework: discountRework,
        discount_scrap: discountScrap,
        shifts: shifts
      }) */
      const post = await postWorkstation({
        name: workstationName,
        oee: oeeTarget,
        production_per_hour: productionPerHour,
        discount_rework: discountRework,
        discount_scrap: discountScrap,
        shifts: shifts
      });
      if (post && post === 201) {
        //console.log("cadastrou!");
        handleAlertSetValues(
          "success",
          "Certo",
          "Maquina Cadastrada com Sucesso!"
        );
        navigate("/machines");
      } else {
        //console.log("Não cadastrou!");
        handleAlertSetValues("error", "Erro!", post);
      }
    }
  }

  async function ChangeObjectMachine(){
    setErrorInputWorkstationName(false);
    setErrorInputOeeTarget(false);
    setErrorInputProductionPerHour(false);

    if (workstationName === "") {
      setErrorInputWorkstationName(true);
    } 
     else if (
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
      const post = await changeWorkstation(location.state.object.id, {
        name: workstationName,
        oee: oeeTarget,
        production_per_hour: productionPerHour,
        discount_rework: discountRework,
        discount_scrap: discountScrap,
        shifts: shifts
      });
      if (post && post === 201) {
        //console.log("cadastrou!");
        handleAlertSetValues(
          "success",
          "Certo",
          "Maquina Atualizada com Sucesso!"
        );
        navigate("/machines");
      } else {
        //console.log("Não cadastrou!");
        handleAlertSetValues("error", "Erro!", post);
      }

    }
  }

  

  return (
    <BoxDivPrincipalRegisterWorkstation size={window.screen.width}>
      <DisplayFlexStyle bottom={3}>
        <h1>CADASTRAR NOVA ESTAÇÃO DE TRABALHO</h1>

          <CloseButtonRegisterWorkstation onClick={() => {navigate("/machines")}}>x</CloseButtonRegisterWorkstation>

      </DisplayFlexStyle>

      <DisplayGridStyle>
        <FieldNameRegisterWorkstation>
          Nome estação de trabalho
        </FieldNameRegisterWorkstation>

        <ReduceSizeFieldTextWorkstation>
          <NormalInput
            size={55}
            title=""
            dValue={location.state ? location.state.object.name : workstationName}
            setValueInput={setWorkstationName}
            error={errorInputWorkstationName}
            msgErro="Campo não pode estar vazio!"
            onChange={setWorkstationName}
          />
        </ReduceSizeFieldTextWorkstation>
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
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              size={25}
              title=""
              dValue={location.state ? location.state.object.oee : oeeTarget}
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
                location.state
                  ? location.state.object.production_per_hour
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
              dValue={
                location.state
                  ? location.state.object.discountScrap
                  : discountScrap
              }
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
              dValue={
                location.state
                ? location.state.object.discount_rework
                : discountRework
              }
              state={discountRework}
              changeState={() => setDiscountRework(!discountRework)}
            />
          </MarginSpaceStyle>
        </DisplayFlexStyle>
      </MarginSpaceStyle>
      <MarginSpaceStyle top={5}>
        <ShiftAreaExpand>
          <DisplayFlexStyle bottom={5}>
           <FieldNameRegisterWorkstation>Turnos</FieldNameRegisterWorkstation> 
           <MarginSpaceStyle left={5} bottom={1}> 
              <span className="material-icons button" onClick={() => {
                setShifts([...shifts, {hour_begin: '', hour_end: '', id: shifts.length}])
              }}>
                add_circle_outline
            </span>  
            </MarginSpaceStyle>
          </DisplayFlexStyle>
            {shifts.map((shift, index) => (
              <DisplayFlexStyle
                      key={index}
                    >
                      <FormShifts 
                        shift={shift}
                        index={index}
                        onChangeValue={updateShiftsHandler}
                      />

                      <MarginSpaceStyle top={9} left={10}>
                        <span className="material-icons button" onClick={() => {
                              removeShiftFromList(shift)
                            // setNumberOfShifts(prev => prev-1); 
                              //setShifts([...shifts, {}])
                            }}
                        >
                              remove_circle_outline
                        </span> 
                      </MarginSpaceStyle>
                        
                </DisplayFlexStyle>
            ))}
        </ShiftAreaExpand>
      </MarginSpaceStyle>
            
      <MarginSpaceStyle top={window.screen.width <= 1600 ? 5 : 10}>
        <MarginSpaceStyle left={window.screen.width <= 1600 ? 6 : 26}>
          <DisplayFlexStyle>
            <CancelButton onClick={() => navigate("/machines")}>
              Cancelar
            </CancelButton>
            <MarginSpaceStyle left={10}>
              <SaveButton onClick={() => location.state? ChangeObjectMachine() : SendObjectMachine()}>
                Salvar
              </SaveButton>
            </MarginSpaceStyle>
          </DisplayFlexStyle>
        </MarginSpaceStyle>
      </MarginSpaceStyle>

    </BoxDivPrincipalRegisterWorkstation>
  );
}
