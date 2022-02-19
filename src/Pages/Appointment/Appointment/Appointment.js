import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import AvailableAppoint from '../AvailableAppointment/AvailableAppoint';

const Appointment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
      <div>
        <Navigation></Navigation>
        <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
        <AvailableAppoint date={date}></AvailableAppoint>
      </div>
    );
};

export default Appointment;