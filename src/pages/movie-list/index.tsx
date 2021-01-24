import React, { useState, ChangeEvent, FormEvent } from "react";
import useFetch from "shared/hooks/useFetch";

import View from "./View";

const MovieListContainer: React.FC = () => {
  const { apiCall, loading, totalResults, data } = useFetch();
  const [searchTerm, setSearchTerm] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(e.target.value);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    apiCall(searchTerm);
  };

  return (
    <View
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
