import React from 'react';
import { Grid } from '@mui/material';

import useStyles from './styles';
import Movie from '../Movie/Movie';

const MoiveList = ({ movies }) => {
  const classes = useStyles();
  console.log(movies);
  return (
    <Grid container className={classes.moviesContainer}>
      {movies.results.map((movie, i) => (
        <Movie key={i} movie={movie} customKey={i} />
      ))}
    </Grid>
  );
};

export default MoiveList;
