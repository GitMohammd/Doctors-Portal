import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppoinmentBannar from '../AppointmentBannar/AppoinmentBannar';
import Backgeround_Bannar from '../Bannar/Backgeround_Bannar';
import Bannar from '../Bannar/Bannar';
import Exceptional_Dental from '../Exceptional_Dental/Exceptional_Dental';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Backgeround_Bannar></Backgeround_Bannar>
            <Bannar></Bannar>
            <Services></Services>
            <Exceptional_Dental></Exceptional_Dental>
            <AppoinmentBannar></AppoinmentBannar>
        </div>
    );
};

export default Home;