import React, { useState } from "react";
import DoctorContainer from "./DoctorContainer";

const HomePage = ({ results, currentUser, onSubmit }) => {
    //use to search doctors name or specialty
    const [formData, setFormData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div>
        <h2>Book Appointment Today</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="fname"
            name="fname"
            onChange={handleChange}
            placeholder="Search by Doctor's name or Specialty"
          />
          <br />
          <input type="submit" value="Search"></input>
        </form>
      </div>
      <div>
        <h3>Select a doctor of your choice</h3>
      </div>
      <DoctorContainer results= {results}/>
    </>
  );
};

export default HomePage;
