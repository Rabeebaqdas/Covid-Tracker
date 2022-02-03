import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Bottom({screenConfig}) {
  return (
    <Box sx={{ width: '100%'}}>
      <BottomNavigation
        showLabels
        value={screenConfig[0]}
        onChange={(event, newValue) => {
            screenConfig[1](newValue);
        }}
      >
        <BottomNavigationAction label="Global" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Countries" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Box>
  );
}
