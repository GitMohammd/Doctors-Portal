import { Container, Grid, Typography } from '@mui/material';
import  Box  from '@mui/system/Box';
import React from 'react';
import chair from '../../../images/chair.png'
import Calender from '../Calender/Calender';

const AppointmentHeader = () => {
    return (
      <Container>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={6} md={8}>
              <Typography sx={{textAlign:"left"}} variant='h4'>Appointment</Typography>
                <Calender></Calender>            
                </Grid>
            <Grid item xs={6} md={4}>
              <img style={{ width: "100%" }} src={chair} alt="" />
            </Grid>
          </Grid>
        </Box>
      </Container>
    );
};

export default AppointmentHeader;