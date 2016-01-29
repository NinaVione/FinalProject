app.controller('chartController', [ '$scope',
  function ($scope) {

    'use strict';

    var elements = [];

    this.addListener = function(observer) {
      elements.push(observer)
    };

    this.removeListener = function(observer) {
      var index = elements.indexOf(observer);

      if (index) {
        elements.splice(index, 1)
      }
    };

    this.notify = function(message) {
      for (var i = elements.length - 1; i >= 0; i--) {
        elements[i](message)
      }
    };
  }
]);