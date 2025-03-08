import { Grid, Grid2 } from '@mui/material';
import React from 'react';
import CardTypo from './CardTypo';

const GridTypo = () => {
  return (
    <Grid2
      container
      rowSpacing={1}
      columnSpacing={{ xs: 2, sm: 2, md: 2, lg: 2 }}
    >
      <Grid size={6}>
        <CardTypo title="2019">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </CardTypo>
      </Grid>
      <Grid size={6}>
        <CardTypo title="2020">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </CardTypo>
      </Grid>
      <Grid size={6}>
        <CardTypo title="2021">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </CardTypo>
      </Grid>

      <CardTypo title="2022">
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.
      </CardTypo>
    </Grid2>
  );
};

export default GridTypo;
