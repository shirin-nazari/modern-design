import { Box, Typography } from '@mui/material';
import { ReactNode } from 'react';

interface PropsType {
  title: string;
  children: ReactNode;
}
const CardTypo = ({ title, children }: PropsType) => {
  return (
    <Box sx={{ color: 'white', width: '100%', padding: '0.5em' }}>
      <Typography
        sx={{ fontWeight: 'bold', paddingBottom: '.5em' }}
        variant="h2"
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          lineHeight: '2em',
          fontWeight: 600,
          fontSize: '1em',
        }}
      >
        {children}
      </Typography>
    </Box>
  );
};

export default CardTypo;
