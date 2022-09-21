import React from "react";

const Login = () => {
  return (
    <>
      <div id="login">
        <div class="logosection">
          <img src={require("../Assets/logoonly.png")} alt="Logo" height="40" />
          <img src={require("../Assets/appname.png")} alt="name" height="40" />
        </div>
        <form id="formsection">
          <br />
          <h3>Sign in</h3>
          <input type="text" id="email" name="email" placeholder=" Email" />
          <br />
          <br />
          <input
            type="text"
            id="password"
            name="password"
            placeholder=" Password"
          />
          <br />
          <br />
          <input type="submit" id ="submit" value="Sign in"></input>
          <h3>
            New to Virtual Care?
            <a id="signuplink" href="/SignUp">
              {" "}
              Create an account
            </a>
          </h3>
        </form>
      </div>
    </>
  );
};

export default Login;
