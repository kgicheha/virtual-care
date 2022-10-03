import React, { useState } from "react";
import DoctorContainer from "./DoctorContainer";
import SearchIcon from "@mui/icons-material/Search";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material";
import {
  Typography,
  CssBaseline,
  Container,
  Grid,
  TextField,
} from "@mui/material";
import BookAppointment from "./BookAppointment";

const HomePage = ({ results, searchWord, setSearchWord, currentUser, myAppointments}) => {
  const [doctorId, setDoctorId] = useState(null);
  const [bookAppt, showBookAppt] = useState(false);

  const handleAppt = (docId) => {
    showBookAppt(!bookAppt);
    // store doctor ID,
    setDoctorId(docId);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setSearchWord(e.target.value);
  };

  // CUSTOM CSS
  const CustomSearchIcon = styled(SearchIcon)({
    float: "right",
  });
  const CardGrid = styled(Container)({
    padding: "60px",
    alignContent: "center",
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
            <form style={{ minWidth: 500 }} id ="searchForm">
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
          <br />
          <br />
          <>
            <CardGrid maxWidth="max-content">
              <Grid container spacing={4}>
                <DoctorContainer
                  results={results}
                  handleAppt={handleAppt}
                  showBookAppt={showBookAppt}
                />
              </Grid>
            </CardGrid>
          </>
        </>
      ) : (
        <></>
      )}
      {bookAppt ? (
        <BookAppointment showBookAppt={showBookAppt} doctorId={doctorId} currentUser={currentUser} myAppointments={myAppointments}/>
      ) : null}
    </>
  );
};

export default HomePage;
