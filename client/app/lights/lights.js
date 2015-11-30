'use strict';

angular.module('dashboardApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('lights', {
        url: '/lights',
        templateUrl: 'app/lights/lights.html',
        controller: 'LightsCtrl'
      });
  });