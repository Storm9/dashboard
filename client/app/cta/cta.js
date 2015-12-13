'use strict';

angular.module('dashboardApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('cta', {
        url: '/cta',
        templateUrl: 'app/cta/cta.html',
        controller: 'CtaCtrl',
        controllerAs: 'vm'
      });
  });
