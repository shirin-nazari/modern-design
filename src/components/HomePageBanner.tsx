import React from 'react';
import backGround from '../assets/background.jpg';
import { Box } from '@mui/material';
import GridCard from './ui/GridCard';

const HomePageBanner = () => {
  return (
    <Box
      sx={{
        marginTop: 8,
        width: '100%',
        height: '100vh',
        backgroundImage: `url(${backGround})`,
        backgroundSize: 'cover',
        // paddingTop: 50,
      }}
    >
      <GridCard />
    </Box>
  );
};

export default HomePageBanner;
