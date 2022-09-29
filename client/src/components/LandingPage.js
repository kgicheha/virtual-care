import React from "react";
import {
  Typography,
  AppBar,
  Button,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
} from "@mui/material";

import { styled } from "@mui/material";
import { red } from "@mui/material/colors";
import ReviewSamples from "./ReviewSamples";

const LandingPage = () => {

  //CUSTOM CSS
  const SignInButton = styled(Button)({
    position: "absolute",
    top: "55px",
    right: "16px",
    backgroundColor: "#f35757",
    color: "#ffffff",
    "&:hover": {
      backgroundColor: red[700],
    },
  });
  const CustomButton = styled(Button)({
    fontWeight: "bold",
    backgroundColor: "#f35757",
    color: "#ffffff",
    "&:hover": {
      backgroundColor: red[700],
    },
  });

  const FirstContainer = styled(Container)({
    padding: "80px",
  });
  const DoctorGif = styled(Container)({
    position: "relative",
    left: "300px",
    bottom: "100px",
  });
  const CustomCardGrid = styled(Container)({
    padding: "60px",
    alignContent: "center",
  });
  const Footer = styled("footer")({
    marginTop: "60px",
    backgroundColor: "#000000",
    color: "#ffffff",
    padding: "80px",
  });
    //  CUSTOM CSS ^^
  return (
    <>
      <CssBaseline />
      <AppBar position="relative" />
      <Toolbar>
        <img
          id ="logoImage"
          src={require("../Assets/logo.png")}
          alt="Logo"
          height="100"
        ></img>
        <SignInButton size="large" variant="contained" href="/login">
          Sign in
        </SignInButton>
      </Toolbar>

      <main>
        <div id="midSection">
          <FirstContainer maxWidth="max-content">
            <Typography variant="h2">
              Visit with a <br></br> doctor 24/7
            </Typography>
            <Typography variant="body2" gutterBottom>
              Get expert advice, presciptions, and access to your medical
              records
            </Typography>
            <br />
            <CustomButton size="large" variant="contained" href="/login">
              Continue
            </CustomButton>
          </FirstContainer>
          <DoctorGif maxWidth="max-content">
            <img
              src={require("../Assets/doctor.gif")}
              alt="Logo"
              height="500"
            />
          </DoctorGif>
        </div>
        <br />
        <div id="reviewsection">
          <Container maxWidth="max-content">
            <Typography variant="h3">Why Us?</Typography>
          </Container>
          <Typography align="center" variant="h4">
            What our customers say
          </Typography>
          <CustomCardGrid maxWidth="max-content">
            <Grid container spacing={4}>
              <ReviewSamples />
            </Grid>
          </CustomCardGrid>
        </div>
        <Footer>
          <Typography variant="h6" align="center" gutterBottom>
            © 2022 Virtual Care. All Rights Reserved | 111 Ocean Drive, San
            Fransisco, CA 94111
          </Typography>
        </Footer>
      </main>
    </>
  );
};

export default LandingPage;
