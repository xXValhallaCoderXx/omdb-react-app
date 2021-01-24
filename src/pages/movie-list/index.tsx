import React, { useState, ChangeEvent, FormEvent } from "react";
import { useHistory } from "react-router-dom";
import useFetch from "shared/hooks/useFetch";

import View from "./View";

const MovieListContainer: React.FC = (props) => {
  const history = useHistory();
  const { apiCall, loading, totalResults, data } = useFetch();
  const [searchTerm, setSearchTerm] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(`s=${e.target.value}`);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    apiCall(searchTerm);
  };

  const onMovieClick = (id: string) => {
    history.push(`/movies/${id}`);
  };
  return (
    <View
      onClick={onMovieClick}
      value={searchTerm}
      onChange={onChange}
      onSubmit={onSubmit}
      results={data}
      loading={loading}
      totalResults={totalResults}
    />
  );
};

export default MovieListContainer;
