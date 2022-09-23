import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";
import LandingPage from "./LandingPage";
import Login from "./Login";
import NavBar from "./NavBar";

function App() {
  const [currentUser, setCurrentUser] = useState("");
  const updateUser = (user) => setCurrentUser(user);
  const [results, setResults] = useState([]);

  //get patients session
  useEffect(() => {
    fetch(`/me`)
      .then((res) => res.json())
      .then((patient) => {
        setCurrentUser(patient);
      });
  }, []);

  //
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
        <NavBar currentUser={currentUser} updateUser={updateUser} />
        <Switch>
          <Route path="/login">
            <Login updateUser={updateUser} />
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
