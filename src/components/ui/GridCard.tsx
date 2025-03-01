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
      sx={{
        justifyContent: 'space-evenly',
        paddingX: 10,
        alignItems: 'end',
        height: '95% ',
      }}
      spacing={{ xs: 2, md: 2, sm: 1 }}
      columns={{ xs: 2, sm: 2, md: 4 }}
    >
      <Grid item xs={1}>
        <Card
          icon={GraphicDesign}
          link={
            <Button href="#" color="textSecondary">
              More
            </Button>
          }
        >
          Graphic Design
        </Card>
      </Grid>
      <Grid item xs={1}>
        <Card
          icon={webdesign}
          link={
            <Button href="#" color="textSecondary">
              More
            </Button>
          }
        >
          Web Design
        </Card>
      </Grid>
      <Grid item xs={1}>
        <Card
          icon={software}
          link={
            <Button href="#" color="textSecondary">
              More
            </Button>
          }
        >
          Software
        </Card>
      </Grid>
      <Grid item xs={1}>
        <Card
          icon={application}
          link={
            <Button href="#" color="textSecondary">
              More
            </Button>
          }
        >
          Application
        </Card>
      </Grid>
    </Grid>
  );
};

export default GridCard;
