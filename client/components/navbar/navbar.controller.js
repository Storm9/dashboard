'use strict';

angular.module('dashboardApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [
      {
        'title': 'Home',
        'link': '/'
      },
      {
        'title': 'Lights',
        'link': '/lights'
      },
      {
        'title': 'Weather',
        'link': '/weather'
      }
    ];

    $scope.isCollapsed = true;

    $scope.isActive = function (route) {
      return route === $location.path();
    };
  });
