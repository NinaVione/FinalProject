app.controller('forgotPasswordController', ['$scope', 'dataService', '$translate',
  function ($scope, dataService, $translate) {

    'use strict';

    dataService.getJson(function (users) {
      $scope.setUsers(users);
    });

    $scope.setUsers = function (users) {
      $scope.users = users;
    };

    $scope.remindPassword = function (username) {
      var password = dataService.getPassword(username, $scope.users);

      $scope.password = "";

      if(password != undefined) {
        $scope.password = password;
      } else {
        $translate(['NO_USER']).then(function (translations) {
          $scope.password = translations.NO_USER;
        })
      }
    };

  }
]);