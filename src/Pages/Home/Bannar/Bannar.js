import React from 'react';
import Grid from '@mui/material/Grid';
import Box  from '@mui/system/Box';
import Container from '@mui/material/Container';
import chair from '../../../images/chair.png'
import bg from "../../../images/bg.png";

const bannarBg = {
    
}

const Bannar = () => {
    return (
      <Container>
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>

            </Grid>
            <Grid item xs={6}></Grid>
          </Grid>
        </Box>
      </Container>
    );
};

export default Bannar;