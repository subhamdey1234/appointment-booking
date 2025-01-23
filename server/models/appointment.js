const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  clientName: { type: String, required: true },
  doctorsName: { type: String, required: true },
  dateTime: { type: Date, required: true },
  mobileNumber: {type: Number, required:true}
});

module.exports = mongoose.model('Appointment', appointmentSchema);
