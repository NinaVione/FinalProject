app.controller('translateController', [ '$scope', '$translate',
  function ($scope, $translate) {

    'use strict';

    $scope.changeToRu =function () {
      $translate.use('ru');
    };

    $scope.changeToEn =function () {
     $translate.use('en');
    };

  }
]);