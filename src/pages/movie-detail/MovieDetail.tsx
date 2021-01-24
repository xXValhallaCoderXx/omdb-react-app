import React from "react";
import { IMovieDetail } from "shared/types";

import { Box, Grid } from "@material-ui/core";

import { Typography, Card } from "shared/components/atoms";
import { CastList } from "shared/components/molecules";

interface IProps {
  results: IMovieDetail;
}

const MovieList: React.FC<IProps> = ({ results }) => {
  console.log("RESULTS: ", results);
  const actors = () => results.Actors.split(",");
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h4">{results.Title}</Typography>
        <Typography variant="h5">{results.BoxOffice}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h4">Cast</Typography>
        <CastList actors={actors()} />
        <Card>
          <Typography>Plot</Typography>
          <Card>
            <Typography>{results.Plot}</Typography>
          </Card>
        </Card>
      </Grid>
    </Grid>
  );
};

export default MovieList;
