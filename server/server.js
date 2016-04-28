var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var index = require('./routes/index');
var hero = require('./routes/hero');

var app = express();

//global config
app.use(express.static('server/public'));
app.use(bodyParser.json());

//routers
app.use('/', index);
app.use('/hero', hero);

//MongoDB
var mongoURI = 'mongodb://localhost/superheros';
var MongoDB = mongoose.connect(mongoURI).connection;

MongoDB.on('error', function(err){
  console.log('MongoDB connection error:', err);
})

MongoDB.once('open', function(){
  console.log('MongoDB connection open');
})

//server
var server = app.listen(3000, function(){
  var port = server.address().port;
  console.log('Listening on port:', port, '. Press ctrl-c to exit.');
})
