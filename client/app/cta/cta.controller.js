'use strict';

angular.module('dashboardApp')
  .controller('CtaCtrl', function ($resource) {
    var vm = this;

    var CTAInfo = $resource('https://polar-savannah-5946.herokuapp.com/api/cta');
    //var CTAInfo = $resource('http://localhost:9000/api/cta');


    CTAInfo.get(function (predictions) {
      vm.busPrediction = predictions['bustime-response'];
    });

  });
