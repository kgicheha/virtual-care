import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import SignUp from "./SignUp";

const Login = ({ updateUser }) => {
  const [login, setLogin] = useState(true);

  //storing data from the form
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  //to display the errors
  const [errors, setErrors] = useState([]);

  //gives you access to the history instance that you may use to navigate.
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(formData);

    // make post request on submit
    fetch(`/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          updateUser(user);
          history.push(`/home/${user.id}`);
        });
      } else {
        res.json().then((json) => setErrors(json.errors));
      }
    });

    //reset form
    setFormData({
      email: "",
      password: "",
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    setLogin(!login);
  };

  return login ? (
    <>
      <div id="login">
        <div className="logosection">
          <img src={require("../Assets/logoonly.png")} alt="Logo" height="40" />
          <img src={require("../Assets/appname.png")} alt="name" height="40" />
        </div>
        <form id="loginform" onSubmit={handleSubmit}>
          <br />
          <h3>Sign in</h3>
          {errors ? <div className="displayederrors">{errors}</div> : null}
          <input
            type="text"
            id="email"
            name="email"
            className="forminput"
            value={formData.email}
            onChange={handleChange}
            placeholder=" Email"
          />
          <br />
          <br />
          <input
            type="password"
            id="password"
            name="password"
            className="forminput"
            value={formData.password}
            onChange={handleChange}
            placeholder=" Password"
          />
          <br />
          <br />
          <input type="submit" className="submit" value="Sign in"></input>
          <h3>
            New to Virtual Care?
            <a
              id="signuplink"
              onClick={handleClick}
            >
              {" "}
              Create an account
            </a>
          </h3>
        </form>
      </div>
    </>
  ) : (
    <SignUp />
  );
};

export default Login;
