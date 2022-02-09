import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppoinmentBannar from '../AppointmentBannar/AppoinmentBannar';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Services></Services>
            <AppoinmentBannar></AppoinmentBannar>
        </div>
    );
};

export default Home;