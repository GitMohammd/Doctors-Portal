import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import User1 from "../../../images/people-1.png";
import User2 from "../../../images/people-2.png";
import User3 from "../../../images/people-3.png";
import Testimonial_review from "./Testimonial_review";

const PatientsReviews = [
  {
    id: "1",
    name: "Winson Herry",
    description:
      "It is a established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to using 'Content here, content",
    from: "California",
    img: User1 ,
  },
  {
    id: "2",
    name: "Winson Herry",
    description:
      "It is a established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to using 'Content here, content",
    from: "California",
    img:  User2 ,
  },
  {
    id: "3",
    name: "Winson Herry",
    description:
      "It is a established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to using 'Content here, content",
    from: "California",
    img: User3 ,
  },
];

const Testimonial = () => {
  return (
    <Container sx={{ marginTop: 8}}>
      <Box sx={{textAlign: "left"}} >
        <Typography sx={{ color: "#17E9BD" }} variant="h6">
          TESTIMOAL
        </Typography>
        <Typography variant="h4">
          What's Our Patientes
          <br />
          Says
        </Typography>
      </Box>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {PatientsReviews.map((PatientsReview) => (
          <Testimonial_review
            key={PatientsReview.id}
            PatientsReview={PatientsReview}
          ></Testimonial_review>
        ))}
      </Grid>
    </Container>
  );
};

export default Testimonial;
