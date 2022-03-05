import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import UseAuth from '../../../Context/Context/UseAuth';

const PrivateOutlet = () => {
    const { user, loading } = UseAuth();
    const location = useLocation();
    if(loading) {return <CircularProgress />;}
  return user.email ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateOutlet;