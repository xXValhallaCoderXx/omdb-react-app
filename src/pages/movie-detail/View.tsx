import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IMovieDetail } from "shared/types";

import { Grid } from "@material-ui/core";

import { MainLayout } from "shared/layouts";
import { Card, Spinner, Typography } from "shared/components/atoms";

import MovieDetail from "./MovieDetail";

interface IProps {
  id: string;
  value: string;
  loading: boolean;
  results: IMovieDetail;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const useStyles = makeStyles((theme) => ({
  searchCard: {
    position: "sticky",
    top: 55,
    borderRadius: 15,
    paddingBottom: 30,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 12,
    zIndex: 100,
  },
  contentCard: {
    marginTop: 35,
    borderRadius: 15,
    padding: theme.spacing(3),
    display: "flex",
    justifyContent: "center",
  },
  spinner: {
    marginBottom: theme.spacing(2),
  },
}));

const MovieDetailView: React.FC<IProps> = ({
  onSubmit,
  onChange,
  value,
  loading,
  results,
  id,
}) => {
  const classes = useStyles();

  const renderLoading = () => {
    return (
      <Grid>
        <Grid item container justify="center" className={classes.spinner}>
          <Spinner />
        </Grid>
        <Grid item>
          <Typography variant="body1" color="secondary">
            Fetching Movie Details...
          </Typography>
        </Grid>
      </Grid>
    );
  };
  return (
    <MainLayout movieID={id}>
      <Card className={classes.contentCard}>
        {loading && renderLoading()}
        {results && <MovieDetail results={results} />}
      </Card>
    </MainLayout>
  );
};

export default MovieDetailView;
