require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

// config
const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// DB config

// routes
app.use('/', (req, res, next) => {
	res.json({ msg: '/**/' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
