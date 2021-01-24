import React from "react";

import { IMovieList } from "shared/types";

import { MainLayout } from "shared/layouts";

interface IProps {
  value: string;
  results: IMovieList[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const MainView: React.FC<IProps> = ({ onSubmit, onChange, results, value }) => {
  return <MainLayout style={{ padding: 0 }}>MainLayout</MainLayout>;
};

export default MainView;
