import { useState, useEffect } from "react";
import { IMovie } from "shared/types";

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
  const [data, setData] = useState<IMovie[]>([]);
  const [totalResults, setTotalResults] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const apiCall = async (name: string) => {
    setLoading(true);
    const url = `http://www.omdbapi.com/?apiKey=${REACT_APP_API_KEY}&s=${name}`;
    const results: IResponse = await fetch(url)
      .then(httpStatus)
      .then(parseJson);
    setData(results.Search);
    setTotalResults(results.totalResults);
    setLoading(false);
  };

  return { apiCall, data, loading, totalResults };
};

export default useFetch;
