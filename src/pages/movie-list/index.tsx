import React from "react";
import View from "./View";

const MovieListContainer: React.FC = () => {
  const onChange = () => {
    console.log("ON CHANGE");
  };
  const onSubmit = () => {
    console.log("ON SUBMIT");
  };
  return <View value="" onChange={onChange} onSubmit={onSubmit} results={[]} />;
};

export default MovieListContainer;
