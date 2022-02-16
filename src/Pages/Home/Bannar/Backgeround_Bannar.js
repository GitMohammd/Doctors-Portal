import React from 'react';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import bg from "../../../images/bg.png";


const Backgeround_Bannar = () => {

    return (
      <Box style={{marginTop: 16}}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={6}
            md={8}
          >
              <img style={{width: '100%'}} src={bg} alt="" />
          </Grid>
          <Grid
            style={{ backgroundColor: "rgba(31, 32, 73, 0.8)" }}
            item
            xs={6}
            md={4}
          ></Grid>
        </Grid>
      </Box>
    );
};

export default Backgeround_Bannar;