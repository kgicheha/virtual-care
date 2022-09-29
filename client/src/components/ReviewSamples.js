import React from "react";
import { Typography, Card, CardContent, Grid } from "@mui/material";
import { styled } from "@mui/material";

const ReviewSamples = () => {

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
  const Stars = styled(Typography)({
    color: "#FFBF00",
  });
  //  CUSTOM CSS ^^

  const reviews = [
    {
      name: "John Doe",
      rating: "★★★★★",
      when: "Today",
      comment: "Easy to use and doctor was very professional",
    },
    {
      name: "Jane Doe",
      rating: "★★★★★",
      when: "Yesterday",
      comment: "Easy to use and doctor was very professional",
    },
    {
      name: "John Doe",
      rating: "★★★★★",
      when: "1 Month Ago",
      comment: "Great Service! Doctors are very professional",
    },
    {
      name: "Jane Doe",
      rating: "★★★★★",
      when: "2 Months Ago",
      comment: "Very Satisfied!",
    },
    {
      name: "Jane Doe",
      rating: "★★★★★",
      when: "3 Weeks Ago",
      comment: "Great App!",
    },
    {
      name: "Jane Doe",
      rating: "★★★★★",
      when: "1 Week Ago",
      comment: "Very Professional Doctors!",
    },
  ];

  return reviews.map((review) => (
    <Grid item xs={12} sm={6} md={4} lg={2}>
      <CustomCard>
        <CustomCardContent>
          <Typography gutterBottom variant="h6">
            {review.name}
          </Typography>
          <Stars variant="body1">{review.rating}</Stars>
          <Typography gutterBottom variant="body2">
            {review.when}
          </Typography>
          <Typography gutterBottom variant="body1">
            {review.comment}
          </Typography>
        </CustomCardContent>
      </CustomCard>
    </Grid>
  ));
};

export default ReviewSamples;
