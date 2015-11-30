/**
 * Main application file
 */

'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var config = require('./config/environment');
var fs = require('fs');

// Setup server
var app = express();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
var server = require('http').createServer(app);

// This line is from the Node.js HTTPS documentation.
var options = {
  key: fs.readFileSync('./server/certs/key.pem'),
  cert: fs.readFileSync('./server/certs/cert.pem')
};

// Create an HTTPS service identical to the HTTP service.
var secureServer = require('https').createServer(options, app);

require('./config/express')(app);
require('./routes')(app);

// Start server
server.listen(config.port, config.ip, function () {
  console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
});
secureServer.listen('8000', config.ip, function () {
  console.log('Secure Express server listening on %d, in %s mode', '8000', app.get('env'));
});

// Expose app
exports = module.exports = app;
