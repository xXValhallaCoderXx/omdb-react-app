import React from "react";
import CircularProgress, {
  CircularProgressProps,
} from "@material-ui/core/CircularProgress";

const Spinner: React.FC<CircularProgressProps> = (props) => {
  return <CircularProgress {...props} />;
};

export default Spinner;
