import React from "react";
import { Link, useHistory } from "react-router-dom";

const NavBar = ({ currentUser, updateUser }) => {

  const history = useHistory();
  //make delete request
  const handleLogOut = () => {
    fetch("/logout", {
      method: "DELETE",
    });
    updateUser("");
    history.push("/"); // redirect user to home page after logging out
  };


  return (
    <>
      <div>
        <img src={require("../Assets/logo.png")} alt="Logo" height="200" />
      </div>
      {currentUser ? (
        <div>
          <Link id="signoutbutton" onClick={handleLogOut}>
            Sign Out
          </Link>
        </div>
      ) : (
        <div>
          <Link id="signinbutton" to="/login">Sign In</Link>
        </div>
      )}
    </>
  );
};

export default NavBar;
