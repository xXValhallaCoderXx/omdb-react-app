import React, { useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Avatar, Grid } from "@material-ui/core";
import FolderIcon from "@material-ui/icons/Folder";

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
          <FolderIcon />
        </Avatar>
      </Grid>
      <Grid item container xs={12} justify="center">
        <Typography>{actor}</Typography>
      </Grid>
    </Grid>
  );
};

export default CastComponent;
