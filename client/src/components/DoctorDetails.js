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
} from "@mui/material";
import { styled } from "@mui/material";
import { red } from "@mui/material/colors";

const DoctorDetails = ({ result }) => {

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

   // CUSTOM CSS
   const CustomCard = styled(Card)({
    backgroundColor: "#ededed",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    borderRadius: "25px",
  });
  const CustomCardContent = styled(CardContent)({
    flexGrow: 1,
    textAlign: "center",
  });
  const Name = styled(Typography)({
    fontWeight: "bold"
  });
  const Stars = styled(Typography)({
    color: "#FFBF00",
  });

  const CustomButton = styled(Button)({
    fontWeight: "bold",
    backgroundColor: "#f35757",
    color: "#ffffff",
    "&:hover": {
      backgroundColor: red[700],
    },
  });
  const ViewProfileButton = styled(Button)({
    fontWeight: "bold"
  });
  //  CUSTOM CSS ^^

  return (
    <>
      <CssBaseline />
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <CustomCard >
          <CustomCardContent >
            <img src={image_url} alt="profile_pic" height="100" />
            <Name variant="h6">
              Dr. {first_name} {last_name}
            </Name>
            <Typography gutterBottom variant="h6">
              {specialty}
            </Typography>
            <ViewProfileButton
              onClick={handleProfile}
              variant="outlined"
            >
              View Profile
            </ViewProfileButton>
            <br />
            <br />
            {docProfile ? <DoctorProfile result={result} /> : null}
            <Container>
              <Stars variant="h6">
                {ratingDisplay()}
              </Stars>
              <Typography variant="body2">({total_reviews} reviews)</Typography>
            </Container>
            <br />
            <CustomButton
              onClick={handleAppts}
              size="large"
              variant="contained"
              href="/oldcalendar"
            >
              Book
            </CustomButton>
            {/* {bookAppt ? <BookAppointment docId={id} /> : null} */}
          </CustomCardContent>
        </CustomCard>
      </Grid>
    </>
  );
};

export default DoctorDetails;
