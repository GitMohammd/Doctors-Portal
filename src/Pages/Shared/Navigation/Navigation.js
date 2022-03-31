import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, NavLink, Outlet } from "react-router-dom";
import UseAuth from "../../../Context/Context/UseAuth";

const Navigation = () => {
  const { user, logOutUser } = UseAuth();
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            > 
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button>
              <Link to="/appointment">Appointment</Link>
            </Button>
            {user?.email ? (
              <>
              <Button>
                <NavLink
                  to="/dashboard"
                  style={{ textDecoration: "none", color: "white" }}
                >Dashboard
                </NavLink>
              </Button>
                <Button>
                <NavLink
                  to=""
                  onClick={logOutUser}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  LogOut
                </NavLink>
              </Button>
              
              </>
            ) : (
              <Button>
                <NavLink
                  style={{ textDecoration: "none", color: "white" }}
                  to="/login"
                >
                  Login
                </NavLink>
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </Box>
      
    </div>
  );
};

export default Navigation;
