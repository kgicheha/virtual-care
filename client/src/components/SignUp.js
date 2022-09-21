import React from "react";

const SignUp = () => {
  return (
    <>
      <div id="signup">
        <div className="logosection">
          <img src={require("../Assets/logoonly.png")} alt="Logo" height="40" />
          <img src={require("../Assets/appname.png")} alt="name" height="40" />
        </div>
        <form id="signupform">
          <br />
          <h3>Create profile</h3>
          <label for="fname">First Name</label>
          <br />
          <input
            type="text"
            id="fname"
            name="fname"
            className="forminput"
            placeholder="First Name*"
          />
          <br />
          <label for="lname">Last Name</label>
          <br />
          <input
            type="text"
            id="lname"
            name="lname"
            className="forminput"
            placeholder="Last Name*"
          />
          <br />
          <label for="lname">Date of birth</label>
          <br />
          <input
            type="text"
            id="dob"
            name="dob"
            className="forminput"
            placeholder="MM/DD/YYYY"
          />
          <br />
          <label for="sex">Sex</label>
          <br />
          <select id="sex" name="sex" className="forminput">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <br />
          <label for="insurance">Current Insurance</label>
          <br />
          <select id="insurance" name="insurance" className="forminput">
            <option value="united health">United Health</option>
            <option value="kaiser foundation">Kaiser Foundation</option>
            <option value="blue cross blue shield ">
              Blue Cross Blue Shield
            </option>
            <option value="kaiser foundation">Kaiser Foundation</option>
          </select>
          <br />
          <label for="mobile">Mobile</label>
          <br />
          <input
            type="text"
            id=""
            name="mobile"
            className="forminput"
            placeholder="XXX-XXX-XXXX"
          />
          <br />
          <label for="email">Email</label>
          <br />
          <input
            type="text"
            id=""
            name="email"
            className="forminput"
            placeholder="example@gmail.com"
          />
          <br />
          <label for="password">Password</label>
          <br />
          <input
            type="text"
            id=""
            name="password"
            className="forminput"
            placeholder="*********"
          />
          <br />
          <h5>
            By continuing, I agree to the Privacy Policy and Terms of Use.{" "}
          </h5>
          <input
            type="submit"
            className="submit"
            value="Create Account"
          ></input>
          <h3>
            Already have an an account?
            <a id="signuplink" href="/login">
              {" "}
              Sign in
            </a>
          </h3>
        </form>
      </div>
    </>
  );
};

export default SignUp;
