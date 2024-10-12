import React from 'react';
import { Box } from '@mui/material';
import logo from '../images/header-FACE.PNG';  // Your logo

const Header = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',  // Set background to white
        padding: '10px',
        boxShadow: '0px 4px 2px -2px gray'  // Optional: adds a slight shadow under the header
      }}
    >
      <img src={logo} alt="FACE Logo" style={{ height: '80px', width: 'auto' }} />  {/* Increased logo height */}
    </Box>
  );
};

export default Header;
