'use strict';

angular.module('dashboardApp')
  .controller('CtaCtrl', function ($resource) {
    var vm = this;

    var CTAInfo = $resource('https://polar-savannah-5946.herokuapp.com/api/cta');

    CTAInfo.get(function (predictions) {
      console.dir(predictions);
      vm.busPrediction = predictions['bustime-response'];
    });

  });
