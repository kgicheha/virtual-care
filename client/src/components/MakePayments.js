import React, { useState, useContext } from "react";
import { red } from "@mui/material/colors";
import { styled } from "@mui/material";
import {
  Typography,
  Box,
  Button,
  CssBaseline,
  Container,
  Stack,
  InputLabel,
  Input,
  TextField,
} from "@mui/material";
const MakePayments = ({ handleCheckoutDisplay, handleSubmission }) => {
  const [errors, setErrors] = useState([]);
  const handleClose = () => {
    handleCheckoutDisplay();
  };
  const notification = () => {
    alert("Appointment Booked!");
  };
  const saveAppointment = () => {
    handleSubmission();
    notification();
  };

  // CUSTOM CSS
  const CustomButton = styled(Button)({
    fontWeight: "bold",
    backgroundColor: "#f35757",
    color: "#ffffff",
    "&:hover": {
      backgroundColor: red[700],
    },
  });
  const CustomHeader = styled(Typography)({
    padding: "30px",
  });
  const CustomStack = styled(Stack)({
    paddingTop: "30px",
  });
  // CUSTOM CSS ^^

  return (
    <>
      <CssBaseline />
      <div className="bg-modal">
        <div className="apptScheduler">
          <Stack spacing={2}>
            <CustomHeader variant="h3">Checkout</CustomHeader>
          </Stack>
          <div className="customForm">
            <div>
              <CustomStack>
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
              </CustomStack>
              <form id="paymentform" onSubmit={saveAppointment}>
                <br />
                <Typography id="closeButton" onClick={handleClose} variant="h4">
                  ✘
                </Typography>
                {errors ? (
                  <div className="displayederrors">{errors}</div>
                ) : null}
                <br />
                <Box mb={2}>
                  <TextField
                    type="text"
                    label="Cardholder Name"
                    fullWidth
                    variant="outlined"
                    //   {...register("email")}
                  />
                </Box>
                <Box mb={2}>
                  <TextField
                    type="text"
                    label="Number"
                    fullWidth
                    variant="outlined"
                    placeholder="Card Number"
                    //   {...register("email")}
                  />
                </Box>
                <Box mb={4} id="dateCVV">
                  <div id="endDate">
                    <TextField
                      type="text"
                      label="End Date"
                      variant="outlined"
                      placeholder="MM/YY"
                      // className="dateCVV"

                      //   {...register("email")}
                    />
                  </div>
                  <div id="CVV">
                    <TextField
                      type="text"
                      label="CVV"
                      variant="outlined"
                      className="dateCVV"
                      placeholder="000"
                      //   {...register("email")}
                    />
                  </div>
                </Box>

                <Box mb={2}>
                  <CustomButton
                    type="submit"
                    size="large"
                    variant="contained"
                    fullWidth
                  >
                    Pay $49.99
                  </CustomButton>
                </Box>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MakePayments;
