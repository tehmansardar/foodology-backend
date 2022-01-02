const User = require('../models/userModel');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userCtrl = {
	signupUsernameEmail: async (req, res) => {
		try {
			const { username, email, password } = req.body;

			if (!username || !email || !password)
				return res.status.json({ err: 'Please fill all fields' });

			if (!validateEmail(email)) {
				return res.status.json({ err: 'Invalid email' });
			}

			const userName = await User.findOne({ username });
			const userEmail = await User.findOne({ email });

			if (userName)
				return res.json({ err: 'Username already exists' });
			if (userEmail)
				return res.json({ err: 'Email already exists' });

			return res.status(200).json({ msg: 'success' });
		} catch (error) {
			return res.status(500).json({ err: error.message });
		}
	},
	signup: async (req, res) => {
		try {
			const {
				username,
				email,
				password,
				height,
				weight,
				age,
				gender,
				ethnicty,
				maritalStatus,
				children,
			} = req.body;

			if (
				!username ||
				!email ||
				!password ||
				!height ||
				!weight ||
				!age ||
				!gender ||
				!ethnicty ||
				!maritalStatus
			)
				return res.status(400).json({ msg: 'Please fill in all fields' });

			if (!validateEmail(email)) {
				return res.status(400).json({ msg: 'Invalid email' });
			}

			const userName = await User.findOne({ username });
			const userEmail = await User.findOne({ email });

			if (userName)
				return res.status(400).json({ msg: 'This username already exists' });
			if (userEmail)
				return res.status(400).json({ msg: 'This email already exists' });
			if (password.length < 6)
				return res
					.status(400)
					.json({ msg: 'Password must be atleast 6 characters' });

			const passwordHash = await bcrypt.hash(password, 12);

			const userProp = {};
			if (username) userProp.username = username;
			if (email) userProp.email = email;
			if (password) userProp.password = passwordHash;
			if (height) userProp.height = height;
			if (weight) userProp.weight = weight;
			if (age) userProp.age = age;
			if (gender) userProp.gender = gender;
			if (ethnicty) userProp.ethnicty = ethnicty;
			if (maritalStatus) userProp.maritalStatus = maritalStatus;
			if (children) userProp.children = children;

			const newUser = new User(userProp);
			await newUser.save();

			const token = jwt.sign({ id: newUser._id }, process.env.KEY);

			return res.send({ token });
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}
	},
	signin: async (req, res) => {
		try {
			const { username, password } = req.body;

			if (!username || !password)
				return res.json({ err: 'Please fill all fields' });

			const user = await User.findOne({ username });

			if (!user)
				return res.json({ err: 'Username does not exists' });

			const isMatch = await bcrypt.compare(password, user.password);

			if (!isMatch)
				return res.json({ err: 'Passowrd is incorrect.' });

			const token = jwt.sign({ id: user._id }, process.env.KEY);

			return res.status(200).json({ token });
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}
	},
};

function validateEmail(email) {
	const re =
		/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}

module.exports = userCtrl;
