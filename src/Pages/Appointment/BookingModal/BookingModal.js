import React, { useState } from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button, TextField } from '@mui/material';
import UseAuth from '../../../Context/Context/UseAuth';


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};



const BookingModal = ({ openModal, handleCloseModal, booking, date }) => {
  const { name, time, space } = booking;
  const {user} = UseAuth();
  const initialBookingInfo = {name:user.displayName, phone:"", email:user.email}
  const [bookingInfo, setBookingInfo] = useState(initialBookingInfo);
  const handleOnBlur = e =>{
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = {...bookingInfo};
    newInfo[field] = value;
    setBookingInfo(newInfo);
  }
  const handleModalSubmit = e => {
    console.log('hiii');
    const appointment = {
      ...bookingInfo,
      time,
      serviceName: name,
      date: date.toLocaleDateString(),
    };
    console.log(appointment);
    handleCloseModal();
    e.preventDefault();
  };
  return (
    <div>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            style={{ color: "#00b8d4", textAlign: "center" }}
            variant="h6"
            component="h2"
          >
            {name}
          </Typography>
          <form onSubmit={handleModalSubmit} style={{ marginTop: 12 }}>
            <TextField
              disabled
              sx={{ width: "95%", m: 1 }}
              id="outlined-size-small"
              defaultValue={time}
              size="small"
            />
            <TextField
              sx={{ width: "95%", m: 1 }}
              id="outlined-size-small"
              name="name"
              onBlur={handleOnBlur}
              defaultValue={user.displayName}
              size="small"
            />
            <TextField
              sx={{ width: "95%", m: 1 }}
              id="outlined-size-small"
              name="phone"
              onBlur={handleOnBlur}
              defaultValue="Phone Number"
              size="small"
            />
            <TextField
              sx={{ width: "95%", m: 1 }}
              id="outlined-size-small"
              name="email"
              onBlur={handleOnBlur}
              defaultValue={user.email}
              size="small"
            />
            <TextField
              disabled
              sx={{ width: "95%", m: 1 }}
              id="outlined-size-small"
              defaultValue={date.toDateString()}
              size="small"
            />
            <Button type="submit" variant="outlined">
              Submit
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default BookingModal;