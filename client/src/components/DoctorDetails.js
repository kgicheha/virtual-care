import React, { useState } from "react";
import DoctorProfile from "./DoctorProfile";

const DoctorDetails = ({ result }) => {
  const {
    image_url,
    first_name,
    last_name,
    specialty,
    rating,
    state,
    city,
    total_reviews,
  } = result;

  const [docProfile, showdocProfile] = useState(false);

  const ratingDisplay = () => {
    let ratingArr = [];

    switch (rating) {
      case 3:
        ratingArr.push("★★★");
        break;
      case 4:
        ratingArr.push("★★★★");
        break;
      case 5:
        ratingArr.push("★★★★★");
        break;
    }
    return ratingArr;
  };

  const handleProfile = () => {
    showdocProfile(!docProfile);
  };

  return (
    <>
      <div>
        <img src={image_url} alt="profile_pic" height="100" />
        <h4>
          Dr. {first_name} {last_name}
        </h4>
        <h4>{specialty}</h4>
        <h5>
          {city}, {state}
        </h5>
        <button onClick={handleProfile}>View Profile</button>
      </div>
      {docProfile ? <DoctorProfile result={result} /> : null}
      <div id="rating">
        <h4 id="ratingstars">{ratingDisplay()}</h4>
        <h4>({total_reviews} reviews)</h4>
      </div>
      <button id="visitdoc">Book</button>
    </>
  );
};

export default DoctorDetails;
