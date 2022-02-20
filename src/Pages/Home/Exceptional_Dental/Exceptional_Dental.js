import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import treatment from '../../../images/treatment.png'

const Exceptional_Dental = () => {
    return (
      <Container sx={{ marginTop: 10 }}>
        <Box sx={{ textAlign: "left" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <img
                style={{ width: "100%" }}
                src={treatment}
                alt="Exceptional_Dental_treatment"
              />
            </Grid>
            <Grid sx={{ marginTop: 3 }} item xs={6}>
              <Typography variant="h4">
                Exceptional Dental Care, on Your Terms
              </Typography>
              <Typography
                sx={{ marginTop: 10, color: "gray" }}
                variant="subtitle2"
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores eos officiis reiciendis expedita natus cum nihil quae accusamus repellendus iste debitis eligendi commodi dicta accusantium vitae repellat repudiandae molestias, quisquam necessitatibus ab sunt nam, incidunt labore consequatur. Velit architecto vitae, commodi aliquam debitis repudiandae quaerat neque, explicabo voluptatum, nostrum sequi.
              </Typography>
              <Button
                sx={{
                  marginTop: 10,
                  backgroundColor: "rgba(127, 251, 237, 0.8)",
                }}
                variant="contained"
              >
                Contained
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    );
};

export default Exceptional_Dental;
