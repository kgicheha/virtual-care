import React, { useState } from "react";
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
  ConfirmationDialog,
} from "@devexpress/dx-react-scheduler-material-ui";

import {
  Typography,
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const OldCalender = ({ currentUser, handleApptChange, myAppointments }) => {

  //to display the errors
  const [errors, setErrors] = useState([]);

  //switching between week and month view
  const [currentViewName, setcurrentViewName] = useState(true);
  const handleViewChange = () => {
    setcurrentViewName(!currentViewName);
  };

 function onAppointmentChanges({ added, changed, deleted }) {
    this.setState((state) => {
      let { myAppointments } = state;
      if (added) {
        const startingAddedId = myAppointments.length > 0 ? myAppointments[myAppointments.length - 1].id + 1 : 0;
        myAppointments = [...myAppointments, { id: startingAddedId, ...added }];
      }
      if (changed) {
        myAppointments = myAppointments.map(appointment => (
          changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment));
      }
      if (deleted !== undefined) {
        myAppointments = myAppointments.filter(appointment => appointment.id !== deleted);
        console.log("I was deleted")
      }
      return { myAppointments };
    });
  }
  const onAppointmentChanged = (data, ChangeSet, deleted, type) => {
    console.log("committing changes");
    console.log(data);

    if (ChangeSet ==="deleted") {
      console.log("I was deleted");
      //make delete request
      // fetch("/logout", {
      //   method: "DELETE",
      // });
      // history.push("/oldcalender`");
    }

    if (type === "changed") {
      console.log("I was changed");
      //make patch request
      // handleApptChange()
    }
  };

  ///confirm delete
  const messages = (confirmDeleteMessage) => {
    // console.log(confirmDeleteMessage);
    if (("Delete")) {
      console.log("I was deleted");
    }
  };

  const onAppointmentDeleted = (data) => {

    console.log(data);
  }

  return (
    <>
      <div id="calender">
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
        <Scheduler data={myAppointments} height={700} onAppointmentDeleted={onAppointmentDeleted}>
          <ViewState currentViewName={currentViewName ? "Week" : "Month"} />
          <EditingState allowAdding={true} allowDeleting={true}
          onCommitChanges={onAppointmentDeleted} />
          <WeekView startDayHour={5} endDayHour={19} />
          <MonthView />
          <Toolbar />
          <DateNavigator />
          <TodayButton />
          <ConfirmationDialog messages={messages} />
          <Appointments />
          <AppointmentTooltip
            showCloseButton
            showOpenButton
            showDeleteButton
          />
          <AppointmentForm />
        </Scheduler>
      </Paper>
    </>
  );
};

export default OldCalender;
