import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card, { CardProps } from "@material-ui/core/Card";

const useStyles = makeStyles((theme) => ({
  content: {
    padding: theme.spacing(2),
  },
}));

const CardContainer: React.FC<CardProps> = ({ children, ...props }) => {
  const classes = useStyles();
  return (
    <Card className={classes.content} {...props}>
      {children}
    </Card>
  );
};

export default CardContainer;
