describe('loginControllerSpec', function () {

  'use strict';

  var scope;
  var dataService;
  var httpBackend;

  var responseUsersJSON = [
    {
      "username": "user1",
      "password": "user1"
    },
    {
      "username": "user2",
      "password": "user2"
    }
  ];

  beforeEach(function () {
    module("app");

    inject(function (_$httpBackend_, $controller, $rootScope, _dataService_) {
      httpBackend = _$httpBackend_;
      scope = $rootScope.$new();
      dataService = _dataService_;
      loginController = $controller('loginController', {
        $scope: scope
      });
    });
  });

  var login = function () {

  }

});