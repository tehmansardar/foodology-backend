const mongoose = require('mongoose');
const userSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: [true, 'Please enter username'],
			trim: true,
			unique: true,
		},
		email: {
			type: String,
			required: [true, 'Please enter email'],
			trim: true,
			unique: true,
		},
		password: {
			type: String,
			required: [true, 'Please enter password'],
		},
		height: {
			type: String,
			required: [true, 'Please enter height'],
		},
		weight: {
			type: String,
			required: [true, 'Please enter weight'],
		},
		age: {
			type: String,
			required: [true, 'Please enter age'],
		},
		gender: {
			type: String,
			required: [true, 'Please enter gender'],
		},
		ethnicty: {
			type: String,
			required: [true, 'Please enter ethnicty'],
		},
		maritalStatus: {
			type: String,
			required: [true, 'Please enter marital status'],
		},
		children: {
			childrenNo: { type: Number, default: 0 },
			childNo: [],
		},
	},
	{ timestamps: true }
);
module.exports = mongoose.model('user', userSchema);
