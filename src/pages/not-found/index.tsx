import React from "react";
import { useHistory } from "react-router-dom";
import { useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import { MainLayout } from "shared/layouts";
import { Card, Typography, Button } from "shared/components/atoms";

import imgSrc from "shared/images/not-found.png";

const NotFoundContainer = () => {
  const history = useHistory();
  const theme = useTheme();

  const handleGoBack = () => history.push("/movies");
  return (
    <MainLayout>
      <Card style={{ padding: theme.spacing(5) }}>
        <Grid container>
          <Grid item xs={12} container justify="center">
            {" "}
            <img src={imgSrc} alt="Not found" style={{ maxHeight: 600 }} />
          </Grid>
          <Grid
            item
            container
            justify="center"
            style={{ marginTop: theme.spacing(3) }}
          >
            <Typography variant="h4" color="secondary">
              Oops! You're not supposed to be here
            </Typography>
          </Grid>
          <Grid
            item
            container
            justify="center"
            style={{ marginTop: theme.spacing(3) }}
          >
            <Button
              variant="contained"
              color="secondary"
              onClick={handleGoBack}
            >
              Back Home
            </Button>
          </Grid>
        </Grid>
      </Card>
    </MainLayout>
  );
};

export default NotFoundContainer;
