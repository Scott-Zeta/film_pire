import React from 'react';
import { Typography, Grid, Grow, Tooltip, Rating } from '@mui/material';
import { Link } from 'react-router-dom';
import useStyles from './styles';

const Movie = ({ movie }) => {
  const classes = useStyles();
  console.log(movie);
  return (
    <div>
      Movie
    </div>
  );
};

export default Movie;
