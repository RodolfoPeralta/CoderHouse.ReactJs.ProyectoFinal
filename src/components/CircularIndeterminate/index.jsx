import { Box, CircularProgress } from '@mui/material';
import React from 'react';

export const CircularIndeterminate = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <CircularProgress />
    </Box>
  )
}