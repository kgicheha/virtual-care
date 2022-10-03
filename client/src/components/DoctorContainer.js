import React from "react";
import DoctorDetails from "./DoctorDetails";

const DoctorContainer = ({ results, handleAppt , showBookAppt}) => {
  const renderDoctors = () =>
    results.map((result) => (
      <DoctorDetails
        key={result.id}
        result={result}
        handleAppt={handleAppt}
        showBookAppt={showBookAppt}
      />
    ));
  return renderDoctors();
};

export default DoctorContainer;
