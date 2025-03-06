import { Box } from '@mui/material';
import newWoman from '../assets/new-woman.png';
const Section2 = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '120vh',
        backgroundColor: '#F4B82A',
        paddingY: 4,
      }}
    >
      <img src={newWoman} alt="" style={{ width: '100%', height: '100%' }} />
    </Box>
  );
};

export default Section2;
