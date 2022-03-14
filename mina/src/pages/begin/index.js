import React, { useState } from "react";
import Top from "../../components/top";
import ShowLarge from "./show-large";
import ShowMedium from "./show-medium";
import ShowSmall from "./show-small";
import "./style.css";

function showMachine(valueSlider) {
  if (valueSlider === 1) {
    return <ShowLarge description="" />;
  } else if (valueSlider === 2) {
    return <ShowMedium description="" />;
  } else if (valueSlider === 3) {
    return <ShowSmall description="" />;
  }
}

export default function Machines() {
  const [size, setSize] = useState(1);
  function test(value) {
    setSize(value);
    //console.log(`teste ${value}`);
  }

  return (
    <div className="principal-index">
      <Top handleSizeChange={test} />
      <div id="machines-content"></div>
      {showMachine(size)}
    </div>
  );
}
