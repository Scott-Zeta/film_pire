import React, { useState, useEffect } from 'react';
import { Box, CircularProgress, useMediaQuery, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { MovieList } from '../ComponentsIndex';

import { useGetMoviesQuery } from '../../services/TMDB';

const Movies = () => {
  const { data, error, isFetching } = useGetMoviesQuery();

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }
  if (!data.results.length) {
    return (
      <Box display="flex" alignItems="center" mt="20px">
        <Typography variant="g4">
          No movies match your query.<br />
          Please search something else!
        </Typography>
      </Box>
    );
  }
  if (error) {
    return (
      <Box display="flex" alignItems="center" mt="20px">
        <Typography variant="g4">
          An Error has occured. :-(
        </Typography>
      </Box>
    );
  }
  return (
    <div>
      <MovieList movies={data} />
    </div>
  );
};

export default Movies;
