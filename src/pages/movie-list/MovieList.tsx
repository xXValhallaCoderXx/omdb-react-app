import React from "react";
import { IMovie } from "shared/types";

import { Grid } from "@material-ui/core";

import { MovieCard } from "shared/components/molecules";

interface IProps {
  results: IMovie[];
  onClick: (id: string) => void;
}

const MovieList: React.FC<IProps> = ({ results, onClick }) => {
  if (results.length === 0) {
    return null;
  }
  return (
    <Grid container justify="space-around" spacing={3}>
      {results.map((movie, index) => (
        <Grid item key={index}>
          <MovieCard movie={movie} onClick={onClick} />
        </Grid>
      ))}
    </Grid>
  );
};

export default MovieList;
