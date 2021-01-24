import React from "react";

import { Avatar, Grid } from "@material-ui/core";
import FolderIcon from "@material-ui/icons/Folder";

import { Typography } from "shared/components/atoms";

interface IProps {
  actor: string;
}

const CastComponent: React.FC<IProps> = ({ actor }) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Avatar>
          <FolderIcon />
        </Avatar>
      </Grid>
      <Grid item xs={12}>
        <Typography>{actor}</Typography>
      </Grid>
    </Grid>
  );
};

export default CastComponent;
