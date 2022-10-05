import React from "react";
import DoctorDetails from "./DoctorDetails";

const DoctorContainer = ({ results, getDocId , showBookAppt}) => {
  const renderDoctors = () =>
    results.map((result) => (
      <DoctorDetails
        key={result.id}
        result={result}
        getDocId={getDocId}
        showBookAppt={showBookAppt}
      />
    ));
  return renderDoctors();
};

export default DoctorContainer;
