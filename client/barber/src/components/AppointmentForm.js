import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './appointmentfrom.css';
const AppointmentForm = () => {
  const [doctors, setDoctors] = useState([]);
  const [clientName, setClientName] = useState('');
  const [doctorsName, setdoctorsName] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [mobileNumber, setMobileNumber]=useState('');

  useEffect(() => {
    // Define barbers here or fetch from the server if dynamic
    setDoctors(['Dentist', 'Dermatologist', 'Cardiologist', 'Psycatrist', 'ENT']);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/appointments', { clientName, doctorsName, dateTime,mobileNumber });
      alert('Appointment booked successfully!');
      if(doctorsName==='Dentist')//redirecting to dentist website
      window.location.replace("https://wonderful-piroshki-5b6eb0.netlify.app");
    } catch (err) {
      alert('Failed to book appointment');
    }
  };

  return (
    <form id='form1'  onSubmit={handleSubmit}>
      <div id='client'>
        <label>Patient Name:</label>
        <input type="text" value={clientName} onChange={(e) => setClientName(e.target.value)} required />
      </div>
      <div id='barber'>
        <label className='text-white'>Select Doctor:</label>
        <select value={doctorsName} onChange={(e) => setdoctorsName(e.target.value)} required>
          <option  value="">Select a Doctor</option>
          {doctors.map(doctor => (
            <option key={doctor} value={doctor}>{doctor}</option>
          ))}
        </select>
      </div>
      <div>
        <label id='dt'>Date and Time:</label>
        <input type="datetime-local" value={dateTime} onChange={(e) => setDateTime(e.target.value)} required />
      </div>
    <div>
      <label className='mt-3' id='mobile'>Mobile Number</label>
      <input type="number" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} minLength={10} required></input>
      </div>  
      
      <button id='btn' type="submit">Book Appointment</button>
    </form>
  );
};

export default AppointmentForm;
