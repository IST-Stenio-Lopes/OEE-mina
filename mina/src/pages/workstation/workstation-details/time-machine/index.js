import moment from "moment";
import React, { useEffect, useState } from "react";

import { TimeMachineDisplayGrid } from "./style";

export default function TimeMachine() {
  const [changeTimeNow, setChangeTimeNow] = useState();
  const [timeNow, setTimeNow] = useState();

  useEffect(() => {
    var timer = setInterval(() => {
      setChangeTimeNow(moment().format("ss"));
      setTimeNow(moment().format("DD | hh | mm | ss"));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <TimeMachineDisplayGrid>
      {timeNow}
      <p>DIAS HORAS &nbsp;MIN &nbsp;&nbsp;&nbsp; SEG</p>
    </TimeMachineDisplayGrid>
  );
}
