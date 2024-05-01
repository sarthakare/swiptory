const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const {mongoose} = require('mongoose');
const app = express();

//database connection
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('database connected'))
.catch((err) => console.log('database not connected', err));

//middleware
app.use(express.json());

app.use('/', require('./routes/authRoutes'));

const port = 8000;
app.listen(port, () => console.log(`server is running on port ${port}`));