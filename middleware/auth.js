const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
	try {
		const token = req.header('Authorization');
		if (!token) return res.json({ err: 'Invalid credentials' });

		jwt.verify(token, process.env.KEY, (err, user) => {
			if (err) return res.json({ err: 'Invalid credentials' });
			req.user = user;
			next();
		});
	} catch (error) {
		res.status(500).json({ msg: error.message });
	}
};

module.exports = auth;
