import React from "react";

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
      <h4>{years_experience} Years of experience</h4>
      <h4>{university}</h4>
      <h4>Rate: ${hourly_rate}/ hour</h4>
      <h4>
        Address:{address}, {city}, {state}, {zipcode}
      </h4>
      <h4>Email: {email}</h4>
      <h4>Mobile: {mobile}</h4>
    </>
  );
};

export default DoctorProfile;
