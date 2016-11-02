require('mongoose').model("User");

var mongoose = require( 'mongoose' );
var User     = mongoose.model( 'User' );


exports.create = function(req, res) {
     new User({ name: 'Lili - express', age: '20', email: 'lili' }).save();
	}


//console.log('user file', post);