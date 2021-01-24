import React from "react";
import { IMovie } from "shared/types";

import { Grid } from "@material-ui/core";

import { MovieCard } from "shared/components/molecules";

interface IProps {
  results: IMovie[];
}

const MovieList: React.FC<IProps> = ({ results }) => {
  if (results.length === 0) {
    return null;
  }
  return (
    <Grid container>
      {results.map((movie, index) => (
        <Grid item key={index}>
          <MovieCard movie={movie} />
        </Grid>
      ))}
    </Grid>
  );
};

export default MovieList;
