import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IMovie } from "shared/types";

import { MainLayout } from "shared/layouts";
import { Card, Spinner } from "shared/components/atoms";
import { SearchBar } from "shared/components/molecules";

import MovieList from "./MovieList";
import { Typography } from "@material-ui/core";

interface IProps {
  value: string;
  loading: boolean;
  totalResults: string;
  results: IMovie[];
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
}));

const MainView: React.FC<IProps> = ({
  onSubmit,
  onChange,
  results,
  value,
  loading,
}) => {
  const classes = useStyles();

  const renderText = () => {
    return <Typography>No Search results...</Typography>;
  };
  return (
    <MainLayout>
      <Card elevation={2} className={classes.searchCard}>
        <form onSubmit={onSubmit}>
          <SearchBar onChange={onChange} value={value} loading={loading} />
        </form>
      </Card>
      <Card className={classes.contentCard}>
        {loading && <Spinner />}
        {results.length === 0 ? renderText() : null}
        <MovieList results={results} />
      </Card>
    </MainLayout>
  );
};

export default MainView;
