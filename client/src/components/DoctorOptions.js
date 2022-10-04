import React from "react";

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

const DoctorOptions = ({getSpecialty}) => {

  const passSpecialityName = (e) => {
    // console.log(e.target)
    // getSpecialty(e.target.name)
  };
  const options = [
    {
      name: "Primary Doctor",
      image_url: "../Assets/familydoc.png",
    },
    {
      name: "Therapist",
    },
    {
      name: "Dermatologist",
    },
    {
      name: "Pediatrician",
    },
  ];
  //  CUSTOM CSS
  const CustomCardGrid = styled(Grid)({
    padding: "20px",
    marginLeft: "20px",
    alignContent: "center",
    alignItems: "center",
    position: "relative",
    display: "inline-block",
  });

  const CustomCard = styled(Card)({
    backgroundColor: "#ededed",
    cursor: "pointer",
    height: "100%",
    flexDirection: "row",
    borderRadius: "25px",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  });
  const CustomCardContent = styled(CardContent)({
    flexGrow: 1,
    textAlign: "center",
    padding: "10px",
    justifyContent: "center",
  });
  //  CUSTOM CSS ^^
  return options.map((option) => (
    <>
      <CssBaseline />
      <CustomCardGrid item xs={6} sm={4} md={4} lg={2} onClick={passSpecialityName}>
        <CustomCard>
          <CustomCardContent>
            <img
              src={require("../Assets/familydoc.png")}
              alt="options"
              height="100"
            ></img>
            <Typography gutterBottom variant="h6">
              {option.name}
            </Typography>
          </CustomCardContent>
        </CustomCard>
      </CustomCardGrid>
    </>
  ));
};

export default DoctorOptions;
