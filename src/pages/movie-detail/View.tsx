import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IMovieDetail } from "shared/types";
import { MainLayout } from "shared/layouts";

import { Card, Spinner } from "shared/components/atoms";
import { SearchBar } from "shared/components/molecules";

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

    display: "flex",
    justifyContent: "center",
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

  return (
    <MainLayout movieID={id}>
      {/* <Card elevation={2} className={classes.searchCard}>
        <form onSubmit={onSubmit}>
          <SearchBar onChange={onChange} value={value} loading={loading} />
        </form>
      </Card> */}
      <Card className={classes.contentCard}>
        {false && <Spinner />}
        {results && <MovieDetail results={results} />}
      </Card>
    </MainLayout>
  );
};

export default MovieDetailView;
