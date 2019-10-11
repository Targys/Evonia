const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const videoSchema = new Schema({
	titre: {
		type: String,
		required: true
	},
	url: {
		type: String,
		required: true
	}
});

const video = mongoose.model('video', videoSchema);

module.exports = video;