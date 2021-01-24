import React from "react";
import { useHistory } from "react-router-dom";
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
  const history = useHistory();
  const onClickBack = () => history.push("/movies");
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          OMDB React App
        </Typography>
        {movieID && (
          <Button onClick={onClickBack} color="secondary" variant="contained">
            Back
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
