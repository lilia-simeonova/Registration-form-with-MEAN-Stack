var mongoose = require('mongoose');  
var userSchema = new mongoose.Schema({
		  name: { type: String }
		, age: Number
		, email: String
	});

mongoose.model('User', userSchema);  
mongoose.connect('mongodb://localhost/'); 

console.log('we are connected');