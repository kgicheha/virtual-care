import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Stack from "@mui/material/Stack";
import {
  Typography,
  Button,
  CssBaseline,
  Container,
  FormControl,
  InputLabel,
  Input,
} from "@material-ui/core";
import useStyles from "./styles";

const Login = ({ updateUser }) => {
  const classes = useStyles();

  //storing data from the form
  const [formData, setFormData] = useState({
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

  return (
    <>
      <CssBaseline />
      <div className={classes.login}>
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

          <Container className={classes.loginForm}>
            <br />
            <br />
            <Typography variant="h6">Sign in</Typography>
            {errors ? <div className={classes.displayedErrors}>{errors}</div> : null}
            <form onSubmit={handleSubmit}>
              <FormControl >
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
              <FormControl onSubmit={handleSubmit}>
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
              <Button
                type="submit"
                className={classes.button}
                size="large"
                variant="contained"
              >
                Sign in
              </Button>
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
          </Container>
        </Stack>
      </div>
    </>
  );
};

export default Login;
