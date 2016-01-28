app.controller('loginController', ['$rootScope', '$scope','$state', 'dataService',
  function ($rootScope, $scope, $state, dataService) {

    'use strict';

    dataService.getJson(function (users) {
      $scope.setUsers(users);
    });

    $scope.setUsers = function (users) {
      $scope.users = users;
    }

    $scope.signIn = function () {
      var user = {
        username: $scope.username,
        password: $scope.password
      };

      dataService.login(user.username, user.password, $scope.users, function (response) {
        if(response.success) {
          dataService.setStorage();
          dataService.setStorageData('user', user);
          $state.go('home');
        } else {
          $scope.error = response.message;
        }
      });
    };
  }
]);