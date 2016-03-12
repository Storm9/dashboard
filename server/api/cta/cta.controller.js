'use strict';

var _ = require('lodash');
var request = require('request');
var ctaNode = require("cta-api");
var parseString = require('xml2js').parseString;

// Get list of ctas
exports.index = function (req, res) {
  var trainApiKey = "cbf829db93c24439bbe827562226a755";
  var busApiKey = "Eg35ULsLDkxDwGJ4TGqPNCcmV";
  var url = 'http://www.ctabustracker.com/bustime/api/v1/getpredictions?key=Eg35ULsLDkxDwGJ4TGqPNCcmV&stpid=18009&rt=8';

  request.get(url, function (error, response, data) {
    var predictions = "" + data;
    if (!error && response.statusCode == 200) {
      parseString(predictions, function (parseError, result) {
        res.json(result);
      });
    }
  });
};
