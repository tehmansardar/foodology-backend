const mongoose = require('mongoose');

const mealSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			trim: true,
		},
		category: {
			type: String,
			trim: true,
		},
		type: {
			type: String,
			trim: true,
		},
		uri: {
			type: String,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('meal', mealSchema);
