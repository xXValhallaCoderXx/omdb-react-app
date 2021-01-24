import React from "react";

import { IMovieList } from "shared/types";

import { Box } from "@material-ui/core";

import { MainLayout } from "shared/layouts";
import { Card } from "shared/components/atoms";

interface IProps {
  value: string;
  results: IMovieList[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const MainView: React.FC<IProps> = ({ onSubmit, onChange, results, value }) => {
  return (
    <MainLayout>
      <Card style={{ position: "sticky", top: 55 }}> SEARCH</Card>
      <Card style={{ marginTop: 35, height: 1200 }}>CONTENT</Card>
    </MainLayout>
  );
};

export default MainView;
