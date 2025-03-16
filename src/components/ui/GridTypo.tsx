import { Grid } from '@mui/material';
import CardTypo from './CardTypo';

const GridTypo = () => {
  return (
    <Grid
      container
      sx={{
        width: '50%',
        justifyContent: 'space-between',
        paddingX: '1em',
        alignItems: 'center',
        // flexWrap: { md: 'wrap', sm: 'wrap', lg: 'nowrap' },
      }}
      wrap="wrap"
      columnSpacing={{ lg: 4, md: 1, sx: 1 }}
    >
      <Grid item xs={6}>
        <CardTypo title="2019">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </CardTypo>

        <CardTypo title="2020">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </CardTypo>
      </Grid>
      <Grid item xs={6}>
        <CardTypo title="2021">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </CardTypo>

        <CardTypo title="2022">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </CardTypo>
      </Grid>
    </Grid>
  );
};

export default GridTypo;
