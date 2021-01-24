import React from "react";

import { IMovieList } from "shared/types";

import { Box } from "@material-ui/core";

import { MainLayout } from "shared/layouts";
import { Card, Typography } from "shared/components/atoms";
import { SearchBar } from "shared/components/molecules";

interface IProps {
  value: string;
  results: IMovieList[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const MainView: React.FC<IProps> = ({ onSubmit, onChange, results, value }) => {
  return (
    <MainLayout>
      <Card
        elevation={2}
        style={{ position: "sticky", top: 55, borderRadius: 15 }}
      >
        <SearchBar onChange={onChange} value="" />
      </Card>
      <Card style={{ marginTop: 35, borderRadius: 15 }}>
        <Typography align="center" variant="h4">
          No Content
        </Typography>
      </Card>
    </MainLayout>
  );
};

export default MainView;
