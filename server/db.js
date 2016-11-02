var mongoose = require('mongoose');  
var User = new mongoose.Schema({
		  name: { type: String }
		, age: Number
		, email: String
	});

mongoose.model('User', User);  
mongoose.connect('mongodb://localhost/'); 

console.log('we are connected');