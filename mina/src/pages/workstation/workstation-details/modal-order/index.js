import moment from "moment";
import React, { useState, useCallback } from "react";
import DateAndTimeInput from "../../../../components/inputs/date-time";
import NormalInput from "../../../../components/inputs/normal";

import Modal from "../../../../components/modal";
import { useAlert, AlertActions } from "../../../../contexts/alert/alert";
import { useOrder, OrderActions } from "../../../../contexts/order/order";
import { postOrder, SendOrderToMachine } from "../../../../services/order";
import { DisplayFlexStyle, MarginSpaceStyle } from "../../../../styles/style";
import { CancelButton, SaveButton } from "../../workstation-register/style";
import {
  CloseButtonAddOrder,
  ContainerModalOrder,
  FieldNameAddOrder,
} from "./style";

export default function ModalAddOrder({ machineId, close }) {
  //const { stateOrder, dispatch } = useOrder();
  const { dispatch } = useAlert();

  const [dateBegin, setDateBegin] = useState();
  const [dateEnd, setDateEnd] = useState();
  const [order, setOrder] = useState();
  const [plannedQuantity, setPlannedQuantity] = useState();
  const [product, setProduct] = useState();

  /*  const handleAddOrder = (begin, end, code, quantity, product) => {
    dispatch({
      type: OrderActions.setBegin,
      payload: begin,
    });
    dispatch({
      type: OrderActions.setEnd,
      payload: end,
    });
    dispatch({
      type: OrderActions.setOrder_code,
      payload: code,
    });
    dispatch({
      type: OrderActions.setPlanned_quantity,
      payload: quantity,
    });
    dispatch({
      type: OrderActions.setProduct,
      payload: product,
    });
  };

  const handleClear = () => {
    dispatch({
      type: OrderActions.reset,
    });
  };
 */
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

  async function sendObjectOrder() {
    var post1 = await postOrder(machineId, {
      begin: dateBegin,
      end: dateEnd,
      code: order,
      planned_quantity: plannedQuantity,
      product: product,
    });
    if (post1 && post1.status === 201) {
      var post2 = await SendOrderToMachine(machineId, post1.data.order.id);
      //console.log("post2");
      //console.log(post2);
      if (post2 && post2.status === 201) {
        //console.log("cadastrou!");
        handleAlertSetValues("success", "Certo", post2.data.message);
        close();
        machineHadChange();
      } else {
        //console.log("Não cadastrou!");
        //console.log(post2);
        handleAlertSetValues("error", "Erro!", post2);
        close();
        machineHadChange();
      }
    } else {
      handleAlertSetValues("error", "Erro!", post1);
    }
  }

  return (
    <Modal>
      <ContainerModalOrder>
        <DisplayFlexStyle bottom={5}>
          <h1>Adicionar ordem de serviço</h1>
          <a>
            <CloseButtonAddOrder
              onClick={() => {
                close();
              }}
            >
              X
            </CloseButtonAddOrder>
          </a>
        </DisplayFlexStyle>
        <DisplayFlexStyle>
          <DateAndTimeInput
            title="Data e Hora do Inicio da Ordem"
            setInputValue={setDateBegin} //setDateBegin
          />
          <MarginSpaceStyle left={5}>
            <DateAndTimeInput
              title="Data e Hora do Final da Ordem"
              setInputValue={setDateEnd}
            />
          </MarginSpaceStyle>
        </DisplayFlexStyle>

        <MarginSpaceStyle top={2}>
          <DisplayFlexStyle bottom={2}>
            <MarginSpaceStyle>
              <FieldNameAddOrder>Código</FieldNameAddOrder>
              <NormalInput size={25} setValueInput={setOrder} />
            </MarginSpaceStyle>

            <MarginSpaceStyle left={5}>
              <FieldNameAddOrder>Quantidade</FieldNameAddOrder>
              <NormalInput size={25} setValueInput={setPlannedQuantity} />
            </MarginSpaceStyle>
          </DisplayFlexStyle>

          <MarginSpaceStyle>
            <FieldNameAddOrder>Produto</FieldNameAddOrder>
            <NormalInput size={40} setValueInput={setProduct} />
          </MarginSpaceStyle>

          <MarginSpaceStyle left={window.screen.width <= 1600 ? 6 : 26} top={6}>
            <DisplayFlexStyle>
              <CancelButton
                onClick={() => {
                  close();
                }}
              >
                Cancelar
              </CancelButton>
              <MarginSpaceStyle left={10}>
                <SaveButton
                  onClick={() => {
                    sendObjectOrder();
                  }}
                >
                  Salvar
                </SaveButton>
              </MarginSpaceStyle>
            </DisplayFlexStyle>
          </MarginSpaceStyle>
        </MarginSpaceStyle>
      </ContainerModalOrder>
    </Modal>
  );
}
/* export type Order = {
        id?: string;
        begin: Date;
        end: Date;
        order: string;
        planned_quantity: number;
        product: string;
    } */
