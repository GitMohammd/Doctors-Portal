import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppoinmentBannar from '../AppointmentBannar/AppoinmentBannar';
import Bannar from '../Bannar/Bannar';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Bannar></Bannar>
            <Services></Services>
            <AppoinmentBannar></AppoinmentBannar>
        </div>
    );
};

export default Home;