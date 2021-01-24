import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Container } from "@material-ui/core";

interface IProps {
  mobile?: boolean;
  movieID?: string;
  children: any;
  style: any;
}

const useStyles = makeStyles((theme) => ({
  height: {
    height: "100%",
  },
  content: {
    minHeight: "100vh",
    paddingBottom: theme.spacing(10),
    backgroundColor: theme.palette.secondary.main,
  },
}));

const MainLayout: React.FC<IProps> = (props) => {
  const { children, mobile, movieID } = props;
  const classes = useStyles();
  return (
    <div style={props.style} className={classes.content}>
      <Box mt={9} className={classes.height}>
        <Container className={classes.height}>{children}</Container>
      </Box>
    </div>
  );
};

export default MainLayout;
