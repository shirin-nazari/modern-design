import { PhoneAndroidOutlined } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import Button from './Button';

const Section3 = () => {
  return (
    <Box sx={{ backgroundColor: '#292D33' }}>
      <PhoneAndroidOutlined />

      <Box>
        <Typography variant="h4">Contact Us Today!</Typography>
        <Typography>
          Call us today 1 777 000 0000 or{' '}
          <Button href="shirnnazari.h@gmail.com">EMAIL US</Button>
        </Typography>
      </Box>
      {/* <Button>Book a consultation</Button> */}
      <Button sx={{ backgroundColor: '#E6A81D', padding: '1rem' }}>
        Book a consultation
      </Button>
    </Box>
  );
};

export default Section3;
