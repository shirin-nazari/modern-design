import { Grid, Typography } from '@mui/material';
import CardTypo from './CardTypo';
import Button from './Button';

const GridTypo = () => {
  return (
    <Grid
      container
      sx={{
        width: {
          lg: '60%',
          md: '80%',
          sm: '100%',
        },
        justifyContent: 'space-between',
        paddingX: '2em',
        alignItems: 'center',
      }}
      wrap="wrap"
      // columnSpacing={{ lg: 4, md: 1, sx: 1 }}
      columnSpacing={{ xs: 1, sm: 1, md: 3 }}
    >
      <Grid item md={6} xs={12}>
        <CardTypo title="2019">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </CardTypo>
      </Grid>
      <Grid item md={6} xs={12}>
        <CardTypo title="2020">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </CardTypo>
      </Grid>
      <Grid item md={6} xs={12}>
        <CardTypo title="2021">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </CardTypo>
      </Grid>
      <Grid item md={6} xs={12}>
        <CardTypo title="2022">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </CardTypo>
      </Grid>
      <Typography variant="body1" color="white">
        Images from
        <Button href="https://www.freepik.com/" color="#FFFFFF">
          Freepik
        </Button>
      </Typography>
    </Grid>
  );
};

export default GridTypo;
