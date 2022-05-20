import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import * as React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import { SocketActions, useSocket } from "../../contexts/socket/socket";
import { BoxStackStyled, StackStyled } from "./style";

export default function PersonalizedAlerts({ visibility, type, title, msg }) {
  //type = "error" | "warning" | "info" | "success"
  let location = useLocation();

  const { dispatch } = useSocket();

  const handleSocketSetLocation = (value) => {
    dispatch({
      type: SocketActions.setLocationUrl,
      payload: value,
    });
  };

  React.useEffect(() => {
    //console.log("Alerta " + location.pathname);
    handleSocketSetLocation(location.pathname);
  }, [location.pathname]);

  return (
    <BoxStackStyled visible={visibility}>
      <StackStyled sx={{ width: "100%" }} spacing={2}>
        <Alert severity={type}>
          <AlertTitle>{title}</AlertTitle>
          {msg}
        </Alert>
      </StackStyled>
    </BoxStackStyled>
  );
}
