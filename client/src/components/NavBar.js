import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccountBalanceIcon from "@mui/icons-material/AccountBalanceOutlined";
import { AppBar, CssBaseline, Toolbar } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LogoutIcon from "@mui/icons-material/Logout";
import { styled } from "@mui/material";

const NavBar = ({ currentUser, updateUser }) => {

  // if (currentUser !== null){
  //   const { first_name, last_name } = currentUser;
  //   const initial = first_name.slice(0, 1).toUpperCase();
  // }

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const history = useHistory();
  //make delete request
  const handleLogOut = () => {
    fetch("/logout", {
      method: "DELETE",
    });
    updateUser(null);
    history.push("/"); // redirect user to home page after logging out
  };

  //CUSTOM CSS
  const MyCustomImage = styled("img")({
    marginTop: "10px",
    marginBottom: "10px",
  });
  //CUSTOM CSS ^^

  return (
    <div>
      {currentUser === null ? (
        <></>
      ) : (
        <>
          <CssBaseline />
          <AppBar position="relative" />
          <Toolbar>
            <MyCustomImage
              src={require("../Assets/logo.png")}
              alt="Logo"
              height="100"
            ></MyCustomImage>
            <div id="customUserIcon">
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Tooltip title="Account Information">
                  <IconButton
                    onClick={handleClick}
                    size="large"
                    sx={{ ml: 2 }}
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                  >
                    <Avatar sx={{ width: 50, height: 50 }}>
                    {/* {initial} */}
                    </Avatar>
                  </IconButton>
                </Tooltip>
              </Box>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem>
                  <AccountBalanceIcon /> My Bills
                </MenuItem>
                <MenuItem >
                  <CalendarMonthIcon />
                  <a href="/oldcalender">
                  Calendar
                </a>
                </MenuItem>
                <MenuItem>
                  <AccountCircleIcon />
                  Update Profile
                </MenuItem>
                <MenuItem onClick={handleLogOut}>
                  <LogoutIcon />
                  Sign Out
                </MenuItem>
              </Menu>
              </div>
          </Toolbar>
        </>
      )}
    </div>
  );
};

export default NavBar;
