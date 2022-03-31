import { Grid } from '@mui/material';
import React, { useState } from 'react';
import Calender from '../../Appointment/Calender/Calender';
import Appointments from '../Appointments/Appointments';

const DashboardHome = () => {
    const [date, setDate] = useState(new Date().toLocaleDateString());
    return (
        <div>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
              <Calender
                date={date}
                setDate={setDate}
              ></Calender>
            </Grid>
            <Grid item xs={6}>
             <Appointments
              date={date}
             ></Appointments>
            </Grid>
          </Grid>
        </div>
    );
};

export default DashboardHome;