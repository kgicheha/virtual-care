import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Stack from "@mui/material/Stack";
import { styled, TextField } from "@mui/material";
import { red } from "@mui/material/colors";
import {
  Typography,
  Button,
  CssBaseline,
  Container,
  FormControl,
  InputLabel,
  Input,
  MenuItem,
  Select,
  Box,
} from "@mui/material";
import { useForm } from "react-hook-form";

const SignUp = ({ updateUser }) => {
  //storing data from the form
  //storing data from the form
  const { register, handleSubmit } = useForm();

  //to display the errors
  const [errors, setErrors] = useState([]);

  //gives you access to the history instance that you may use to navigate.
  const history = useHistory();

  const onSubmit = (data) => {
    // e.preventDefault();
    console.log(data);

    // make post request on submit
    fetch(`/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          updateUser(user);
          history.push(`/login`);
        });
      } else {
        res.json().then((json) => setErrors(Object.entries(json.errors)));
      }
    });
  };

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // CUSTOM CSS

  const CustomButton = styled(Button)({
    fontWeight: "bold",
    backgroundColor: "#f35757",
    color: "#ffffff",
    "&:hover": {
      backgroundColor: red[700],
    },
  });
  // CUSTOM CSS ^^

  return (
    <>
      <CssBaseline />
      <div id="signUpDiv">
        <Stack spacing={2}>
          <Container maxWidth="max-content">
            <img
              src={require("../Assets/logoonly.png")}
              alt="Logo"
              height="40"
            />
            <img
              src={require("../Assets/appname.png")}
              alt="name"
              height="40"
            />
          </Container>
          <div className="customForm">
            <Container>
              <form onSubmit={handleSubmit(onSubmit)}>
                <br />
                <Typography variant="h6">Create profile</Typography>
                {errors
                  ? errors.map((e) => (
                      <div className="displayedErrors">
                        {e[0] + ": " + e[1]}
                      </div>
                    ))
                  : null}
                <br />
                <Box mb={2}>
                  <TextField
                    type="text"
                    label="First Name*"
                    fullWidth
                    variant="outlined"
                    {...register("first_name")}
                  />
                </Box>
                <Box mb={2}>
                  <TextField
                    type="text"
                    label="Last Name*"
                    fullWidth
                    variant="outlined"
                    {...register("last_name")}
                  />
                </Box>
                <Box mb={2}>
                  <TextField
                    type="text"
                    label="Date of Birth*"
                    fullWidth
                    variant="outlined"
                    {...register("dob")}
                    placeholder="MM/DD/YYYY"
                  />
                </Box>
                <Box mb={2}>
                <FormControl fullWidth>
                  <InputLabel>Sex*</InputLabel>
                  <Select
                    name="sex"
                    label="Sex"
                    {...register("sex")}
                    fullWidth
                  >
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                  </Select>
                </FormControl>
                </Box>

                <Box mb={2}>
                <FormControl fullWidth>
                  <InputLabel>Current Insurance*</InputLabel>
                  <Select
                    id="health_insurance"
                    label="Health Insurance"
                    // fullWidth
                    {...register("health_insurance")}
                  >
                    <MenuItem value="United Health">United Health</MenuItem>
                    <MenuItem value="Kaiser Foundation">
                      Kaiser Foundation
                    </MenuItem>
                    <MenuItem value="Blue Cross Blue Shield">
                      Blue Cross Blue Shield
                    </MenuItem>
                    <MenuItem value="Independence Health Group">
                      Independence Health Group
                    </MenuItem>
                  </Select>
                </FormControl>
                </Box>

                <Box mb={2}>
                  <TextField
                    type="text"
                    label="mobile"
                    fullWidth
                    variant="outlined"
                    {...register("mobile")}
                    placeholder="XXX-XXX-XXXX"
                  />
                </Box>
                <Box mb={2}>
                  <TextField
                    type="text"
                    label="email"
                    fullWidth
                    variant="outlined"
                    {...register("email")}
                    placeholder="example@gmail.com"
                  />
                </Box>
                <Box mb={2}>
                  <TextField
                    type="password"
                    label="password"
                    fullWidth
                    variant="outlined"
                    {...register("password")}
                    placeholder="*********"
                  />
                </Box>
                <br />
                <Typography variant="subtitle1">
                  By continuing, I agree to the Privacy Policy and Terms of Use.
                </Typography>
                <br />
                <CustomButton
                  type="submit"
                  size="large"
                  variant="contained"
                  fullWidth
                >
                  Create Account
                </CustomButton>
                <Typography variant="subtitle1">
                  Already have an an account?
                  <a id="signuplink" href="/login">
                    {" "}
                    Sign in
                  </a>
                </Typography>
              </form>
            </Container>
          </div>
        </Stack>
      </div>
    </>
  );
};

export default SignUp;
