import React from 'react';
import { Box } from '@mui/material';

// Reusable Frame Component
const FormFrame = ({ children }) => {
  return (
    <Box
      sx={{
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff'
      }}
    >
      {children}
    </Box>
  );
};

export default FormFrame;
