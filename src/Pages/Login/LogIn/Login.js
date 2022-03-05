import React, { useState } from 'react';
import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../../../images/login.png'
import UseAuth from '../../../Context/Context/UseAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({})
    const { user, loginUser, authError, loading } = UseAuth();
    const navigate = useNavigate()
    const location = useLocation()

    const handleChange = e =>{
      const field = e.target.name;
      const value = e.target.value;
      const newLoginData = {...loginData};
      newLoginData[field] = value;
      setLoginData(newLoginData);
    }



    const handleLoginForm = e =>{
        loginUser(loginData.email, loginData.password, navigate, location );
        alert('submitted')
        e.preventDefault();
    }

    return (
      <Container sx={{ mt: 5 }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item sx={{ mt: 5 }} xs={6}>
            <Typography variant="h6" gutterBottom component="div">
              LOGIN
            </Typography>
            {!loading && (
              <form onSubmit={handleLoginForm}>
                <TextField
                  sx={{ width: 1, m: 1 }}
                  label="User Your Email"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  variant="standard"
                />
                <TextField
                  sx={{ width: 1, m: 1 }}
                  label="Password"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  variant="standard"
                />
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    width: "75%",
                    mt: 5,
                    backgroundColor: "rgba(76, 174, 157, 0.8)",
                  }}
                >
                  Log IN
                </Button>
                <NavLink style={{ textDecoration: "none" }} to="/register">
                  <Button variant="text">New User ? Please Register</Button>
                </NavLink>
              </form>
            )}
            {loading && <CircularProgress />}
            {user?.email && (
              <Alert severity="success">User created successfully</Alert>
            )}
            {authError && <Alert severity="error">{authError}</Alert>}
          </Grid>
          <Grid item xs={6}>
            <img style={{ width: "100%" }} src={loginImg} alt="loginPageImg" />
          </Grid>
        </Grid>
      </Container>
    );
};

export default Login;