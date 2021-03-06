import React, { useState, ChangeEvent, FormEvent } from "react";
import { RouteComponentProps } from "react-router-dom";
import useFetch from "shared/hooks/useFetch";
import View from "./View";

interface IParams {
  id: string;
}

const MovieListContainer: React.FC<RouteComponentProps<IParams>> = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { getMovie, loading, data } = useFetch();
  const { id } = props.match.params;
  React.useEffect(() => {
    getMovie(id);
  }, []);

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(e.target.value);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <View
      onChange={onChange}
      onSubmit={onSubmit}
      value={searchTerm}
      loading={loading}
      results={data}
      id={id}
    />
  );
};

export default MovieListContainer;
