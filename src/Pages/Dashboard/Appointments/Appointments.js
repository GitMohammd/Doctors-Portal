import React, { useEffect, useState } from 'react';
import UseAuth from '../../../Context/Context/UseAuth';

const Appointments = () => {
    const { user} = UseAuth();
    const [appointments, setAppointments] = useState([])
    useEffect(() => {
        const url = `http://localhost:5000/appointments?email=${user.email}`
        fetch(url)
        .then(res => res.json())
        .then(data => setAppointments(data))

    },[])
    console.log(appointments)
    return (
        <div>
            <h2>Appointments {appointments.length}</h2>
        </div>
    );
};

export default Appointments;    