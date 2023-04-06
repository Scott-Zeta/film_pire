import React from 'react';
import { Grid } from '@mui/material';

import useStyles from './styles';

const MoiveList = ({ movies }) => {
  const classes = useStyles();
  console.log(movies);
  return (
    <div>
      MovieList
    </div>
  );
};

export default MoiveList;
