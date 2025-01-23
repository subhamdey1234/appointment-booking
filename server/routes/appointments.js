const express = require('express');
const router = express.Router();
const Appointment = require('../models/appointment');


const doctors = ['Dentist', 'Dermatologist', 'Cardiologist', 'Psycatrist', 'ENT'];

// Get all appointments
router.get('/', async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.json(appointments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Book an appointment
router.post('/', async (req, res) => {
  const { clientName, doctorsName, dateTime, mobileNumber } = req.body;

  if (!doctors.includes(doctorsName)) {
    return res.status(400).json({ message: 'Invalid Doctor!' });
  }

  const appointment = new Appointment({ clientName, doctorsName, dateTime,mobileNumber });
  try {
    const newAppointment = await appointment.save();
    res.status(201).json(newAppointment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
