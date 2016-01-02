'use strict';

var _ = require('lodash');
var ctaNode = require("cta-api");
var parseString = require('xml2js').parseString;


// Get list of ctas
exports.index = function (req, res) {
  var trainApiKey = "cbf829db93c24439bbe827562226a755";
  var busApiKey = "Eg35ULsLDkxDwGJ4TGqPNCcmV";

  var callback = function(data) {
    var predictions = "" + data;
    parseString(predictions, function (err, result) {
      res.json(result);
    });
  };
  var errorCb = function(e) { console.log(e.message); };

  ctaNode.bus.predictions.get({ key: busApiKey, rt: 8, stpid: 18009}, callback, errorCb);

};
