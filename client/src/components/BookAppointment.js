import React, { useState, useContext } from "react";
// import { AppointmentContext } from "./App";
import { red } from "@mui/material/colors";
import { styled } from "@mui/material";
import {
  Scheduler,
  DateNavigator,
  TodayButton,
  Toolbar,
  MonthView,
  WeekView,
  Appointments,
  AppointmentForm,
  AppointmentTooltip,
  // ConfirmationDialog,
} from "@devexpress/dx-react-scheduler-material-ui";
import { ViewState, EditingState } from "@devexpress/dx-react-scheduler";
import {
  Typography,
  FormControlLabel,
  Paper,
  Box,
  Button,
  Radio,
  RadioGroup,
} from "@mui/material";

const BookAppointment = ({
  currentUser,
  doctorId,
  showBookAppt,
  myAppointments,
  handleCheckoutDisplay,
  setNewAppt
}) => {
  // const appointments = useContext(AppointmentContext);

  const [currentViewName, setcurrentViewName] = useState(true);

  //to display the errors
  const [errors, setErrors] = useState([]);

  // const [newAppt, setNewAppt] = useState([])

  const handleClose = () => {
    showBookAppt();
  };

  const setAppointment = (data) => {
    console.log("committing changes");
    console.log(data);

    showBookAppt();
    handleCheckoutDisplay();

    if (data.added.title !== "") {
      let newAppointment = {
        patient_id: currentUser.id,
        doctor_id: doctorId,
        title: data.added.title,
        startDate: data.added.startDate,
        endDate: data.added.endDate,
      };
      console.log(newAppointment);
      // setNewAppt(newAppointment)
      // console.log(newAppt)
      // handleAppts(newAppointment);
      setNewAppt(newAppointment)
    }
  };

  const handleViewChange = () => {
    setcurrentViewName(!currentViewName);
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
    padding: "20px",
  });
  // CUSTOM CSS ^^

  return (
    <>
      <div className="bg-modal">
        <div className="apptScheduler">
          <CustomHeader variant="h3">Book Appointment</CustomHeader>
          <div>
            <form id="apptform" onSubmit={setAppointment}>
              <br />
              <Typography id="closeButton" onClick={handleClose} variant="h4">
                ✘
              </Typography>
              {errors ? <div className="displayederrors">{errors}</div> : null}
              <br />
              <Box mb={2}>
                <RadioGroup
                  aria-label="Views"
                  style={{ flexDirection: "row" }}
                  name="views"
                  value={currentViewName ? "Week" : "Month"}
                  onChange={handleViewChange}
                >
                  <FormControlLabel
                    value="Week"
                    control={<Radio />}
                    label="Week"
                  />
                  <FormControlLabel
                    value="Month"
                    control={<Radio />}
                    label="Month"
                  />
                </RadioGroup>
                <br />
                <Paper>
                  <Scheduler data={myAppointments} height={600}>
                    <ViewState
                      currentViewName={currentViewName ? "Week" : "Month"}
                    />
                    <EditingState
                      allowAdding={true}
                      onCommitChanges={setAppointment}
                    />
                    <WeekView startDayHour={5} endDayHour={19} />
                    <MonthView />
                    <Toolbar />
                    <DateNavigator />
                    <TodayButton />
                    <Appointments />
                    <AppointmentTooltip
                      showCloseButton
                      showOpenButton
                      appointmentData={myAppointments}
                    />
                    <AppointmentForm />
                  </Scheduler>
                </Paper>
              </Box>
              <Box mb={2}>
                <CustomButton
                  type="submit"
                  size="large"
                  variant="contained"
                  fullWidth
                >
                  Book Appointment
                </CustomButton>
              </Box>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookAppointment;
