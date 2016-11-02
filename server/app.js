var express = require('express');

const bodyParser= require('body-parser')
var app = express();
var db = require('./db');
var user = require('./user');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
const allowCors = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,OPTIONS,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
};

app.use(allowCors);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
  console.log(req.body);
});

app.post( '/users', user.createUsers );
app.get( '/users', user.seeResults );
app.delete( '/users/:id', user.delete );

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});




//https://zellwk.com/blog/crud-express-mongodb/
//-------------------------------------------------------------------------------------------
//Mongooose
