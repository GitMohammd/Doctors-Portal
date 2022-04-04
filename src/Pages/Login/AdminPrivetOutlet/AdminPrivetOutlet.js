import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import UseAuth from '../../../Context/Context/UseAuth';

const AdminPrivetOutlet = () => {
const { user, admin, loading } = UseAuth();
    const location = useLocation();
    if(loading) {return <CircularProgress />;}
  return user.email && admin ? (
    <Outlet />
  ) : (
    <Navigate to="/dashboard/dashboardHome" state={{ from: location }} replace />
  );
};


export default AdminPrivetOutlet;