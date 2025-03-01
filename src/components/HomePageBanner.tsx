import React from 'react';
import backGround from '../assets/background.jpg';
import { Box, Typography } from '@mui/material';
import GridCard from './ui/GridCard';
import Button from './ui/Button';

const HomePageBanner = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '120vh',
        backgroundImage: `url(${backGround})`,
        backgroundSize: 'cover',
        paddingY: 4,
      }}
    >
      <GridCard />
      <Typography
        variant="h6"
        color="white"
        sx={{ textAlign: 'center', paddingY: 3 }}
      >
        Image by{' '}
        <Button href="https://www.freepik.com/photos/people" color="inherit">
          Freepik
        </Button>
      </Typography>
    </Box>
  );
};

export default HomePageBanner;
