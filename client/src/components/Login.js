import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// import Stack from "@mui/material/Stack";
import { styled, Stack} from "@mui/material";
import { red } from "@mui/material/colors";
import {
  Typography,
  Button,
  CssBaseline,
  Container,
  FormControl,
  InputLabel,
  Input,
} from "@mui/material";


const Login = ({ updateUser }) => {

  //storing data from the form
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  console.log(formData)

  //to display the errors
  const [errors, setErrors] = useState([]);

  //gives you access to the history instance that you may use to navigate.
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(formData);

    // make post request on submit
    fetch(`/login`, {
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
          history.push(`/home/${user.id}`);
        });
      } else {
        res.json().then((json) => setErrors(json.errors));
      }
    });

    //reset form
    setFormData({
      email: "",
      password: "",
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // CUSTOM CSS
  const LoginDiv = styled("div")({
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
      <LoginDiv>
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
            <Typography variant="h6">Sign in</Typography>
            {errors ? <DisplayedErrors>{errors}</DisplayedErrors> : null}
            <form onSubmit={handleSubmit}>
              <FormControl>
                <InputLabel>Email Address</InputLabel>
                <Input
                  aria-describedby="my-helper-text"
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </FormControl>
              <br />
              <FormControl>
                <InputLabel>Password</InputLabel>
                <Input
                  aria-describedby="my-helper-text"
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </FormControl>
              <br />
              <br />
              <CustomButton
                type="submit"
                size="large"
                variant="contained"
              >
                Sign in
              </CustomButton>

              <br />
              <br />
              <Typography variant="subtitle1">
                New to Virtual Care?
                <a id="signuplink" href="/signup">
                  {" "}
                  Create an account
                </a>
              </Typography>
            </form>
          </CustomForm>
        </Stack>
      </LoginDiv>
    </>
  );
};

export default Login;
