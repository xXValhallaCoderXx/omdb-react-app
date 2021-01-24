export interface IMovie {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

export interface IResponse {
  Response: boolean;
  Search: IMovie[];
  totalResults: string;
}
