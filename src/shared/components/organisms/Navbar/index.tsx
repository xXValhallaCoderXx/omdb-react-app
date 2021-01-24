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
      display: "flex",
      flexDirection: "column",
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
    <AppBar position="sticky" style={{ backgroundColor: "white" }}>
      <Toolbar>
        <div className={classes.title}>
          <Typography
            style={{ marginBottom: 0, fontWeight: 600 }}
            variant="body2"
            color="primary"
          >
            Hey
          </Typography>
          <Typography
            style={{ marginTop: -5, fontWeight: 600 }}
            variant="body2"
            color="secondary"
          >
            Cinema
          </Typography>
        </div>

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
