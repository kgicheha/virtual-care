import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  ViewState,
  EditingState,
  IntegratedEditing,
} from "@devexpress/dx-react-scheduler";
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
  ConfirmationDialog
} from "@devexpress/dx-react-scheduler-material-ui";

import {
  Typography,
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
} from "@mui/material";

const OldCalender = ({currentUser, handleApptChange, myAppointments }) => {
  //gives you access to the history instance that you may use to navigate.
  const history = useHistory();

  //to display the errors
  const [errors, setErrors] = useState([]);

  //switching between week and month view
  const [currentViewName, setcurrentViewName] = useState(true);
  const handleViewChange = () => {
    setcurrentViewName(!currentViewName);
  };

  //sample data
  let schedulerData = [
    {
      title: "Random",
      startDate: "2022-10-01T10:00",
      endDate: "2022-10-01T12:00",
    },
    {
      title: "Random",
      startDate: "2022-10-02T10:00",
      endDate: "2022-10-02T12:00",
    },
  ];

  const saveAppointment = (data, added, deleted, changed) => {
    console.log("committing changes");
    console.log(data);

    if (added) {
      let newAppointment = {
        patient_id: currentUser.id,
        // patient_id : send doctor_id from DoctorDetails component
        title: data.added.title,
        startDate: data.added.startDate,
        endDate: data.added.endDate,
      };
      console.log(newAppointment);

      // how to also include the doctor_id and user_id
      // make post request
      fetch(`/appointments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(newAppointment),
      }).then((res) => {
        if (res.ok) {
          res.json().then(() => {
            history.push(`/oldcalender`);
          });
        } else {
          res.json().then((json) => setErrors(Object.entries(json.errors)));
        }
      });
    }

    if (deleted) {
      console.log("I was deleted");
      //make delete request
      // fetch("/logout", {
      //   method: "DELETE",
      // });
      // history.push("/oldcalender`");
    }

   if (changed) {
    console.log("I was changed");
      //make patch request
      // handleApptChange()
    }
  };

  ///confirm delete
  const messages =(confirmDeleteMessage) => {
    console.log(confirmDeleteMessage)
    if (confirmDeleteMessage= true) {
      console.log("I was deleted");
    }
  }

  return (
    <>
      <div>
        <Typography variant="h3">Calender</Typography>
        <br />
        <br />
      </div>
      <RadioGroup
        aria-label="Views"
        style={{ flexDirection: "row" }}
        name="views"
        value={currentViewName ? "Week" : "Month"}
        onChange={handleViewChange}
      >
        <FormControlLabel value="Week" control={<Radio />} label="Week" />
        <FormControlLabel value="Month" control={<Radio />} label="Month" />
      </RadioGroup>
      <br />
      <Paper>
        <Scheduler data={schedulerData} height={960}>
          <ViewState currentViewName={currentViewName ? "Week" : "Month"} />
          <EditingState allowAdding={true} onCommitChanges={saveAppointment} />
          <WeekView startDayHour={5} endDayHour={19} />
          <MonthView />
          <Toolbar />
          <DateNavigator />
          <TodayButton />
          <ConfirmationDialog messages={messages}/>
          <Appointments />
          <AppointmentTooltip
            showCloseButton
            showOpenButton
            appointmentData={schedulerData}
          />
          <AppointmentForm />
        </Scheduler>
      </Paper>
    </>
  );
};

export default OldCalender;
