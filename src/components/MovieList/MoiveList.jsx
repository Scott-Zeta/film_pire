import React from 'react';
import { Grid } from '@mui/material';

import useStyles from './styles';
import { Movie } from '../ComponentsIndex';

const MoiveList = ({ movies }) => {
  const classes = useStyles();
  console.log(movies);
  return (
    <Grid container className={classes.moviesContainer}>
      {movies.result.map((movie, i) => (
        <Movie key={i} movie={movie} />
      ))}
    </Grid>
  );
};

export default MoiveList;
