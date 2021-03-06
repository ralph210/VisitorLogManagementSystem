const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const visitor = require('./routes/visitor.route');
const faculty = require('./routes/faculty.route');
const visitingDetails = require('./routes/visitingDetails.route');
const admin = require('./routes/admin.route');

const mongoDB = process.env.MONGODB_URL;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("DB Connected"))
    .catch((error) => console.log(error));

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB Connection Error:'));
const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

app.use('/api/visitor', visitor);
app.use('/api/faculty', faculty);
app.use('/api/dashboard', visitingDetails);
app.use('/api/admin', admin);

app.set('view engine', 'ejs');

app.use(express.static('client/build'));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, "client/build/index.html"));
});


module.exports = app;