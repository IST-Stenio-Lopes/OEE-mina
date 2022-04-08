import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import * as React from "react";

import { BoxStackStyled, StackStyled } from "./style";

export default function PersonalizedAlerts({ visibility, type, title, msg }) {
  //type = "error" | "warning" | "info" | "success"
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
