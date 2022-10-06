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
    position: "relative",
    width: "40%",
    paddingTop: "90px",
    left: "4px"
  });

 const DoctorGif = styled("img")({
    position: "relative",
    right: "2px",
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
          id="logoImage"
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
          <FirstContainer >
            <Typography variant="h2">
              Visit with a <br></br> doctor 24/7
            </Typography>
            <br></br>
            <Typography variant="h6" gutterBottom>
              Get expert advice, presciptions for only $49.99 per visit
            </Typography>
            <br />
            <CustomButton size="large" variant="contained" href="/login">
              Continue
            </CustomButton>
          </FirstContainer>

          <DoctorGif
            src={require("../Assets/doctor.gif")}
            alt="gif"
            height="650"
            width="800"
          />
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
