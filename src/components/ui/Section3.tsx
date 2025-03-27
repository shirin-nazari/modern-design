import { PhoneAndroidOutlined } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import Button from './Button';

const Section3 = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#292D33',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: '50vh',
        flexWrap: {
          lg: 'wrap',
          md: 'wrap',
          sm: 'wrap',
          xs: 'wrap',
        },
      }}
    >
      <Box
        sx={{
          backgroundColor: '#292D33',
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          width: '50%',
          flexWrap: {
            md: 'wrap',
            sm: 'wrap',
            xs: 'wrap',
            xl: 'nowrap',
            lg: 'nowrap',
          },
        }}
      >
        <Box
          sx={{
            backgroundColor: '#F4B82A',
            borderRadius: '50%',
            width: '5em',
            height: '5em',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <PhoneAndroidOutlined
            sx={{
              color: 'white',
              padding: '2px',
              fontSize: '3em',
            }}
          />
        </Box>

        <Box>
          <Typography
            variant="h4"
            sx={{
              color: '#d8d8d8',
              fontSize: {
                lg: '1.5em',
                md: '1em',
                xs: '0.8em',
              },
            }}
          >
            Contact Us Today!
          </Typography>
          <Typography
            sx={{
              color: '#d8d8d8',
              fontSize: {
                lg: '1.5em',
                md: '1em',
                xs: '0.8em',
              },
            }}
          >
            Call us today 1 777 000 0000 or{' '}
            <Button href="shirnnazari.h@gmail.com" sx={{ color: 'white' }}>
              EMAIL US
            </Button>
          </Typography>
        </Box>
      </Box>

      <Button
        sx={{
          backgroundColor: '#E6A81D',
          padding: '2em',
          borderRadius: '5px',
          fontWeight: 400,
          fontSize: '1em',
          color: 'white',
        }}
      >
        Book a consultation
      </Button>
    </Box>
  );
};

export default Section3;
