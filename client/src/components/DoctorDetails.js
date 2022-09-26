import React, { useState } from "react";
import BookAppointment from "./BookAppointment";
import DoctorProfile from "./DoctorProfile";
// import { Link } from "react-router-dom";

const DoctorDetails = ({ result }) => {
  const {
    id,
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
  const [bookAppt, showBookAppt] = useState(false)

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
      default:
        <p>"no reviews"</p>;
    }
    return ratingArr;
  };

  const handleProfile = () => {
    showdocProfile(!docProfile);
  };

  const handleAppts = () => {
    showBookAppt(!bookAppt)
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
      <button id="visitdoc" onClick={handleAppts}>
        Book
      </button>
      {bookAppt ? <BookAppointment docId={id}/> : null}
    </>
  );
};

export default DoctorDetails;
