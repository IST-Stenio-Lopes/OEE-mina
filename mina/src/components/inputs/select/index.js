import React from "react";
import { DisplayFlexStyle, MarginSpaceStyle } from "../../../styles/style";
import { NameDefaultSelectBox, SelectBox } from "./style";
import Down from "../../../assets/down.svg";

export default function Select(props) {
  return (
    <SelectBox
      width={props.width}
      height={props.height}
      top={props.top}
      pleft={props.pleft}
      pright={props.pright}
      ptop={props.ptop}
      tbottom={props.tbottom}
      pbottom={props.pbottom}
    >
      <DisplayFlexStyle>
        <MarginSpaceStyle top={1} bottom={0} pbottom={2}>
          <NameDefaultSelectBox>{props.default}</NameDefaultSelectBox>
        </MarginSpaceStyle>

        <MarginSpaceStyle left={65} top={1}>
          <img src={Down} />
        </MarginSpaceStyle>
      </DisplayFlexStyle>
    </SelectBox>
  );
}
