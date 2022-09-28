import React from 'react'
import {
  Typography,
  Card,
  CardContent,
  Grid,

} from "@material-ui/core";
import useStyles from "./styles";


const ReviewSamples = () => {
  const classes = useStyles();
    const reviews = [
        {
          name: "John Doe",
          rating: "★★★★★",
          when: "Today",
          comment: "Easy to use and doctor was very professional"
        },
        {
          name: "Jane Doe",
          rating: "★★★★★",
          when: "Yesterday",
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
          when: "2 Months Ago",
          comment: "Very Satisfied!"
        },
        {
          name: "Jane Doe",
          rating: "★★★★★",
          when: "3 Weeks Ago",
          comment: "Very Satisfied!"
        },
        {
          name: "Jane Doe",
          rating: "★★★★★",
          when: "1 Week Ago",
          comment: "Very Satisfied!"
        }
      ]
  return (

      reviews.map((review)=> (
      <Grid item xs={12} sm={6} md={4} lg={2}>
        <Card className={classes.card} >
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h6">{review.name}</Typography>
            <Typography variant="body1" className={classes.stars}>{review.rating}</Typography>
            <Typography gutterBottom variant="body2">{review.when}</Typography>
            <Typography gutterBottom variant="body1">{review.comment}</Typography>
          </CardContent>
        </Card>
      </Grid>
      ))

  )
}

export default ReviewSamples