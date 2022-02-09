import React from 'react';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import bg from "../../../images/appointment-bg.png";
import doctor from "../../../images/doctor.png";

  const bannarBg = {
        background: `url(${bg})`
    }

const AppoinmentBannar = () => {
  


    return (
      <Box style={bannarBg} sx={{ width: "100%"}}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} md={6}>
            <img style={{ width: 400 }} src={doctor} alt="" />
          </Grid>
          <Grid item xs={12} md={6}>
            <h2>more more</h2>
          </Grid>
        </Grid>
      </Box>
    );
};

export default AppoinmentBannar;