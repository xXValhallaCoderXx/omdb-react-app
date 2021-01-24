import React from "react";

import { IMovie } from "shared/types";

import { MainLayout } from "shared/layouts";
import { Card } from "shared/components/atoms";
import { SearchBar } from "shared/components/molecules";

import MovieList from "./MovieList";

interface IProps {
  value: string;
  loading: boolean;
  totalResults: string;
  results: IMovie[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const MainView: React.FC<IProps> = ({ onSubmit, onChange, results, value }) => {
  return (
    <MainLayout>
      <Card
        elevation={2}
        style={{
          position: "sticky",
          top: 55,
          borderRadius: 15,
          paddingBottom: 30,
          paddingLeft: 20,
          paddingRight: 20,
          zIndex: 100,
        }}
      >
        <form onSubmit={onSubmit}>
          <SearchBar onChange={onChange} value={value} />
        </form>
      </Card>
      <Card style={{ marginTop: 35, borderRadius: 15, paddingBottom: 45 }}>
        <MovieList results={results} />
      </Card>
    </MainLayout>
  );
};

export default MainView;
