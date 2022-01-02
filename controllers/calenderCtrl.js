const Calender = require('../models/calenderModel');

const calenderCtrl = {
	getCalender: async (req, res) => {
		try {
			var start = new Date(2022, 01, 02);
			const respo = await Calender.findOne({
				$and: [{ user: req.user.id }, { created_At: { $gte: start } }],
			});
			res.send(respo);
		} catch (error) {
			return res.status(500).json({ err: error.message });
		}
	},
	addCalender: async (req, res) => {
		try {
			const { eating, drinking, acoholoic, smoking, sleep } = req.body;
			const newCalender = new Calender({
				user: req.user.id,
				eating,
				drinking,
				acoholoic,
				smoking,
				sleep,
			});
			await newCalender.save();
			res.send(newCalender);
		} catch (error) {
			return res.status(500).json({ err: error.message });
		}
	},
};
module.exports = calenderCtrl;
