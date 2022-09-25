import React from "react";
import DoctorContainer from "./DoctorContainer";

const HomePage = ({ results, setSearchWord }) => {
  const handleChange = (e) => {
    setSearchWord(e.target.value);
  };

  return (
    <>
      <div>
        <h2>Book Appointment Today</h2>

        <input
          type="text"
          className="searchTerm"
          onChange={handleChange}
          placeholder="Search by Doctor's Name or Specialty"
        />
        <br />
        {/* <input type="submit" value="Search"></input> */}
      </div>
      <div>
        <h3>Select a doctor of your choice</h3>
      </div>
      <DoctorContainer results={results} />
    </>
  );
};

export default HomePage;
