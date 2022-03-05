import { Container, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Testimonial_review = ({ PatientsReview }) => {
    const { name , description, from, img} = PatientsReview;
  return (
    <>
      <Grid item xs={6} md={4}>
        <Paper sx={{ marginTop: 8, height: 230 }}>
          <Container>
            <Typography
              style={{ marginBottom: 20, fontSize: 15, color: "##748682" }}
            >
              {description}
            </Typography>
          </Container>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={img} alt="" />
            <div className="">
              <Typography
                style={{ marginLeft: 20, fontSize: 20, color: "#15DDB3" }}
              >
                {name}
              </Typography>
              <br />
              <Typography
                style={{ marginLeft: 20, fontSize: 15, color: "#899A97" }}
              >
                {from}
              </Typography>
            </div>
          </Box>
        </Paper>
      </Grid>
    </>
  );
};

export default Testimonial_review;