import { Box } from '@mui/material';
import newWoman from '../assets/new-woman.png';
import GridTypo from './ui/GridTypo';

const Section2 = () => {
  return (
    <Box
      sx={{
        // width: '100%',
        backgroundColor: '#F4B82A',
        paddingTop: '4rem',
        display: 'flex',
        flexWrap: {
          md: 'wrap',
          sm: 'wrap',
          xs: 'wrap',
          xl: 'nowrap',
          lg: 'nowrap',
        },
      }}
    >
      <GridTypo />

      <img src={newWoman} alt="" style={{ width: '50%', height: '100%' }} />
    </Box>
  );
};

export default Section2;
