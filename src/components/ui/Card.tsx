import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import { ReactNode } from 'react';
type CardProps = {
  icon: string;
  children: ReactNode;
  link: ReactNode;
  body?: ReactNode;
};

export default function BasicCard({ icon, children, link, body }: CardProps) {
  return (
    <Card
      sx={{
        boxShadow: '0px 8px #EE8A02',
        borderRadius: '20px',
        padding: 2,
      }}
    >
      <CardContent sx={{ padding: 3 }}>
        <Typography gutterBottom sx={{ color: '##EE8A02', fontSize: 10 }}>
          <img src={icon} alt="" style={{ width: '50px', height: '50px' }} />
        </Typography>
        <Typography variant="h5" component="div">
          {children}
        </Typography>
        <Typography variant="body2" sx={{ mb: 1.5 }}>
          {body}
        </Typography>
      </CardContent>
      <CardActions sx={{ paddingLeft: 3 }}>{link}</CardActions>
    </Card>
  );
}
