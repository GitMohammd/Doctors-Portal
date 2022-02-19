import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Paper from "@mui/material/Paper";
import BookingModal from '../BookingModal/BookingModal';

const BookAppointment = ({ booking }) => {
   const [openModal, setOpenModal] = React.useState(false);
   const handleOpenModal = () => setOpenModal(true);
   const handleCloseModal = () => setOpenModal(false);
  
  const {name, time, space } = booking;


  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: "70%",
              height: 160,
            },
          }}
        >
          <Paper elevation={3}>
            <Typography sx={{ color: "info.main" }} variant="h6">
              {name}
            </Typography>
            <Typography sx={{}} variant="subtitle1">
              {time}
            </Typography>
            <Typography variant="caption">{space} SPACE AVAILABLE</Typography>
            <Button
              onClick={handleOpenModal}
              sx={{ marginTop: 2 }}
              variant="contained"
            >
              {" "}
              BOOK APPOINTMENT
            </Button>
          </Paper>
        </Box>
      </Grid>
      <BookingModal
        booking={booking}
        openModal={openModal}
        handleCloseModal={handleCloseModal}
      ></BookingModal>
    </>
  );
};

export default BookAppointment;