import React from "react";
import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from "@mui/material";

const TextField = (props: MuiTextFieldProps) => {
  return <MuiTextField {...props} />;
};

export default TextField;
