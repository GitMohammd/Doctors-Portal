import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React, { useEffect, useState } from 'react';
import UseAuth from '../../../Context/Context/UseAuth';

const Appointments = ({date}) => {
  
    const { user, token } = UseAuth();
    const [appointments, setAppointments] = useState([])
    useEffect(() => {
        const url = `https://fierce-dusk-81451.herokuapp.com/appointments?email=${user.email}&date=${date.toLocaleDateString()}`;
        fetch(url, {
            headers:{
          authorization: `Bearer ${token}`
        }
      })
        .then(res => res.json())
        .then(data => setAppointments(data))

    },[date, user.email, token])
    return (
        <div>
            <h2>Appointments {appointments.length}</h2>
            {
    <TableContainer component={Paper}>
      <Table sx={{ }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Schedule</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appointments.map((appointment) => (
            <TableRow
              key={appointment._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {appointment.name}
              </TableCell>
              <TableCell align="right">{appointment.time}</TableCell>
              <TableCell align="right">{appointment.serviceName}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

}
        </div>
    );
};

export default Appointments;    