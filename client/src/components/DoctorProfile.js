import React from "react";
import {
  Typography,
  CssBaseline,
} from "@mui/material";

const DoctorProfile = ({ result }) => {
  const {
    years_experience,
    university,
    email,
    mobile,
    hourly_rate,
    address,
    state,
    city,
    zipcode,
  } = result;
  return (
    <>
      <CssBaseline />
      <Typography gutterBottom variant="body2">
        <span id="details">{years_experience}+ Years of experience</span>
      </Typography>
      <Typography gutterBottom variant="body2">
        <span id="details">Rate:</span> ${hourly_rate}/ hour
      </Typography>
      <Typography gutterBottom variant="body2">
        <span id="details">Address:</span> {address}, {city}, {state}, {zipcode}
      </Typography>
      <Typography gutterBottom variant="body2">
        <span id="details">Email:</span> {email}
      </Typography>
      <Typography gutterBottom variant="body2">
        <span id="details">Phone Number: </span>
        {mobile}
      </Typography>
    </>
  );
};

export default DoctorProfile;
