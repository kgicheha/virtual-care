// import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import Login from "./Login";
import NavBar from "./NavBar";
import SignUp from "./SignUp";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <NavBar/>
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/signup">
            <SignUp/>
          </Route>
          <Route path="/">
            <LandingPage/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;