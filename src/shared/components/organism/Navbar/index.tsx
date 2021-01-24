import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import { Typography, Button } from "shared/components/atoms";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

interface IProps {
  mobile?: boolean;
  movieID?: string;
}

const NavigationBar: React.FC<IProps> = ({ movieID }) => {
  const classes = useStyles();

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          OMDB React App
        </Typography>
        {movieID && <Button color="inherit">Back</Button>}
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
