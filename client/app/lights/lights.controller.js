'use strict';

angular.module('dashboardApp')
  .controller('LightsCtrl', function ($resource, $timeout, hue) {
    var vm = this;
    var myHue = hue;
    var TenMinsInMilliSecs = 600000;
    var OneMinInMilliSecs = 60000;
    //var WeatherReport = $resource('https://polar-savannah-5946.herokuapp.com/api/weather');
    //var CTAInfo = $resource('https://polar-savannah-5946.herokuapp.com/api/cta');
    var WeatherReport = $resource('http://localhost:9000/api/weather');
    var CTAInfo = $resource('http://localhost:9000/api/cta');

    var scenes = {
      defaultYellow: 'a02922612-on-0',
      cockpitRed: 'ce164c0dc-on-0',
      deadMouse: 'b23171179-on-0',
      sofaBoard: 'e03bb7fed-on-0',
      movie: '1bc118f19-on-0'
    };

    function init() {
      // Get all lights
      myHue.setup({username: 'newdeveloper', bridgeIP: '10.0.1.2', debug: true});
      loadWeatherData();
      loadCTAData();

      vm.turnOnAllLights = turnOnAllLights;
      vm.turnOffLights = turnOffLights;
      vm.setDefaultScene = setDefaultScene;
      vm.setMovieMode = setMovieMode;
      vm.setDeadMouse = setDeadMouse;
      vm.setSofaBoard = setSofaBoard;
      vm.setCockpitRed = setCockpitRed;
      vm.setColorLoop = setColorLoop;
      vm.setKitchenDowns = setKitchenDowns;
      vm.setAllKitchenLights = setAllKitchenLights;
    }

    init();

    function loadWeatherData() {
      WeatherReport.get(function (weather) {
        vm.weather = weather;
      });

      $timeout(loadWeatherData, TenMinsInMilliSecs);
    }

    function loadCTAData() {
      CTAInfo.get(function (predictions) {
        vm.busPrediction = predictions['bustime-response'];
      });

      $timeout(loadCTAData, OneMinInMilliSecs);
    }

    function turnOnAllLights() {
      myHue.setGroupState(1, {on: true, scene: scenes.defaultYellow}); //TV Lights
      myHue.setGroupState(2, {on: true, scene: scenes.defaultYellow}); //Kitchen Downs
      myHue.setGroupState(3, {on: true, scene: scenes.defaultYellow}); //Living room downs
      myHue.setGroupState(4, {on: true, scene: scenes.defaultYellow}); //Dining room light
    }

    function turnOffLights() {
      myHue.setGroupState(1, {on: false});
      myHue.setGroupState(2, {on: false});
      myHue.setGroupState(3, {on: false});
      myHue.setLightState(4, {on: false});
    }

    function setDefaultScene() {
      myHue.setGroupState(1, {on: true, scene: scenes.defaultYellow});
      myHue.setGroupState(2, {on: true, scene: scenes.defaultYellow});
      myHue.setGroupState(3, {on: false});
      myHue.setGroupState(4, {on: true, scene: scenes.defaultYellow});
    }

    function setMovieMode() {
      myHue.setGroupState(1, {on: true, scene: scenes.movie});
      myHue.setGroupState(2, {on: true, scene: scenes.movie});
      myHue.setGroupState(3, {on: false});
      myHue.setGroupState(4, {on: false, scene: scenes.movie});
    }

    function setDeadMouse() {
      myHue.setGroupState(1, {on: true, scene: scenes.deadMouse});
      myHue.setGroupState(2, {on: true, scene: scenes.deadMouse});
      myHue.setGroupState(3, {on: true, scene: scenes.deadMouse});
      myHue.setGroupState(4, {on: true, scene: scenes.deadMouse});
    }

    function setSofaBoard() {
      myHue.setGroupState(1, {on: true, scene: scenes.sofaBoard});
      myHue.setGroupState(2, {on: true, scene: scenes.sofaBoard});
      myHue.setGroupState(3, {on: true, scene: scenes.sofaBoard});
      myHue.setGroupState(4, {on: true, scene: scenes.sofaBoard});
    }

    function setCockpitRed() {
      myHue.setGroupState(1, {on: true, scene: scenes.cockpitRed});
      myHue.setGroupState(2, {on: true, scene: scenes.cockpitRed});
      myHue.setGroupState(3, {on: true, scene: scenes.cockpitRed});
      myHue.setGroupState(4, {on: true, scene: scenes.cockpitRed});
    }

    function setColorLoop() {
      myHue.setGroupState(1, {on: true, bri: 255, transitiontime: 10, effect: "colorloop"});
      myHue.setGroupState(2, {on: true, bri: 255, scene: scenes.defaultYellow});
      myHue.setGroupState(3, {on: true, bri: 255, scene: scenes.defaultYellow});
      myHue.setGroupState(4, {on: true, bri: 255, transitiontime: 10, effect: "colorloop"});
    }

    function setKitchenDowns() {
      myHue.setGroupState(1, {on: false});
      myHue.setGroupState(2, {on: true, scene: scenes.defaultYellow});
      myHue.setGroupState(3, {on: false});
      myHue.setGroupState(4, {on: false});
    }

    function setAllKitchenLights() {
      myHue.setGroupState(1, {on: false});
      myHue.setGroupState(2, {on: true, scene: scenes.defaultYellow});
      myHue.setGroupState(3, {on: false});
      myHue.setGroupState(4, {on: true, scene: scenes.defaultYellow});
    }
  });
