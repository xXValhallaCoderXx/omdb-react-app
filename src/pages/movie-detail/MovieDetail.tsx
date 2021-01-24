import React from "react";

import { IMovieDetail } from "shared/types";
import { makeStyles } from "@material-ui/core/styles";

import { Box, Grid, Container, Chip } from "@material-ui/core";

import { Typography, Card } from "shared/components/atoms";
import { CastList } from "shared/components/molecules";

interface IProps {
  results: IMovieDetail;
}

const useStyles = makeStyles((theme) => ({
  height: {
    [theme.breakpoints.down("xs")]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
    height: "100%",
  },
  content: {
    minHeight: "100vh",
    backgroundColor: theme.palette.secondary.main,
  },
  childContent: {
    marginTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
  },
}));

const MovieList: React.FC<IProps> = ({ results }) => {
  const classes = useStyles();
  const actors = () => results.Actors.split(",");
  const genres = () => results.Genre.split(",");

  return (
    <Grid container>
      <Grid item xs={12}>
        <Container maxWidth="md" style={{ marginTop: 30 }}>
          <Typography align="center" variant="h3" color="secondary">
            {results.Title}
          </Typography>
          <Grid container style={{ marginTop: 30 }}>
            <Grid item xs={12} lg={4} container justify="center">
              <img src={results.Poster} alt={results.Title} />
            </Grid>
            <Grid item xs={12} lg={8}>
              <Box ml={2}>
                {genres().map((genre, index) => (
                  <Chip
                    color="primary"
                    key={index}
                    label={genre}
                    style={{ marginRight: 10 }}
                  />
                ))}
                <Typography
                  variant="body1"
                  color="secondary"
                  style={{ marginTop: 10 }}
                >
                  Overview
                </Typography>
                <Typography variant="body2" style={{ marginTop: 10 }}>
                  {results.Plot}
                </Typography>
                <Typography
                  variant="body1"
                  color="secondary"
                  style={{ marginTop: 10 }}
                >
                  Info
                </Typography>
                <Typography variant="body2" style={{ marginTop: 10 }}>
                  <span style={{ fontWeight: 600 }}>Released:</span>{" "}
                  {results.Released}
                </Typography>
                <Typography variant="body2" style={{ marginTop: 10 }}>
                  <span style={{ fontWeight: 600 }}>Running Time:</span>{" "}
                  {results.Runtime}
                </Typography>
                <Typography variant="body2" style={{ marginTop: 10 }}>
                  <span style={{ fontWeight: 600 }}>Box Office:</span>{" "}
                  {results.BoxOffice}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Grid>
      <Grid item xs={12}>
        <Container maxWidth="md" style={{ marginTop: 30, paddingBottom: 30 }}>
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
