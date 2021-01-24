import React, { useState, ChangeEvent, FormEvent } from "react";
import View from "./View";

import { IMovieList } from "shared/types";

const MovieListContainer: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<IMovieList[]>([]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(e.target.value);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    console.log("ON SUBMIT");
  };
  return <View value="" onChange={onChange} onSubmit={onSubmit} results={[]} />;
};

export default MovieListContainer;
