import React, { useEffect } from 'react';
import { Divider, List, ListItem, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@emotion/react';

const Sidebar = ({ setMobileOpen }) => {
  const theme = useTheme();

  return (
    <div>
      Sidebar
    </div>
  );
};

export default Sidebar;
