const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const presentationSchema = new Schema({
	description: {
		type: String,
		required: true
	}
});

const presentation = mongoose.model('presentation', presentationSchema);

module.exports = presentation;