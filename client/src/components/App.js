import { useState, useEffect, createContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import BookAppointment from "./BookAppointment";
// import MyCalendar from "./BackUpCalendar";
import HomePage from "./HomePage";
import LandingPage from "./LandingPage";
import Login from "./Login";
import NavBar from "./NavBar";
import SignUp from "./SignUp";
import Calender from "./Calender";
import ProfileUpdate from "./ProfileUpdate";

export const AppointmentContext = createContext();

function App() {
  const [searchWord, setSearchWord] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  // const updateUser = (user) => setCurrentUser(user);
  const [results, setResults] = useState([]);
  const [myAppointments, setMyAppointments] = useState([]);

   console.log(myAppointments)

  //get patients session
  // useEffect(() => {
  //   if (currentUser !== null) {
  //   fetch(`/me`)
  //     .then((res) => res.json())
  //     .then((patient) => {
  //       setCurrentUser(patient);
  //     });
  //   }
  // }, [currentUser]);

  //fetch doctors records
  useEffect(() => {
    if (currentUser !== null && searchWord !== "") {
      fetch(`/doctors`)
        .then((res) => res.json())
        .then((data) => {
          setResults(data);
        });
    }
  }, [currentUser, searchWord]);

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
      fetch(`/patients/${currentUser.id}`)
        .then((res) => res.json())
        .then((data) => {
          setMyAppointments(data.appointments);
        });
    }
  }, [currentUser]);


  const handleApptChange = (appointment) => {
    // make patch request and update myapointments
  };

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
        {/* <AppointmentContext.Provider value={myAppointments}> */}
            <Route path="/bookappt">
              <BookAppointment />
            </Route>
            <Route path="/calender">
              <Calender
                handleApptChange={handleApptChange}
                myAppointments={myAppointments}
                currentUser={currentUser}
              />
            </Route>
        {/* </AppointmentContext.Provider> */}
            <Route path="/profile">
              <ProfileUpdate
              currentUser={currentUser}
              />
            </Route>
            <Route path="/home">
              <HomePage
                setSearchWord={setSearchWord}
                searchWord={searchWord}
                results={SearchTerm}
                currentUser={currentUser}
                myAppointments={myAppointments}
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
