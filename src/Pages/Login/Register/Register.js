import React, { useState } from 'react';
import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import loginImg from "../../../images/login.png";
import UseAuth from '../../../Context/Context/UseAuth';

const Register = () => {
  const [loginData, setLoginData] = useState({});
  console.log(loginData);
  const { user, authError, registerUser, loading } = UseAuth();
       const handleChange = (e) => {
         const field = e.target.name;
         const value = e.target.value;
         const newLoginData = { ...loginData };
         newLoginData[field] = value;
         setLoginData(newLoginData);
       };

       const handleLoginForm = (e) => {

         if (loginData.reTypePassword !== loginData.password) {
           alert("Your Password did not match");
           return;
         }
         registerUser(loginData.email, loginData.password)
         e.preventDefault();
       };
    return (
      <Container sx={{ mt: 5 }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item sx={{ mt: 5 }} xs={6}>
            <Typography variant="h6" gutterBottom component="div">
              REGISTER
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
                <TextField
                  sx={{ width: 1, m: 1 }}
                  label="Re Type Password"
                  type="password"
                  name="reTypePassword"
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
                  Register
                </Button>
                <NavLink style={{ textDecoration: "none" }} to="/login">
                  <Button variant="text">
                    Already Registered ? Please Login
                  </Button>
                </NavLink>
              </form>
            )}

            {loading && <CircularProgress />}
            {user?.email && (
              <Alert severity="success">User created successfully</Alert>
            )}
            {authError && (
              <Alert severity="error">
                {authError}
              </Alert>
            )}
          </Grid>
          <Grid item xs={6}>
            <img style={{ width: "100%" }} src={loginImg} alt="loginPageImg" />
          </Grid>
        </Grid>
      </Container>
    );
};

export default Register;