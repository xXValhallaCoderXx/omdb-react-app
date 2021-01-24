import React from "react";

import Button, { ButtonProps } from "@material-ui/core/Button";

const ButtonComponent: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return <Button {...rest}>{children}</Button>;
};

export default ButtonComponent;
