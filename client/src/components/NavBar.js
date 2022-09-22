import React from "react";

const NavBar = () => {
  return (
    <>
      <div>
        <img src={require("../Assets/logo.png")} alt="Logo" height="200" />
      </div>
      <div>
        <button id="signinbutton">Sign In</button>
      </div>
    </>
  );
};

export default NavBar;
