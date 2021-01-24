import React, { useState, ChangeEvent, FormEvent } from "react";
import { useHistory } from "react-router-dom";
import useFetch from "shared/hooks/useFetch";

import View from "./View";

import { Toast } from "shared/components/molecules";

const MovieListContainer: React.FC = (props) => {
  const history = useHistory();
  const {
    getMovieList,
    loading,
    totalResults,
    data,
    error,
    clearError,
  } = useFetch();
  const [searchTerm, setSearchTerm] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(e.target.value);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getMovieList(searchTerm);
  };

  const onMovieClick = (id: string) => {
    history.push(`/movies/${id}`);
  };

  const renderToast = () =>
    error && (
      <Toast open={Boolean(error)} error={error} onClose={handleCloseToast} />
    );

  const handleCloseToast = () => clearError();
  return (
    <>
      <View
        onClick={onMovieClick}
        value={searchTerm}
        onChange={onChange}
        onSubmit={onSubmit}
        results={data}
        loading={loading}
        totalResults={totalResults}
      />
      {renderToast()}
    </>
  );
};

export default MovieListContainer;
