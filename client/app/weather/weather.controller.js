'use strict';

angular.module('dashboardApp')
  .controller('WeatherCtrl', function ($resource) {
    var vm = this;

    var WeatherReport = $resource('https://polar-savannah-5946.herokuapp.com/api/weather');
    //var WeatherReport = $resource('http://localhost:9000/api/weather');


    WeatherReport.get(function (weather) {
      vm.weather = weather;
    });

  });
