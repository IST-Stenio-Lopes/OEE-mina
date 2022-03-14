import React from "react";
import { AlignCenterStyle, MarginSpaceStyle } from "../../styles/style";
import { ModalContainer } from "./style";

export default function Modal({children}){


    return(
        <AlignCenterStyle>
            <ModalContainer>
               {children}
            </ModalContainer>
        </AlignCenterStyle>
    );
}