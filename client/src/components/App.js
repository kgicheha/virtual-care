import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";
import LandingPage from "./LandingPage";
import Login from "./Login";
import NavBar from "./NavBar";
import SignUp from "./SignUp";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  // const updateUser = (user) => setCurrentUser(user);
  const [results, setResults] = useState([]);

  //get patients session
  useEffect(() => {
    fetch(`/me`)
      .then((res) => res.json())
      .then((patient) => {
        setCurrentUser(patient);
      });
  }, []);

  //fetch doctors records
  useEffect(() => {
    fetch(`/doctors`)
      .then((res) => res.json())
      .then((data) => {
        setResults(data);
      });
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar currentUser={currentUser} updateUser={setCurrentUser} />
        <Switch>
          <Route path="/login">
            <Login updateUser={setCurrentUser} />
          </Route>
          <Route path="/signup">
            <SignUp updateUser={setCurrentUser} />
          </Route>
          <Route path="/home">
            <HomePage results={results} currentUser={currentUser} />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
