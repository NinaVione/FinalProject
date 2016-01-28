app.controller('forgotPasswordController', ['$scope', 'dataService',
  function ($scope, dataService) {

    'use strict';

    dataService.getJson(function (users) {
      $scope.setUsers(users);
    });

    $scope.setUsers = function (users) {
      $scope.users = users;
    };

    $scope.remindPassword = function (username) {
      var password = dataService.getPassword(username, $scope.users);

      if(password != undefined) {
        $scope.password = password;
      } else {
        $scope.password = "";
      }
    };

  }
]);