import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <div id="topsection">
        <div>
          <img src={require("../Assets/logo.png")} alt="Logo" height="200" />
        </div>
        <div>
          <Link id="signoutbutton" to="/login">
            Sign in
          </Link>
        </div>
      </div>
      <div id="midsection">
        <div id="mission">
          <h2>Visit with a doctor 24/7</h2>
          <h4>
            Get expert advice, presciptions, and access to your medical records
          </h4>
          <Link id="continuebutton" to="/login">
            Continue
          </Link>
        </div>
        <div id="doctor_gif">
          <img src={require("../Assets/doctor.gif")} alt="Logo" height="500" />
        </div>
      </div>

      <div id="reviewsection">
        <div>
          <h2>Why Us?</h2>
          <h3>What our customers say</h3>
        </div>
      </div>

      <div id="bottomsection">
        <h4>
          © 2022 Virtual Care. All Rights Reserved | 111 Ocean Drive, San
          Fransisco, CA 94111
        </h4>
      </div>
    </>
  );
};

export default LandingPage;
