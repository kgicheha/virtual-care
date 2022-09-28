import React from "react";
import DoctorDetails from "./DoctorDetails";

const DoctorContainer = ({ results }) => {
  const renderDoctors = () =>
    results.map((result) => <DoctorDetails key={result.id} result={result} />);
  return renderDoctors();
};

export default DoctorContainer;
