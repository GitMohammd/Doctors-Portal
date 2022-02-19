import { Container, Grid, Typography } from "@mui/material";
import Box from "@mui/system/Box";
import React from "react";
import chair from "../../../images/chair.png";
import bg from   "../../../images/bg.png"
import Calender from "../Calender/Calender";

const appointmentBannarBg = {
  backgroundImage: `url(${bg})`,
  width: "100%",
};

const AppointmentHeader = ({date, setDate}) => {
  
  return (
    <Container style={appointmentBannarBg}>
      <Box sx={{ marginTop: 8 }}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={8}>
            <Typography variant="h4">Appointment</Typography>
            <Calender date={date} setDate={setDate}></Calender>
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
