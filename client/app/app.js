'use strict';

angular.module('dashboardApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'ui.bootstrap',
    'hue'
  ])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
