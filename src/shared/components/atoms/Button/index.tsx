import React from "react";

import Button, { ButtonProps } from "@material-ui/core/Button";
import { Spinner } from "shared/components/atoms";

interface ILocal {
  loading?: boolean;
}

type IProps = ILocal & ButtonProps;

const ButtonComponent: React.FC<IProps> = ({ children, loading, ...rest }) => {
  return (
    <Button
      disabled={loading}
      style={{ fontWeight: 600, color: "#7FAAE4" }}
      {...rest}
    >
      {loading ? <Spinner style={{ height: 30, width: 30 }} /> : children}
    </Button>
  );
};

export default ButtonComponent;
