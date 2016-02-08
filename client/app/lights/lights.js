'use strict';

angular.module('dashboardApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('lights', {
        url: '/',
        templateUrl: 'app/lights/lights.html',
        controller: 'LightsCtrl',
        controllerAs: 'vm'
      });
  });
