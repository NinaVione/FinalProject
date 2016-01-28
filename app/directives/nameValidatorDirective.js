app.directive('nameValidator', function() {

  'use strict';
  
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function (scope, element, attrs, ctrl) {
      ctrl.$parsers.unshift(function(value) {
        var valid;
        var letters = /^[A-Z][a-z]{3,}$|^[A-Z][a-z]{3,}\s[A-Z][a-z]{3,}$/;
        if(value.match(letters)) {
          valid = true;
        } else {
            valid = false;
        }
        return valid ? value : undefined;
      });
    }
  };
})