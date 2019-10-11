const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const imageSchema = new Schema({
	titre: {
		type:String,
		required: true
	},
	img: {
		type: String,
		required: true
	}
}, {
	timestamps: true
});

const image = mongoose.model('image', imageSchema);

module.exports = image;