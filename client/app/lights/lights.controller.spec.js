'use strict';

describe('Controller: LightsCtrl', function () {

  // load the controller's module
  beforeEach(module('dashboardApp'));

  var LightsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LightsCtrl = $controller('LightsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
