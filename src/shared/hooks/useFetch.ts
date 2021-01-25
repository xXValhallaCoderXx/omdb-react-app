import { useState } from "react";
import { IMovie, IMovieDetail } from "shared/types";

const httpStatus: any = (response: Response) => {
  if (response.ok) {
    return response;
  } else {
    const error: any = new Error(response.statusText);
    error.response = response;
    throw error;
  }
};

const parseJson = (res: Response) => res.json();

const { REACT_APP_API_KEY } = process.env;

export interface IResponse {
  Response: string;
  Search: IMovie[];
  totalResults: string;
  Error: string;
}

const useFetch = () => {
  const [data, setData] = useState<any>(null);
  const [totalResults, setTotalResults] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getMovieList = async (query: string) => {
    setError("");
    setData(null);
    setLoading(true);
    const url = `https://www.omdbapi.com/?apiKey=${REACT_APP_API_KEY}&s=${query}`;
    const results: IResponse = await fetch(url)
      .then(httpStatus)
      .then(parseJson);

    if (results.Response === "False") {
      setError(results.Error);
    } else if (results.Response === "True") {
      setData(results.Search);
      setTotalResults(results.totalResults);
    }

    setLoading(false);
  };

  const getMovie = async (id: string) => {
    setLoading(true);
    const url = `https://www.omdbapi.com/?apiKey=${REACT_APP_API_KEY}&i=${id}`;
    const results: IMovieDetail = await fetch(url)
      .then(httpStatus)
      .then(parseJson);
    setData(results);
    setLoading(false);
  };

  const clearError = () => setError("");

  return {
    getMovie,
    getMovieList,
    data,
    loading,
    totalResults,
    error,
    clearError,
  };
};

export default useFetch;
