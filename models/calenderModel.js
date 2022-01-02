const mongoose = require('mongoose');

const calenderSchema = new mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'users',
		},
		eating: [
			{
				name: {
					type: String,
				},
				category: {
					type: String,
				},
				type: {
					type: String,
				},
				time: {
					type: String,
				},
			},
		],
		drinking: [
			{
				name: {
					type: String,
				},
				category: {
					type: String,
				},
				type: {
					type: String,
				},
				time: {
					type: String,
				},
			},
		],
		acoholoic: [
			{
				name: {
					type: String,
				},
				category: {
					type: String,
				},
				type: {
					type: String,
				},
				time: {
					type: String,
				},
			},
		],
		smoking: {
			smoke: {
				type: Boolean,
			},
			cigarettes: {
				type: Number,
			},
		},
		sleep: {
			type: Number,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('calender', calenderSchema);
