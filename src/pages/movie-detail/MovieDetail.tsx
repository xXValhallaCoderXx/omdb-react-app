import React from "react";
import { IMovieDetail } from "shared/types";

import { Box, Grid, Container, Chip } from "@material-ui/core";

import { Typography, Card } from "shared/components/atoms";
import { CastList } from "shared/components/molecules";

interface IProps {
  results: IMovieDetail;
}

const MovieList: React.FC<IProps> = ({ results }) => {
  const actors = () => results.Actors.split(",");
  const genres = () => results.Genre.split(",");
  console.log("RESULTS: ", results);
  return (
    <Grid container>
      <Grid item xs={12}>
        <Container maxWidth="md" style={{ marginTop: 30 }}>
          <Typography align="center" variant="h3">
            {results.Title}
          </Typography>
          <Grid container style={{ marginTop: 30 }}>
            <Grid item xs={12} md={4}>
              <img src={results.Poster} alt={results.Title} />
            </Grid>
            <Grid item xs={12} md={8}>
              <Box ml={2}>
                {genres().map((genre, index) => (
                  <Chip key={index} label={genre} style={{ marginRight: 10 }} />
                ))}
                <Typography variant="h5" style={{ marginTop: 10 }}>
                  Overview
                </Typography>
                <Typography variant="body1" style={{ marginTop: 10 }}>
                  {results.Plot}
                </Typography>
                <Typography variant="h5" style={{ marginTop: 10 }}>
                  Info
                </Typography>
                <Typography variant="h6" style={{ marginTop: 10 }}>
                  <span style={{ fontWeight: 600 }}>Released:</span>{" "}
                  {results.Released}
                </Typography>
                <Typography variant="h6" style={{ marginTop: 10 }}>
                  <span style={{ fontWeight: 600 }}>Running Time:</span>{" "}
                  {results.Runtime}
                </Typography>
                <Typography variant="h6" style={{ marginTop: 10 }}>
                  <span style={{ fontWeight: 600 }}>Box Office:</span>{" "}
                  {results.BoxOffice}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Grid>
      <Grid item xs={12}>
        <Container maxWidth="md" style={{ marginTop: 30 }}>
          <Typography variant="h4" align="center">
            Cast
          </Typography>
          <CastList actors={actors()} />
          <Card>
            <Typography>Plot</Typography>
            <Card>
              <Typography>{results.Plot}</Typography>
            </Card>
          </Card>
        </Container>
      </Grid>
    </Grid>
  );
};

export default MovieList;
