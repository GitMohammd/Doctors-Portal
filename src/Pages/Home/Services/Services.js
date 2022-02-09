import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import Service from "../Service/Service";
import fluoride from "../../../images/fluoride.png";
import cavity from "../../../images/cavity.png";
import teeth from "../../../images/whitening.png";

const services = [
  {
    name: "Fluoride Treatment",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quae alias dignissimos id tempora praesentium sint laborum deserunt aperiam voluptates?",
    img: fluoride,
    alt: "Fluoride"
  },
  {
    name: "Cavity Filling",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quae alias dignissimos id tempora praesentium sint laborum deserunt aperiam voluptates?",
    img: cavity,
    alt: "cavity"
  },
  {
    name: "Teeth Whitening",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quae alias dignissimos id tempora praesentium sint laborum deserunt aperiam voluptates?",
    img: teeth,
    alt: "Teeth Whitening"
  },
];

const Services = () => {
    

  return (
    <Container>
      <Typography
        sx={{ color: "info.main" }}
        gutterBottom
        variant="h6"
        component="div"
        m={4}
      >
        Our services
      </Typography>
      <Typography
        sx={{ fontWeight: 500 }}
        mb={5}
        gutterBottom
        variant="h4"
        component="div"
      >
        Services We Provide
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {services.map((service, index) => (
            <Grid item xs={4} sm={4} md={4} key={index}>
              <Service service={service} key={index}></Service>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Services;
