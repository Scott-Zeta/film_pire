import React from 'react';
import { Typography, Grid, Grow, Tooltip, Rating } from '@mui/material';
import { Link } from 'react-router-dom';
import useStyles from './styles';

const Movie = ({ movie, i }) => {
  const classes = useStyles();
  console.log(movie);
  return (
    <Grid item xs={12} sm={6} md={3} lg={4} xl={2} className={classes.movie}>
      {/* Grow is a loading animation component */}
      <Grow in key={i} timeout={250}>
        <Typography className={classes.title} variant="h5">
          {movie.title}
        </Typography>
      </Grow>
    </Grid>
  );
};

export default Movie;
