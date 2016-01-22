'use strict';

var _ = require('lodash');
var eddystoneBeacon = require('eddystone-beacon');


// Get list of beacons
exports.index = function(req, res) {
  eddystoneBeacon.advertiseUrl('http://goo.gl/HzNHaZ', { name: 'Beacon' });
  console.log('started beacon');
  res.json([]);
};
