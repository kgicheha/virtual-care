import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
// import 'react-big-calendar/lib/sass/styles';

import {
  Typography,
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
} from "@mui/material";

const MyCalendar = ({ myAppointments, updateUser }) => {
  const localizer = momentLocalizer(moment);

  // const allViews = Object
  // .keys(Calendar.Views)
  // .map(k => Calendar.Views[k])

  return (
    <>
      <div>
        <Typography variant="h3">Calender</Typography>
        <br />
        <br />
      </div>
      <div style={{ height: 700 }} onClick={()=>(console.log('I was clicked'))}>
        <Calendar
          localizer={localizer}
          events={myAppointments}
          startAccessor="start"
          endAccessor="end"
          // views={allViews}

        />
      </div>
    </>
  );
};

export default MyCalendar;
