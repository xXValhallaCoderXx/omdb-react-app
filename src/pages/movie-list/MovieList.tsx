import React from "react";
import { IMovie } from "shared/types";

import { Grid } from "@material-ui/core";

import { MovieCard } from "shared/components/molecules";

interface IProps {
  results: IMovie[];
  onClick: (id: string) => void;
}

const MovieList: React.FC<IProps> = ({ results, onClick }) => {
  if (!results) {
    return null;
  }
  return (
    <Grid container justify="center">
      {results.map((movie, index) => (
        <Grid xs={12} lg={6} item key={index} container justify="center">
          <MovieCard movie={movie} onClick={onClick} />
        </Grid>
      ))}
    </Grid>
  );
};

export default MovieList;
