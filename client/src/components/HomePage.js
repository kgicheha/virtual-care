import React from "react";
import DoctorContainer from "./DoctorContainer";
import SearchIcon from '@mui/icons-material/Search';
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material";
import { useForm } from "react-hook-form";
import {
  Typography,
  CssBaseline,
  Container,
  FormControl,
  Input,
  Grid,
  TextField
} from "@mui/material";

const HomePage = ({ results, setSearchWord }) => {

  const { register, handleSubmit } = useForm();

  const handleChange = (e) => {
    e.preventDefault()
    setSearchWord(e.target.value);
    console.log(e.target.value)
  };


  // CUSTOM CSS
  const CustomSearchIcon = styled(SearchIcon)({
    float: "left",
  });
  // const CustomSearchForm = styled(FormControl)({
  //   float: "left",
  // });
  const CardGrid = styled(Container)({
    padding: "60px",
    alignContent: "center",
  });
  // CUSTOM CSS ^^

  return (
    <>
      <CssBaseline />
      <div id= 'topSection'>
        <Stack spacing={2}>
          <Typography variant="h3">Book Appointment Today</Typography>
          <br />
          <Container>
          <form
              style={{ minWidth: 500 }}
            >
              <TextField
                type="text"
                variant="standard"
                fullWidth
                onChange={handleChange}
                placeholder="Search by Doctor's Name or Specialty"
              />
              <CustomSearchIcon fontSize="large" />
          </form>
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
        <CardGrid maxWidth="max-content">
          <Grid container spacing={4}>
            <DoctorContainer results={results} />
          </Grid>
        </CardGrid>
      </>
    </>
  );
};

export default HomePage;
