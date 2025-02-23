import { Grid } from '@mui/material';
import Card from './Card';
import GraphicDesign from '../../assets/graphic.png';
import webdesign from '../../assets/webdesign.png';
import software from '../../assets/software.png';
import application from '../../assets/application.png';
import Button from './Button';
const GridCard = () => {
  return (
    <Grid
      container
      spacing={1}
      sx={{ justifyContent: 'space-evenly', paddingX: 8, alignItems: 'center' }}
    >
      <Grid item>
        <Card icon={GraphicDesign} link={<Button to="#">More</Button>}>
          Graphic Design
        </Card>
      </Grid>
      <Grid item>
        <Card icon={webdesign} link={<Button to="#">More</Button>}>
          Web Design
        </Card>
      </Grid>
      <Grid item>
        <Card icon={software} link={<Button to="#">More</Button>}>
          Software
        </Card>
      </Grid>
      <Grid item>
        <Card icon={application} link={<Button to="#">More</Button>}>
          Application
        </Card>
      </Grid>
    </Grid>
  );
};

export default GridCard;
