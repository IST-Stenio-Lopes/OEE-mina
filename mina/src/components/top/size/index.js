import React, { useEffect, useState } from "react";
import Data from "../../../mock-data.json";
import "../size/style.css";
import MaterialIcon from "react-google-material-icons";
import Slider, { SliderThumb } from "@material-ui/core/Slider";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import Larger from '../../../assets/landscapelarger.svg';
import Small from '../../../assets/landscapesmall.svg'
import { MarginSpaceStyle } from "../../../styles/style";

export default function Size({ handleChange }) {
  const [valueSlider, setValueSlider] = useState(1);

  function valuetext(event, newValue) {
    if (typeof newValue === "number") {
      setValueSlider(newValue);
      handleChange(newValue);
    }
  }

  useEffect(() => {
    console.log(valueSlider);
  }, [valueSlider]);

  const Slider2 = styled(Slider)({
    color: "#0C4394", //Cor da linha e da bolinha
    height: 2, //espessura da linha
    "& .MuiSlider-thumb": {
      height: 13, //Tamanho da bolinha
      width: 13, //Tamanho da bolinha
      backgroundColor: "#fff", //Cor de fundo da bolinha
      border: "2px solid currentColor",
      "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
        boxShadow: "inherit", //Remove a borda na hora que clica e arrasta a bolinha
      },
    },
    "& .MuiSlider-rail": {
      opacity: 1,
      backgroundColor: "#F0F0F0", //cor da linha de fundo
    },
  });

  return (
    <div id="size">
      <p id="size-icon1">
        {/* <MaterialIcon icon="landscape" size={20} /> */}
        <MarginSpaceStyle top={-12}>
          <img src={Larger} width={20}/>  
        </MarginSpaceStyle>
        
      </p>

      {/*       <Slider
        min={1}
        step={1}
        max={3}
        DefaultValue={valueSlider}
        onChange={valuetext}
        aria-label="Default"
        valueLabelDisplay="auto"
        size="small"
      /> */}

      <Slider2
        min={1}
        step={1}
        max={3}
        value={valueSlider}
        onChange={valuetext}
        aria-label="Default"
        valueLabelDisplay="auto"
        size="small"
        disableSwap={false} //remove a borda da bolinha na hora do hover
      />

      <p id="size-icon2">
        {/* <MaterialIcon icon="landscape" size={16} /> */}
        <MarginSpaceStyle top={-30}>
          <img src={Small} width={16}/>  
        </MarginSpaceStyle>
        
      </p>
    </div>
  );
}
