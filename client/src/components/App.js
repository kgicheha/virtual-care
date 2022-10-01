import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import BookAppointment from "./BookAppointment";
import MyCalendar from "./MyCalendar";
import HomePage from "./HomePage";
import LandingPage from "./LandingPage";
import Login from "./Login";
import NavBar from "./NavBar";
import SignUp from "./SignUp";
import OldCalender from "./OldCalender";

function App() {
  const [searchWord, setSearchWord] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  // const updateUser = (user) => setCurrentUser(user);
  const [results, setResults] = useState([]);
  const [myAppointments, setMyAppointments] = useState([]);


  //get patients session
  // useEffect(() => {
  //   if (currentUser !== null) {
  //   fetch(`/me`)
  //     .then((res) => res.json())
  //     .then((patient) => {
  //       setCurrentUser(patient);
  //     });
  //   }
  // }, []);

  //fetch doctors records
  useEffect(() => {
    if (currentUser !== null) {
    fetch(`/doctors`)
      .then((res) => res.json())
      .then((data) => {
        setResults(data);
      });
    }
  }, [currentUser]);

  //search functionality
  // eslint-disable-next-line
  const SearchTerm = results.filter((result) => {
    if (searchWord === "") return true;
    else if (
      result.first_name.toLowerCase().includes(searchWord.toLowerCase()) ||
      result.last_name.toLowerCase().includes(searchWord.toLowerCase()) ||
      result.state.toLowerCase().includes(searchWord.toLowerCase()) ||
      result.specialty.toLowerCase().includes(searchWord.toLowerCase())
    ) {
      return true;
    }
  });

  //get appointments
  useEffect(() => {
    if (currentUser !== null) {
        fetch(`/appointments`)
          .then((res) => res.json())
          .then((data) => {
            setMyAppointments(data);
          });
        }
      }, [currentUser]);

    const handleApptChange = (appointment) => {
      // make patch request and update myapointments
    }

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
          <Route path="/bookappt">
            <BookAppointment updateUser={setCurrentUser} />
          </Route>
          {/* <Route path="/calender">
            <MyCalendar myAppointments={myAppointments} updateUser={setCurrentUser} />
          </Route> */}
          <Route path="/oldcalender">
            <OldCalender handleApptChange ={handleApptChange} myAppointments={myAppointments} currentUser={currentUser} />
          </Route>
          <Route path="/home">
            <HomePage
              setSearchWord={setSearchWord}
              results={SearchTerm}
              currentUser={currentUser}
            />
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
