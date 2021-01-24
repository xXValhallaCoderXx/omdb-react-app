import React from "react";
import { IMovie } from "shared/types";
import { capitalize } from "shared/utils/font-formatting";
import { makeStyles } from "@material-ui/core/styles";

import { Button, Card, Typography } from "shared/components/atoms";

import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    borderRadius: 10,
    marginTop: theme.spacing(3),
    height: 150,
    width: 450,
  },
  image: {
    width: "100%",
    objectFit: "cover",
    clipPath: "polygon(0 150px, 120px 150px, 140px 0, 0 0);",
  },
  textContent: {
    padding: theme.spacing(3),
  },
  ctaBtn: {
    marginTop: theme.spacing(2),
  },
}));

interface IProps {
  movie: IMovie;
  onClick: (id: string) => void;
}

const MovieCard: React.FC<IProps> = ({ movie, onClick }) => {
  const classes = useStyles();
  const handleOnClick = () => {
    onClick(movie.imdbID);
  };
  return (
    <Card elevation={5} className={classes.wrapper}>
      <Grid container>
        <Grid item xs={4}>
          <img className={classes.image} alt={movie.Title} src={movie.Poster} />
        </Grid>
        <Grid item xs={8} className={classes.textContent}>
          <Typography color="primary" variant="h6" style={{ fontWeight: 800 }}>
            {movie.Title}
          </Typography>
          <Typography variant="body2" color="secondary">
            {capitalize(movie.Type)}
          </Typography>
          <Button
            size="small"
            color="secondary"
            variant="contained"
            onClick={handleOnClick}
            className={classes.ctaBtn}
          >
            More
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
};

export default MovieCard;
