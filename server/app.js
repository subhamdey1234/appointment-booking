const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

// Check connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Connected to MongoDB");
});

app.use('/api/appointments', require('./routes/appointments'));

PORT=5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
