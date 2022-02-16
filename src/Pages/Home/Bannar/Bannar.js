import React from 'react';
import Grid from '@mui/material/Grid';
import Box  from '@mui/system/Box';
import Container from '@mui/material/Container';
import chair from '../../../images/chair.png'

import Typography  from '@mui/material/Typography';
import Button from "@mui/material/Button";




const Bannar = () => {
    return (
      <Container style={{marginTop: '-35%',
    marginBottom: "21%"}} sx={{ width: "100%" }}>
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6} md={5}>
              <Box sx={{ textAlign: "left" }}>
                <Typography variant="h3">Your New Smile Starts Hare</Typography>
                <Typography variant="overline">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                  minima nulla veniam sequi in similique magnam sit nisi,
                  mollitia quam?
                </Typography>
                <br />
                <Button
                  variant="contained"
                  sx={{ mt:4, backgroundColor: "rgba(127, 251, 237, 0.8)" }}
                >
                  GET APPINTMENT
                </Button>
              </Box>
            </Grid>
            <Grid item xs={6} md={7}>
              <img style={{ width: "100%", height: "80%" }} src={chair} alt="" />
            </Grid>
          </Grid>
        </Box>
      </Container>
    );
};

export default Bannar;