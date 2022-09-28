import React, { useState } from "react";
import BookAppointment from "./BookAppointment";
import DoctorProfile from "./DoctorProfile";
// import { Link } from "react-router-dom";
import {
  Typography,
  Button,
  CssBaseline,
  Grid,
  Container,
  Card,
  CardContent,
} from "@material-ui/core";
import useStyles from "./styles";

const DoctorDetails = ({ result }) => {
  const classes = useStyles();

  const {
    id,
    image_url,
    first_name,
    last_name,
    specialty,
    rating,
    // state,
    // city,
    total_reviews,
  } = result;

  const [docProfile, showdocProfile] = useState(false);
  const [bookAppt, showBookAppt] = useState(false);

  const ratingDisplay = () => {
    let ratingArr = [];

    switch (rating) {
      case 3:
        ratingArr.push("★★★");
        break;
      case 4:
        ratingArr.push("★★★★");
        break;
      case 5:
        ratingArr.push("★★★★★");
        break;
      default:
        <p>"no reviews"</p>;
    }
    return ratingArr;
  };

  const handleProfile = () => {
    showdocProfile(!docProfile);
  };

  const handleAppts = () => {
    showBookAppt(!bookAppt);
  };

  return (
    <>
      <div>
        <CssBaseline />
        <Container className={classes.cardGrid} maxWidth="max-content">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4} lg={2}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <img src={image_url} alt="profile_pic" height="100" />
                  <Typography variant="h6" className={classes.docName}>
                    Dr. {first_name} {last_name}
                  </Typography>
                  <Typography gutterBottom variant="h6">
                    {specialty}
                  </Typography>
                  <Button
                    onClick={handleProfile}
                    variant="outlined"
                    className={classes.viewProfile}
                  >
                    View Profile
                  </Button>
                  <br />
                  <br />
                  {docProfile ? <DoctorProfile result={result} /> : null}
                  <Container>
                    <Typography variant="h6" className={classes.stars}>
                      {ratingDisplay()}
                    </Typography>
                    <Typography variant="body2">
                      ({total_reviews} reviews)
                    </Typography>
                  </Container>
                  <br />
                  <Button
                    className={classes.button}
                    onClick={handleAppts}
                    size="large"
                    variant="contained"
                  >
                    Book
                  </Button>
                  {bookAppt ? <BookAppointment docId={id} /> : null}
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default DoctorDetails;
