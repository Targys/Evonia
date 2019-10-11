const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const historiqueSchema = new Schema({
	titre: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	}
});

const historique = mongoose.model('historique', historiqueSchema);

module.exports = historique;