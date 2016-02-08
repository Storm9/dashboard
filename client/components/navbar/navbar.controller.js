'use strict';

angular.module('dashboardApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [
      {
        'title': 'Home',
        'link': '/'
      },
      {
        'title': 'Weather',
        'link': '/weather'
      },
      {
        'title': 'CTA',
        'link': '/cta'
      }
    ];

    $scope.isCollapsed = true;

    $scope.isActive = function (route) {
      return route === $location.path();
    };
  });
