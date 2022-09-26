import React, {useState} from 'react'
import { useHistory } from "react-router-dom";


const BookAppointment = ({updateUser, docId}) => {

    console.log(docId)
    //storing data from the form
  const [formData, setFormData] = useState({
    appt_reason: "",
    appt_date_time: "",
    duration: "",
    location: ""
  });

   //to display the errors
   // eslint-disable-next-line
   const [errors, setErrors] = useState([]);

   //gives you access to the history instance that you may use to navigate.
   const history = useHistory();

   const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(formData)

    // eslint-disable-next-line
    const apptInfo = {
        doctor_id: docId,
        appt_reason: formData["appt_reason"],
        appt_date_time: Date.parse(formData["appt_date_time"])
    }

    console.log(apptInfo)
    // make post request on submit
    fetch(`/appointments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(apptInfo),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          updateUser(user);
          history.push(`/home/${user.id}`);
        });
      } else {
        res.json().then(json => setErrors(Object.entries(json.errors)))
      }
    });

    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      const handleCancel = () => {
        history.push(`/home`)
      }
  return (
    <>
    <div id="apptheader">
    <h2>Book Appointment</h2>
    </div>
    <div>
    <form id="apptform" onSubmit={handleSubmit}>
          <br />
          <h3 onClick={handleCancel}>✘</h3>
          {errors ? <div className="displayederrors">{errors}</div> : null}
          <label for="appt_reason">Reason for Visit</label><br/>
          <input
            type="text"
            id="appt_reason"
            name="appt_reason"
            className="forminput"
            value={formData.appt_reason}
            onChange={handleChange}
            placeholder="Enter Reason for Visit"
          />
          <br />
          <label for="appt_date_time">Appointment Date</label><br/>
          <input
            type="text"
            id="appt_date_time"
            name="appt_date_time"
            className="forminput"
            value={formData.appt_date_time}
            onChange={handleChange}
            placeholder="MM/DD/YYYY"
          />
          <br />
          <label for="duration">Duration(Hours)</label><br/>
          <select
            id="duration"
            name="duration"
            className="forminput"
            value={formData.duration}
            onChange={handleChange}
          >
            <option value="select">Select</option>
            <option value="1">1 Hour</option>
            <option value="2">2 Hours</option>
            <option value="3">3 Hours</option>
            <option value="4">4 Hours</option>
          </select>
          <br />
          <label for="location">Location</label><br/>
          <select
            id="location"
            name="location"
            className="forminput"
            value={formData.location}
            onChange={handleChange}
          >
            <option value="select">Select</option>
            <option value="Online">Online</option>
            <option value="In-Person">In-Person</option>
          </select>
          <br />
          <br />
          <input type="submit" className="submit" value="Book Appointment"></input>
        </form>
      </div>

    </>
  )
}

export default BookAppointment