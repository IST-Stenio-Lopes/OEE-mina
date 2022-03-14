import React from "react";
import { useNavigate } from "react-router-dom";

import { DisplayFlexStyle, MarginSpaceStyle } from "../../styles/style";
import Add from "./add";
import Search from "./search";
import Size from "./size";
import { ButtonAdd } from "./style";

import "../top/style.css";

export default function Top({ handleSizeChange }) {
  let navigate = useNavigate();

  return (
    /*         <div id="top">
            <div id="top-1">
                <Search />
            </div>
            <div id="top-2">
                <Size handleChange={handleSizeChange}/>
            </div>
            <div id="top-3">
                <MarginSpaceStyle top={3}>
                    <ButtonAdd>+ ADICIONAR</ButtonAdd>
                </MarginSpaceStyle>
                
            </div>
        </div> */
    <DisplayFlexStyle top={3} left={7}>
      <MarginSpaceStyle width={49}>
        <Search />
      </MarginSpaceStyle>

      <MarginSpaceStyle width={12} left={3.5} top={-0.6}>
        <Size handleChange={handleSizeChange} />
      </MarginSpaceStyle>

      <MarginSpaceStyle left={2} top={-1}>
        <ButtonAdd onClick={() => navigate("/workstation/register")}>
          + ADICIONAR
        </ButtonAdd>
      </MarginSpaceStyle>
    </DisplayFlexStyle>
  );
}
