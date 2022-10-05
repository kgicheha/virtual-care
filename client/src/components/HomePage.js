import React, { useState } from "react";
import DoctorContainer from "./DoctorContainer";
import SearchIcon from "@mui/icons-material/Search";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material";
import { useHistory } from "react-router-dom";
import {
  Typography,
  CssBaseline,
  Container,
  Grid,
  TextField,
} from "@mui/material";
import BookAppointment from "./BookAppointment";
import DoctorOptions from "./DoctorOptions";
import MakePayments from "./MakePayments";

const HomePage = ({
  results,
  searchWord,
  setSearchWord,
  currentUser,
  myAppointments,
  showAllAppointments,
}) => {
  const [doctorId, setDoctorId] = useState(null);
  const [bookAppt, showBookAppt] = useState(false);
  const [displayPayment, setDisplayPayment] = useState(false);
  const [errors, setErrors] = useState([]);
  //gives you access to the history instance that you may use to navigate.
  const history = useHistory();

  const handleChange = (e) => {
    e.preventDefault();
    setSearchWord(e.target.value);
  };

  const getDocId = (docId) => {
    showBookAppt(!bookAppt);
    // store doctor ID,
    setDoctorId(docId);
  };

  const handleCheckoutDisplay = () => {
    setDisplayPayment(!displayPayment);
  };

  const [newAppt, setNewAppt] = useState(null);

  const handleSubmission = () => {
    console.log(newAppt);
    console.log("I was submitted");

    // make post request
    fetch(`/appointments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(newAppt),
    }).then((res) => {
      if (res.ok) {
        res.json().then(
          () => {
            showAllAppointments(newAppt);
          }
          // history.push(`/home/${currentUser.id}`);
        );
      }
    });

    // .then(resp =>resp.json())
    // .then(
    //   showAllAppointments(newAppt))

    // .then((res) => {
    //   if (res.ok) {
    //     res.json().then(() => {
    //       alert("Appointment Booked!");
    //       showAllAppointments(appt)
    //       // history.push(`/home/${currentUser.id}`);
    //     });
    //   }
    // else {
    //   res.json().then((json) => setErrors(json.errors));
    // }
    // });
  };

  const getSpecialty = (name) => {
    // console.log(name);
    // setSearchWord(name)
  };
  const handleSearchBySpeciality = (e) => {
    // console.log("I was clicked");
    console.log(e.target);
  };

  // CUSTOM CSS
  const CustomSearchIcon = styled(SearchIcon)({
    float: "right",
  });
  const CardGrid = styled(Container)({
    padding: "40px",
    alignContent: "center",
  });

  const CustomCardGrid2 = styled(Container)({
    padding: "20px",
    alignItems: "center",
    alignContent: "center",
    marginLeft: "150px",
    // width: "50%"
  });

  // CUSTOM CSS ^^

  return (
    <>
      <CssBaseline />
      <div id="topSection">
        <Stack spacing={2}>
          <Typography variant="h3">Book Appointment Today</Typography>
          <br />
          <Container>
            <form style={{ minWidth: 500 }} id="searchForm">
              <TextField
                type="text"
                variant="standard"
                fullWidth
                onChange={handleChange}
                placeholder="Search by Doctor's Name or Specialty"
              />
            </form>
            <CustomSearchIcon fontSize="large" />
          </Container>
        </Stack>
      </div>
      <br />

      {searchWord.length > 0 ? (
        <>
          <Typography align="center" variant="h4">
            Select a doctor of your choice
          </Typography>
          <>
            <CardGrid maxWidth="max-content">
              <Grid container spacing={4}>
                <DoctorContainer
                  results={results}
                  getDocId={getDocId}
                  showBookAppt={showBookAppt}
                />
              </Grid>
            </CardGrid>
          </>
        </>
      ) : (
        <>
          <Typography align="center" variant="h4">
            Top-searched specialties
          </Typography>
          <CustomCardGrid2
            maxWidth="max-content"
            onClick={handleSearchBySpeciality}
          >
            <Grid container spacing={2}>
              <DoctorOptions getSpecialty={getSpecialty} />
            </Grid>
          </CustomCardGrid2>
          <br />
        </>
      )}
      {bookAppt ? (
        <BookAppointment
          showBookAppt={showBookAppt}
          handleCheckoutDisplay={handleCheckoutDisplay}
          doctorId={doctorId}
          currentUser={currentUser}
          myAppointments={myAppointments}
          setNewAppt={setNewAppt}
        />
      ) : null}

      {displayPayment ? (
        <MakePayments
          handleCheckoutDisplay={handleCheckoutDisplay}
          handleSubmission={handleSubmission}
        />
      ) : null}
    </>
  );
};

export default HomePage;
