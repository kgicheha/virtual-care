import React, { useState } from "react";
import {useHistory} from 'react-router-dom'

const SignUp = ({updateUser}) => {

  //storing data from the form
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    dob: "",
    sex: "",
    health_insurance: "",
    mobile: "",
    email: "",
    password: "",
  });

  //to display the errors
  const [errors, setErrors] = useState([])

  //gives you access to the history instance that you may use to navigate.
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(formData);
    console.log(formData);

    // make post request on submit
       fetch(`/signup`,{
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      })
      .then(res => {
        if(res.ok){
            res.json().then(user => {
                updateUser(user)
                history.push(`/login`)
            })
        }else {
            res.json().then(json => setErrors(Object.entries(json.errors)))
        }
    })

    //reset form
    // setFormData({
    //   first_name: "",
    //   last_name: "",
    //   dob: "",
    //   sex: "",
    //   health_insurance: "",
    //   mobile: "",
    //   email: "",
    //   password: "",
    // });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div id="signup">
        <div className="logosection">
          <img src={require("../Assets/logoonly.png")} alt="Logo" height="40" />
          <img src={require("../Assets/appname.png")} alt="name" height="40" />
        </div>
        <form id="signupform" onSubmit={handleSubmit}>
          <br />
          <h3>Create profile</h3>
          {errors?errors.map(e => <div className="displayederrors">{e[0]+': ' + e[1]}</div>):null}
          <label for="fname">First Name</label>
          <br />
          <input
            type="text"
            id="first_name"
            name="first_name"
            className="forminput"
            value={formData.first_name}
            onChange={handleChange}
            placeholder="First Name*"
          />
          <br />
          <label for="lname">Last Name</label>
          <br />
          <input
            type="text"
            id="last_name"
            name="last_name"
            className="forminput"
            value={formData.last_name}
            onChange={handleChange}
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
            value={formData.dob}
            onChange={handleChange}
            placeholder="MM/DD/YYYY"
          />
          <br />
          <label for="sex">Sex</label>
          <br />
          <select
            id="sex"
            name="sex"
            className="forminput"
            value={formData.sex}
            onChange={handleChange}
          >
            <option value="select">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <br />
          <label for="health_insurance">Current Insurance</label>
          <br />
          <select
            id="health_insurance"
            name="health_insurance"
            className="forminput"
            value={formData.insurance}
            onChange={handleChange}
          >
            <option value="Select">Select</option>
            <option value="United Health">United Health</option>
            <option value="Kaiser Foundation">Kaiser Foundation</option>
            <option value="Blue Cross Blue Shield">
              Blue Cross Blue Shield
            </option>
            <option value="Independence Health Group">Independence Health Group</option>
          </select>
          <br />
          <label for="mobile">Mobile</label>
          <br />
          <input
            type="text"
            id="mobile"
            name="mobile"
            className="forminput"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="XXX-XXX-XXXX"
          />
          <br />
          <label for="email">Email</label>
          <br />
          <input
            type="text"
            id="email"
            name="email"
            className="forminput"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@gmail.com"
          />
          <br />
          <label for="password">Password</label>
          <br />
          <input
            type="password"
            id="password"
            name="password"
            className="forminput"
            value={formData.password}
            onChange={handleChange}
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
