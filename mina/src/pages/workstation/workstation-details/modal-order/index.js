import moment from "moment";
import React, { useState, useCallback } from "react";
import DateAndTimeInput from "../../../../components/inputs/date";
import NormalInput from "../../../../components/inputs/normal";

import Modal from "../../../../components/modal";
import { useAlert, AlertActions } from "../../../../contexts/alert/alert";
import { useOrder, OrderActions } from "../../../../contexts/order/order";
import { postOrder } from "../../../../services/order";
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
    var post = await postOrder(machineId, {
      begin: dateBegin,
      end: dateEnd,
      code: order,
      planned_quantity: plannedQuantity,
      product: product,
    });
    if (post && post === 201) {
      console.log("cadastrou!");
      handleAlertSetValues("success", "Certo", "Ordem Cadastrada com Sucesso!");
    } else {
      console.log("Não cadastrou!");
      handleAlertSetValues("error", "Erro!", post);
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
