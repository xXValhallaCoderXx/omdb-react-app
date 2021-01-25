import React from "react";
import { useTheme } from "@material-ui/core/styles";

import Button, { ButtonProps } from "@material-ui/core/Button";
import { Spinner } from "shared/components/atoms";

interface ILocal {
  loading?: boolean;
}

type IProps = ILocal & ButtonProps;

const ButtonComponent: React.FC<IProps> = ({ children, loading, ...rest }) => {
  const theme = useTheme();
  return (
    <Button
      disabled={loading}
      style={{
        fontWeight: 600,
        color: theme.palette.primary.light,
      }}
      {...rest}
    >
      {loading ? <Spinner style={{ height: 30, width: 30 }} /> : children}
    </Button>
  );
};

export default ButtonComponent;
