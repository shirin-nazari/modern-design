import { Box } from '@mui/material';
import newWoman from '../assets/new-woman.png';
import GridTypo from './ui/GridTypo';

const Section2 = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        backgroundColor: '#F4B82A',
        paddingY: 4,
      }}
    >
      <GridTypo />
      <img src={newWoman} alt="" style={{ width: '80%', height: '100%' }} />
    </Box>
  );
};

export default Section2;
