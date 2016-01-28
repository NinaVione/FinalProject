app.controller('chartController', [ '$scope',
  function ($scope) {

    'use strict';

    var elements = [];

    $scope.addListener = function (observer) {
      elements.push(observer)
    };

    $scope.removeListener = function (observer) {
      var index = elements.indexOf(observer);

      if (index) {
        elements.splice(index, 1)
      }
    };

    $scope.notify = function (message) {
      for (var i = elements.length - 1; i >= 0; i--) {
        elements[i](message)
      }
    };
  }
]);