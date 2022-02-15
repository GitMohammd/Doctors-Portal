import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import bg from "../../../images/appointment-bg.png";
import doctor from "../../../images/doctor.png";
import { Button, Typography } from "@mui/material";
import Container from "@mui/material/Container";

const bannarBg = {
  background: `url(${bg})`,
  marginTop: 175,
  backgroundColor: "rgba(90, 89, 120, 0.8) ",
  backgroundBlendMode: "darken"
};

const AppoinmentBannar = () => {
  return (
    <Container
      style={bannarBg} sx={{ width: "100%" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} md={6}>
          <img
            style={{ width: 400, marginTop: "-100px" }}
            src={doctor}
            alt=""
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            textAlign: "left",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Box sx={{ color: "white" }}>
            <Typography variant="h6" sx={{ color: "rgba(127, 251, 237, 0.8)" }}>
              Appointment
            </Typography>
            <Typography variant="h4" sx={{ mt: 3 }}>
              Make an appointment Today
            </Typography>
            <Typography sx={{ fontWeight: 500, mt: 3, mb: 3 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
              dolorem non! Officia accusamus ipsam quod perspiciatis debitis
              iure atque quidem!
            </Typography>
            <Button
              variant="contained"
              sx={{ backgroundColor: "rgba(127, 251, 237, 0.8)" }}
            >
              Contained
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AppoinmentBannar;
