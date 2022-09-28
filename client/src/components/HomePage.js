import React from "react";
import DoctorContainer from "./DoctorContainer";
import SearchIcon from "@mui/icons-material/Search";
import Stack from "@mui/material/Stack";
import {
  Typography,
  CssBaseline,
  Container,
  FormControl,
  Input
} from "@material-ui/core";
import useStyles from "./styles";

const HomePage = ({ results, setSearchWord }) => {
  const classes = useStyles();

  const handleChange = (e) => {
    setSearchWord(e.target.value);
  };

  return (
    <>
      <CssBaseline />
      <div className={classes.topSection}>
        <Stack spacing={2}>
          <Typography variant="h3">Book Appointment Today</Typography>
          <br />
          <Container className={classes.searchSection}>
            <FormControl style={{ minWidth: 500 }} className={classes.searchForm}>
              <Input
                aria-describedby="my-helper-text"
                type="text"
                onChange={handleChange}
                placeholder="Search by Doctor's Name or Specialty"
              />
              <SearchIcon fontSize="large" className={classes.searchIcon}/>
            </FormControl>
          </Container>
        </Stack>
      </div>
      <br />
      <Typography align="center" variant="h4">
        Select a doctor of your choice
      </Typography>
      <br />
      <br />
      <>
      <DoctorContainer results={results} />
      </>
    </>
  );
};

export default HomePage;
