var express = require('express');
var app = express();
var config = require('./config/');
var routes = require('./routes/');

// Configure Application
config(app);

// Register Routes
routes(app);

console.log('Express Server listening on port: ' + app.get('port'));
app.listen(app.get('port'));
