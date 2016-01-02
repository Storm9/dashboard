/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var https = require('https');
var request = require('request');

// Get list of weather
exports.index = function(req, res) {
  request('https://api.forecast.io/forecast/df5513b0e60704f900cf7096b523f3bb/41.8333925,-88.0123477', function (error, response, body) {
    if (!error && response.statusCode === 200) {
      res.send(body.toString());
    }
  });
};
