'use strict';

angular.module('dashboardApp')
  .controller('LightsCtrl', function ($resource, $timeout, hue) {
    var vm = this;
    var myHue = hue;
    var WeatherReport = $resource('https://polar-savannah-5946.herokuapp.com/api/weather');
    var CTAInfo = $resource('https://polar-savannah-5946.herokuapp.com/api/cta');

    vm.turnOnAllLights = turnOnAllLights;
    vm.turnOffLights = turnOffLights;
    vm.setDefaultScene = setDefaultScene;
    vm.setMovieMode = setMovieMode;
    vm.setVirginAtlanticPurple = setVirginAtlanticPurple;
    vm.setHalloween = setHalloween;
    vm.setDeepBlue = setDeepBlue;
    vm.setTVColorLoop = setTVColorLoop;
    vm.setKitchenDowns = setKitchenDowns;
    vm.setAllKitchenLights = setAllKitchenLights;

    function init() {
      // Get all lights
      myHue.setup({username: 'newdeveloper', bridgeIP: '10.0.1.2', debug: true});
      fireDigestEveryCoupleSeconds();
    }

    function fireDigestEveryCoupleSeconds() {
      WeatherReport.get(function (weather) {
        vm.weather = weather;
      });

      CTAInfo.get(function (predictions) {
        vm.busPrediction = predictions['bustime-response'];
      });

      $timeout(fireDigestEveryCoupleSeconds , 600000);
    }


    function turnOnAllLights() {
      myHue.setGroupState(1, {on: true, scene: "e02612416-on-0"}); //TV Lights
      myHue.setGroupState(2, {on: true, scene: "e02612416-on-0"}); //Kitchen Downs
      myHue.setGroupState(3, {on: true, scene: "e02612416-on-0"}); //Living room downs
      myHue.setGroupState(4, {on: true, scene: "e02612416-on-0"}); //Dining room light
    }

    function turnOffLights() {
      myHue.setGroupState(1, {on: false});
      myHue.setGroupState(2, {on: false});
      myHue.setGroupState(3, {on: false});
      myHue.setLightState(4, {on: false});
    }

    function setDefaultScene() {
      myHue.setGroupState(1, {on: true, scene: "e02612416-on-0"});
      myHue.setGroupState(2, {on: true, scene: "e02612416-on-0"});
      myHue.setGroupState(3, {on: false});
      myHue.setGroupState(4, {on: true, scene: "e02612416-on-0"});
    }

    function setMovieMode() {
      var transitionTime = 6;
      var brightness = 10;
      myHue.setGroupState(1, {on: true, scene: "3b727eaba-on-0", bri: brightness, transitiontime: transitionTime});
      myHue.setGroupState(2, {on: false, transitiontime: transitionTime});
      myHue.setGroupState(3, {on: false, transitiontime: transitionTime});
      myHue.setGroupState(4, {on: false});
    }

    function setVirginAtlanticPurple() {
      myHue.setGroupState(1, {on: true, scene: "e210eae61-on-0"});
      myHue.setGroupState(2, {on: true, scene: "e210eae61-on-0"});
      myHue.setGroupState(3, {on: true, scene: "e210eae61-on-0"});
      myHue.setGroupState(4, {on: true, scene: "e210eae61-on-0"});
    }

    function setHalloween() {
      myHue.setGroupState(1, {on: true, scene: "496099b7c-on-0"});
      myHue.setGroupState(2, {on: true, scene: "496099b7c-on-0"});
      myHue.setGroupState(3, {on: true, scene: "496099b7c-on-0"});
      myHue.setGroupState(4, {on: true, scene: "496099b7c-on-0"});
    }

    function setDeepBlue() {
      myHue.setGroupState(1, {on: true, scene: "121fa9f80-on-0"});
      myHue.setGroupState(2, {on: true, scene: "121fa9f80-on-0"});
      myHue.setGroupState(3, {on: true, scene: "121fa9f80-on-0"});
      myHue.setGroupState(4, {on: true, scene: "121fa9f80-on-0"});
    }

    function setTVColorLoop() {
      myHue.setGroupState(1, {on: true, bri: 255, transitiontime: 10, effect: "colorloop"});
      myHue.setGroupState(2, {on: true, bri: 255, scene: "496099b7c-on-0"});
      myHue.setGroupState(3, {on: true, bri: 255, scene: "496099b7c-on-0"});
      myHue.setGroupState(4, {on: true, bri: 255, transitiontime: 10, effect: "colorloop"});
    }

    function setKitchenDowns() {
      myHue.setGroupState(1, {on: false});
      myHue.setGroupState(2, {on: true, scene: "e02612416-on-0"});
      myHue.setGroupState(3, {on: false});
      myHue.setGroupState(4, {on: false});
    }

    function setAllKitchenLights(){
      myHue.setGroupState(1, {on: false});
      myHue.setGroupState(2, {on: true, scene: "e02612416-on-0"});
      myHue.setGroupState(3, {on: false});
      myHue.setGroupState(4, {on: true, scene: "e02612416-on-0"});
    }

    init();
  });
