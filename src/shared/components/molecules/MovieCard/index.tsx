import React from "react";
import { IMovie } from "shared/types";
import { capitalize } from "shared/utils/font-formatting";
import { makeStyles } from "@material-ui/core/styles";

import ErrorIcon from "@material-ui/icons/Error";
import { Grid } from "@material-ui/core";

import { Button, Card, Typography } from "shared/components/atoms";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    borderRadius: 10,
    marginTop: theme.spacing(3),
    height: 175,
    [theme.breakpoints.up("md")]: {
      width: 450,
    },
    maxWidth: 450,
  },
  image: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
    [theme.breakpoints.up("md")]: {
      clipPath: "polygon(0 175px, 120px 195px, 150px 0, 0 0);",
    },

    clipPath: "polygon(0 175px,80px 205px, 110px 0, 0 0);",
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
  console.log("MOVIE POST: ", movie.Poster);
  const classes = useStyles();
  const handleOnClick = () => {
    onClick(movie.imdbID);
  };
  const imgSrc =
    movie.Poster === "N/A" ? "https://via.placeholder.com/150" : movie.Poster;
  return (
    <Card elevation={5} className={classes.wrapper}>
      <Grid container>
        <Grid item xs={4}>
          <img className={classes.image} alt={movie.Title} src={imgSrc} />
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
