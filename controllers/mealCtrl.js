const Meal = require('../models/mealSchema');

const mealCtrl = {
	addMeal: async (req, res) => {
		try {
			const { name, category, type, uri } = req.body;

			const newMeal = new Meal({ name, category, type, uri });
			await newMeal.save();

			res.send(newMeal);
		} catch (error) {
			return res.status(500).json({ err: error.message });
		}
	},
};

module.exports = mealCtrl;
