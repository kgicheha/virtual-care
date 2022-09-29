import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material";
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
} from "@mui/material";
// import useStyles from "./Styles";

const SignUp = ({ updateUser }) => {
  // const classes = useStyles();

  //storing data from the form
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    dob: "",
    sex: "",
    health_insurance: "",
    mobile: "",
    email: "",
    password: "",
  });

  //to display the errors
  const [errors, setErrors] = useState([]);

  //gives you access to the history instance that you may use to navigate.
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(formData);
    console.log(formData);

    // make post request on submit
    fetch(`/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
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

    //reset form
    // setFormData({
    //   first_name: "",
    //   last_name: "",
    //   dob: "",
    //   sex: "",
    //   health_insurance: "",
    //   mobile: "",
    //   email: "",
    //   password: "",
    // });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // CUSTOM CSS
  const SignUpDiv = styled("div")({
    marginTop: "20px",
    backgroundColor: "hsl(0, 0%, 93%)",
    opacity: "0.8",
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });
  const CustomForm = styled(Container)({
    backgroundColor: "#ffffff",
  });
  const DisplayedErrors = styled("div")({
    color: "#f35757",
  });
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
      <SignUpDiv>
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
          <CustomForm>
            <br />
            <br />
            <Typography variant="h6">Create profile</Typography>
            {errors
              ? errors.map((e) => (
                  <DisplayedErrors>{e[0] + ": " + e[1]}</DisplayedErrors>
                ))
              : null}
            <form onSubmit={handleSubmit}>
              <FormControl>
                <InputLabel>First Name*</InputLabel>
                <Input
                  aria-describedby="my-helper-text"
                  type="text"
                  id="first_name"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                />
              </FormControl>
              <br />
              <FormControl>
                <InputLabel>Last Name*</InputLabel>
                <Input
                  aria-describedby="my-helper-text"
                  type="text"
                  id="last_name"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                />
              </FormControl>
              <br />
              <FormControl>
                <InputLabel>Date of birth*</InputLabel>
                <Input
                  aria-describedby="my-helper-text"
                  type="text"
                  id="dob"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  placeholder="MM/DD/YYYY"
                />
              </FormControl>
              <br />
              <FormControl style={{ minWidth: 165 }}>
                <InputLabel>Sex*</InputLabel>
                <Select
                  id="sex"
                  name="sex"
                  value={formData.sex}
                  onChange={handleChange}
                >
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                </Select>
              </FormControl>
              <br />
              <FormControl style={{ minWidth: 165 }}>
                <InputLabel>Current Insurance*</InputLabel>
                <Select
                  id="health_insurance"
                  name="health_insurance"
                  value={formData.health_insurance}
                  onChange={handleChange}
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
              <br />
              <FormControl>
                <InputLabel>Mobile*</InputLabel>
                <Input
                  aria-describedby="my-helper-text"
                  type="text"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="XXX-XXX-XXXX"
                />
              </FormControl>
              <br />
              <FormControl>
                <InputLabel>Email Address*</InputLabel>
                <Input
                  aria-describedby="my-helper-text"
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@gmail.com"
                />
              </FormControl>
              <br />
              <FormControl>
                <InputLabel>Password*</InputLabel>
                <Input
                  aria-describedby="my-helper-text"
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="*********"
                />
              </FormControl>
              <br />
              <br />
              <Typography variant="subtitle1">
                By continuing, I agree to the Privacy Policy and Terms of Use.
              </Typography>
              <br />
              <CustomButton type="submit" size="large" variant="contained">
                Create Account
              </CustomButton>
              <br />
              <br />
              <Typography variant="subtitle1">
                Already have an an account?
                <a id="signuplink" href="/login">
                  {" "}
                  Sign in
                </a>
              </Typography>
            </form>
          </CustomForm>
        </Stack>
      </SignUpDiv>
    </>
  );
};

export default SignUp;
