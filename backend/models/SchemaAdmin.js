const mongoose = require('mongoose');
const jwt = require("jwt-simple");
const passwordHash = require("password-hash");

const Schema = mongoose.Schema;

const adminSchema = new Schema({
	pseudo: {
		type: String,
		required: true,
		unique: true,
		trim: true,
	},
	mot_de_passe: {
	type: String,
	required: true,
}
});

adminSchema.methods = {
  authenticate: function(mot_de_passe) {
    return passwordHash.verify(mot_de_passe, this.mot_de_passe);
  },
  getToken: function() {
    return jwt.encode(this, process.env.SECRET);
  }
};

const admin = mongoose.model('admin', adminSchema);

module.exports = admin;