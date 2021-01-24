import React from "react";
import TextField, { TextFieldProps } from "@material-ui/core/TextField";

interface ILocal {
  icon?: any;
}

type IProps = TextFieldProps & ILocal;

const Input: React.FC<IProps> = ({ icon, label, ...props }) => {
  return (
    <TextField
      id={`text-field-${label}`}
      {...props}
      InputProps={{
        endAdornment: icon,
      }}
    />
  );
};

export default Input;
