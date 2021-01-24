import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card, { CardProps } from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles((theme) => ({
  content: {
    height: "100%",
  },
}));

const CardContainer: React.FC<CardProps> = ({ children, ...props }) => {
  const classes = useStyles();
  return (
    <Card {...props}>
      <CardContent className={classes.content}>{children}</CardContent>
    </Card>
  );
};

export default CardContainer;
