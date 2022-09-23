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

  return !currentUser === "" ? (
    <>
      <div>
        <img src={require("../Assets/logo.png")} alt="Logo" height="200" />
      </div>
      <div>
        <Link id="signoutbutton" onClick={handleLogOut}>
          Sign Out
        </Link>
      </div>
    </>
  ) : null;
};

export default NavBar;
