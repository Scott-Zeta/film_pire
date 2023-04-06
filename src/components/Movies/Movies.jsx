import React, { useState, useEffect } from 'react';
import { Box, CircularProgress, useMediaQuery, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import MovieList from '../MovieList/MoiveList';

import { useGetMoviesQuery } from '../../services/TMDB';

const Movies = () => {
  const { data } = useGetMoviesQuery();
  console.log(data);
  return (
    <div>
      <MovieList />
    </div>
  );
};

export default Movies;
