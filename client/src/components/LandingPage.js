import React from "react";
// import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import {
  Typography,
  AppBar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
} from "@material-ui/core";
import useStyles from "./styles";

const LandingPage = () => {
  const classes = useStyles();

  const reviews = [
    {
      name: "John Doe",
      rating: "★★★★★",
      when: "2 Weeks Ago",
      comment: "Easy to use and doctor was very professional"
    },
    {
      name: "Jane Doe",
      rating: "★★★★★",
      when: "1 Month Ago",
      comment: "Easy to use and doctor was very professional"
    },
    {
      name: "John Doe",
      rating: "★★★★★",
      when: "1 Month Ago",
      comment: "Great Service! Doctors are very professional"
    },
    {
      name: "Jane Doe",
      rating: "★★★★★",
      when: "2 Month Ago",
      comment: "Very Satisfied!"
    }
  ]


  //       <div id="bottomsection">
  //         <h4>
  //           © 2022 Virtual Care. All Rights Reserved | 111 Ocean Drive, San
  //           Fransisco, CA 94111
  //         </h4>
  //       </div>
  //     </>
  //   );

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
            <Typography variant="h7">
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
            <Grid container spacing={4} >
            {
              reviews.map((review)=> (
              <Grid item xs={12} sm={6} md={4} lg={2}>
                <Card className={classes.card} >
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h6">{review.name}</Typography>
                    <Typography gutterBottom variant="h6" className={classes.stars}>{review.rating}</Typography>
                    <Typography gutterBottom variant="p">{review.when}</Typography>
                    <Typography gutterBottom variant="h6">{review.comment}</Typography>
                  </CardContent>
                </Card>
              </Grid>
              ))
            }
            </Grid>
          </Container>
        </div>
          <footer className={classes.footer}>
            <Typography variant="h6" align="center" gutterBottom>
            © 2022 Virtual Care. All Rights Reserved | 111 Ocean Drive, San Fransisco, CA 94111
            </Typography>
          </footer>
      </main>
    </>
  );
};

export default LandingPage;
