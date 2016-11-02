var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
		  name: { type: String }
		, age: Number
		, email: String
	});

module.exports = mongoose.model('User', userSchema);