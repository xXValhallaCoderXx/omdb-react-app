import React, { useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Avatar, Grid } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import { Typography } from "shared/components/atoms";

interface IProps {
  actor: string;
}

const useStyles = makeStyles((theme) => ({
  content: {
    margin: theme.spacing(2),
    height: theme.spacing(7),
    width: theme.spacing(7),
  },
}));

const CastComponent: React.FC<IProps> = ({ actor }) => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item container xs={12} justify="center">
        <Avatar className={classes.content}>
          <AccountCircleIcon fontSize="large" />
        </Avatar>
      </Grid>
      <Grid item container xs={12} justify="center">
        <Typography align="center" variant="body1" color="primary">
          {actor}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default CastComponent;
