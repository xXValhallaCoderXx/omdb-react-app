import React from "react";
import { Snackbar } from "@material-ui/core";
import { Alert } from "shared/components/atoms";

interface IProps {
  vertical?: string;
  horizontal?: string;
  open: boolean;
  onClose?: () => void;
  error: string;
}

const Toast: React.FC<IProps> = ({
  vertical = "top",
  horizontal = "center",
  open,
  onClose,
  error,
}) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      key={vertical + horizontal}
      anchorOrigin={{ horizontal: "center", vertical: "top" }}
    >
      <Alert onClose={onClose} severity="error">
        {error}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
