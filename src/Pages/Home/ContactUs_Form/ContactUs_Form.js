import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import bg from '../../../images/appointment-bg.png';


const formBg = {
  background: `url(${bg})`,
  marginTop: 122,
  backgroundColor: "rgba(90, 89, 120, 0.8) ",
  backgroundBlendMode: "darken",
  width: "100%",
};

const ContactUs_Form = () => {
    return (
      <Container style={formBg} sx={{ width: "%", height: 400 }}>
        <Box>
          <Typography style={{ fontSize: 17, color: "#15DDB3" }}>
            CONTACT US
          </Typography>
          <Typography style={{ fontSize: 27, color: "#FCFCFC" }} variant="h4">
            Always Connect with us
          </Typography>
          <form>
            <input type="email" placeholder="Email Address" id="fname" name="fname" />
            <br />

            <input type="text" placeholder="Subject" id="lname" name="lname" />
            <br />
            <textArea placeholder="Your Massage">

            </textArea>
            <br />
            <Button
              sx={{
                marginTop: 2,
                backgroundColor: "rgba(127, 251, 237, 0.8)",
              }}
              variant="contained"
            >
              Contained
            </Button>
          </form>
        </Box>
      </Container>
    );
};

export default ContactUs_Form;