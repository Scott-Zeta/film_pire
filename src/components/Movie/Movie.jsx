import React from 'react';
import { Typography, Grid, Grow, Tooltip, Rating } from '@mui/material';
import { Link } from 'react-router-dom';
import useStyles from './styles';

/* In React, the key prop is a reserved prop that is used to help React identify which items have changed,
been added, or been removed in a list of components.
It is not passed down to the component as a regular prop, so it will be undefined if you try to access it inside the component.
*/

const Movie = ({ movie, customKey }) => {
  const classes = useStyles();
  console.log(customKey);
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} className={classes.movie}>
      {/* Grow is a loading animation component */}
      <Grow in key={customKey} timeout={(customKey + 1) * 100}>
        <Link className={classes.links} to={`/movie/${movie.id}`}>
          <img
            alt={movie.title}
            className={classes.image}
            src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : 'https://www.fillmurray.com/200/300'}
          />
          <Typography className={classes.title} variant="h5">
            {movie.title}
          </Typography>
          <Tooltip disableTouchListener title={`${movie.vote_average}/10`}>
            <div>
              <Rating readOnly value={movie.vote_average / 2} precision={0.1} />
            </div>
          </Tooltip>
        </Link>
      </Grow>
    </Grid>
  );
};

export default Movie;
