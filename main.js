require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const connectDB = require('./config/db.js');

// config
const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// DB config
connectDB();

// routes
app.use('/user', require('./routes/user'));
app.use('/', (req, res, next) => {
	res.send('/**/');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
