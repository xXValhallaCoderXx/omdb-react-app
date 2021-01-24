import React from "react";
import Typography, { TypographyProps } from "@material-ui/core/Typography";

const TypographyComponent: React.FC<TypographyProps> = ({
  children,
  ...rest
}) => {
  return <Typography {...rest}>{children}</Typography>;
};

export default TypographyComponent;
