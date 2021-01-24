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
  Response: boolean;
  Search: IMovie[];
  totalResults: string;
}

const useFetch = () => {
  const [data, setData] = useState<any>(null);
  const [totalResults, setTotalResults] = useState("");
  const [loading, setLoading] = useState(false);

  const apiCall = async (query: string) => {
    setLoading(true);
    const url = `http://www.omdbapi.com/?apiKey=${REACT_APP_API_KEY}&${query}`;
    const results: IResponse = await fetch(url)
      .then(httpStatus)
      .then(parseJson);
    console.log("RESULT: ", results);
    setData(results.Search);
    setTotalResults(results.totalResults);
    setLoading(false);
  };

  const movieDetail = async (id: string) => {
    setLoading(true);
    const url = `http://www.omdbapi.com/?apiKey=${REACT_APP_API_KEY}&i=${id}`;
    const results: IMovieDetail = await fetch(url)
      .then(httpStatus)
      .then(parseJson);
    setData(results);
    setLoading(false);
  };

  return { apiCall, data, movieDetail, loading, totalResults };
};

export default useFetch;
