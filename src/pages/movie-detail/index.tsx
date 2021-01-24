import React, { useState, ChangeEvent, FormEvent } from "react";
import { RouteComponentProps } from "react-router-dom";
import useFetch from "shared/hooks/useFetch";
import View from "./View";

interface IParams {
  id: string;
}

const MovieListContainer: React.FC<RouteComponentProps<IParams>> = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { movieDetail, loading, data } = useFetch();
  React.useEffect(() => {
    const id = props.match.params.id;
    movieDetail(id);
  }, []);

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(`s=${e.target.value}`);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("SUBMIT");
  };

  return (
    <View
      onChange={onChange}
      onSubmit={onSubmit}
      value={searchTerm}
      loading={loading}
      results={data}
    />
  );
};

export default MovieListContainer;
