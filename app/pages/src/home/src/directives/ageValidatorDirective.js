app.directive('ageValidator', function() {

  'use strict';
  
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function (scope, element, attrs, ctrl) {
      ctrl.$parsers.unshift(function(value) {
        var valid;
        var numbers = /^(?:1[89]|[2-5]\d|6[0-5])$/;
          if(value.match(numbers)) {
            valid = true;
          } else {
              valid = false;
          }
        return valid ? value : undefined;
      });
    }
  };
})