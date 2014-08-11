'use strict';

angular.module('marvel')
.directive('marvelHeader', function($location) {
  return {
    restrict: 'A',
    link: function(scope, element) {
      if ($location.path() === '/') {
        return element.hide();
      }

      element.show();

      scope.$on('$locationChangeStart', function() {
        if ($location.path() === '/') {
          element.hide();
          return;
        }

        element.show();
      });
    }
  };
});
