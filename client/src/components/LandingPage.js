import React from "react";
import {
  Typography,
  AppBar,
  Button,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
} from "@material-ui/core";
import useStyles from "./styles";
import ReviewSamples from "./ReviewSamples";

const LandingPage = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <AppBar position="relative" />
      <Toolbar>
        <img
          src={require("../Assets/logo.png")}
          alt="Logo"
          height="100"
          className={classes.logo}
        />
        <Button
          className={classes.signinbutton}
          size="large"
          variant="contained"
          href="/login"
        >
          Sign in
        </Button>
      </Toolbar>

      <main>
        <div id="midsection" className={classes.midSection}>
          <Container maxWidth="max-content" className={classes.firstContainer}>
            <Typography variant="h2">
              Visit with a <br></br> doctor 24/7
            </Typography>
            <Typography variant="p">
              Get expert advice, presciptions, and access to your medical
              records
            </Typography>
            <br />
            <br />
            <Button
              className={classes.button}
              size="large"
              variant="contained"
              href="/login"
            >
              Continue
            </Button>
          </Container>

          <Container className={classes.doctorGif} maxWidth="max-content">
            <img
              src={require("../Assets/doctor.gif")}
              alt="Logo"
              height="500"
            />
          </Container>
        </div>

        <div id="reviewsection">
          <Container maxWidth="max-content">
            <Typography variant="h3">Why Us?</Typography>
          </Container>
          <Typography align="center" variant="h4">
            What our customers say
          </Typography>
          <Container className={classes.cardGrid} maxWidth="max-content">
            <Grid container spacing={4}>
              <ReviewSamples />
            </Grid>
          </Container>
        </div>
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            © 2022 Virtual Care. All Rights Reserved | 111 Ocean Drive, San
            Fransisco, CA 94111
          </Typography>
        </footer>
      </main>
    </>
  );
};

export default LandingPage;
