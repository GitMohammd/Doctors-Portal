
import Box from '@mui/system/Box';
import Typography from "@mui/material/Typography";

import React from 'react';
import { Container, Grid } from '@mui/material';
import BookAppointment from '../BookAppointment/BookAppointment';

const bookingSchedules = [
  {
    id: 1,
    name: "Teeth Orthodontics",
    time: "8:00AM - 9.00AM",
    space: 10,
  },
  {
    id: 2,
    name: "Cosmetic Dentistry",
    time: "10:05AM - 11.30AM",
    space: 5,
  },
  {
    id: 3,
    name: "Teeth Cleaning",
    time: "5:00AM - 6.30AM",
    space: 11,
  },
  {
    id: 4,
    name: "Cavity Protection",
    time: "7:00AM - 8.30AM",
    space: 7,
  },
  {
    id: 5,
    name: "Teeth Orthodontics",
    time: "8:00AM - 9.00AM",
    space: 10,
  },
  {
    id: 6,
    name: "Teeth Orthodontics",
    time: "8:00AM - 9.00AM",
    space: 10,
  },
];

const AvailableAppoint = ({date}) => {
    const newDate = date.toDateString()
    return (
      <Container>
        <Typography sx={{marginBottom: 3}} variant="h4">Available Appointment on {newDate}</Typography>
        <Box>
          <Grid container spacing={2}>
            {bookingSchedules.map((booking) => (
              <BookAppointment
                key={booking.id}
                booking={booking}
              ></BookAppointment>
            ))}
          </Grid>
        </Box>
      </Container>
    );
};

export default AvailableAppoint;