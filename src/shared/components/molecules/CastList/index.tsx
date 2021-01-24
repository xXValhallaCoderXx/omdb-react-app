import React from "react";

import { Grid } from "@material-ui/core";

import { Cast } from "shared/components/molecules";

interface IProps {
  actors: string[];
}

const CastComponent: React.FC<IProps> = ({ actors }) => {
  return (
    <Grid container>
      {actors.map((actor, index) => (
        <Grid key={index} item md={3}>
          <Cast actor={actor} />{" "}
        </Grid>
      ))}
    </Grid>
  );
};

export default CastComponent;
