import React from "react";

import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { IMovieDetail } from "shared/types";

import { Box, Grid, Container, Chip } from "@material-ui/core";

import { Typography } from "shared/components/atoms";
import { CastList } from "shared/components/molecules";

interface IProps {
  results: IMovieDetail;
}

const MovieList: React.FC<IProps> = ({ results }) => {
  const theme = useTheme();
  const actors = () => results.Actors.split(",");
  const genres = () => results.Genre.split(",");
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <Grid container>
      <Grid item xs={12}>
        <Container maxWidth="md" style={{ marginTop: theme.spacing(2) }}>
          <Typography align="center" variant="h3" color="secondary">
            {results.Title}
          </Typography>
          <Grid container style={{ marginTop: theme.spacing(3) }}>
            <Grid item xs={12} lg={4} container justify="center">
              <img src={results.Poster} alt={results.Title} />
            </Grid>
            <Grid item xs={12} lg={8}>
              <Box ml={isLarge ? 2 : 0} style={{ marginTop: theme.spacing(2) }}>
                {genres().map((genre, index) => (
                  <Chip
                    color="primary"
                    key={index}
                    label={genre}
                    style={{
                      marginRight: theme.spacing(1),
                      marginTop: theme.spacing(1),
                    }}
                  />
                ))}
                <Typography
                  variant="body1"
                  color="secondary"
                  style={{ marginTop: theme.spacing(2) }}
                >
                  Overview
                </Typography>
                <Typography
                  variant="body2"
                  style={{ marginTop: theme.spacing(2) }}
                >
                  {results.Plot}
                </Typography>
                <Typography
                  variant="body1"
                  color="secondary"
                  style={{ marginTop: theme.spacing(2) }}
                >
                  Info
                </Typography>
                <Typography
                  variant="body2"
                  style={{ marginTop: theme.spacing(2) }}
                >
                  <span style={{ fontWeight: 600 }}>Released:</span>{" "}
                  {results.Released}
                </Typography>
                <Typography
                  variant="body2"
                  style={{ marginTop: theme.spacing(1) }}
                >
                  <span style={{ fontWeight: 600 }}>Running Time:</span>{" "}
                  {results.Runtime}
                </Typography>
                <Typography
                  variant="body2"
                  style={{ marginTop: theme.spacing(1) }}
                >
                  <span style={{ fontWeight: 600 }}>Box Office:</span>{" "}
                  {results.BoxOffice}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Grid>
      <Grid item xs={12}>
        <Container
          maxWidth="md"
          style={{
            marginTop: theme.spacing(4),
            paddingBottom: theme.spacing(4),
          }}
        >
          <Typography variant="h4" color="secondary" align="center">
            Cast
          </Typography>
          <CastList actors={actors()} />
        </Container>
      </Grid>
    </Grid>
  );
};

export default MovieList;
