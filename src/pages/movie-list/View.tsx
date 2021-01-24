import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IMovie } from "shared/types";

import { MainLayout } from "shared/layouts";
import { Card, Spinner, Typography } from "shared/components/atoms";
import { SearchBar } from "shared/components/molecules";

import MovieList from "./MovieList";

interface IProps {
  value: string;
  loading: boolean;
  totalResults: string;
  results: IMovie[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onClick: (id: string) => void;
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
  onClick,
  results,
  value,
  loading,
}) => {
  const classes = useStyles();

  const renderText = () => {
    return (
      <Typography variant="body1" color="secondary">
        No Search results...
      </Typography>
    );
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
        {results && !loading ? null : renderText()}
        <MovieList results={results} onClick={onClick} />
      </Card>
    </MainLayout>
  );
};

export default MainView;
